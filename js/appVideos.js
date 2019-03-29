//----- Eventos y funciones de navegador e interfaz

console.log('v1.2.2.31a');

	//Eventos
	
jQuery(document).ready(function(){	//carga del DOM
	
	/*al cargar el documento*/

	cantidadReproductores = jQuery('.H_player').length;		//cantidad de elementos H_player
	
	//determinar versión de la aplicación
	if(jQuery(document).width()<800){
		cargadoMobile=true;
		//destruir reproductores que sobren
		for(i=cantidadReproductores-1; i>0; i--){
			jQuery('#player'+i).parents('.item').remove();
			console.log('#player'+i);
			console.log(jQuery('#player'+i).parents('.item'));
			cantidadReproductores = jQuery('.H_player').length;		//actualizar cantidad
			jQuery('.H_poster').css({'opacity':'0'});
		}
		//habilitar la precarga del primer video
		primeraCargaMobile=true;
	}
	
	chequearMobile();
	
	cargarApiYT();
	for(var i=0; i<cantidadReproductores; i++){
		ordenReproduccion.push(i);
	}
	
	//Lista de tags
	jQuery('.nubeTags').empty();
	for(var i=0;i<listaTemas.length;i++){
		jQuery('.nubeTags').append('<span class="tagTema">'+listaTemas[i].nombre+'</span>');
	}
	

	
	/*foco sobre la ventana/pestaña*/
	
	jQuery(window).focus(function() {
		if(reproduciendo){
			players[ordenReproduccion[reproductorActivo]].playVideo();
		}
	});

	jQuery(window).blur(function() {
		if(reproduciendo){
			players[ordenReproduccion[reproductorActivo]].pauseVideo();
		}
	});
	
	/*Resize*/
	
	jQuery(window).resize(function(){
		chequearMobile();
		/*forzar uso de versión correcta*/
		if(versionMobile){
			if(cargadoMobile){
				jQuery('.overlayDesktopCargado').css({'display':'none'});
				jQuery('.overlayMobileCargado').css({'display':'none'});
			}
			else{
				jQuery('.overlayDesktopCargado').css({'display':'block'});
				jQuery('.overlayMobileCargado').css({'display':'none'});
			}
		}
		else{
			if(cargadoMobile){
				jQuery('.overlayDesktopCargado').css({'display':'none'});
				jQuery('.overlayMobileCargado').css({'display':'block'});
			}
			else{
				jQuery('.overlayMobileCargado').css({'display':'none'});
				jQuery('.overlayDesktopCargado').css({'display':'none'});

			}
		}
	});
	
	/*Reproducir secuencia*/
	
	jQuery('#itemTexto span.iniciarRespuestas').click(function(){
		iniciarReproduccion();
	});
	
	//mobile
	jQuery('.H_poster').click(function(){
		if(cargadoMobile){
			iniciarReproduccion();
		}
	});
	
	/*Detener secuencia*/
	
	jQuery('#itemTexto span.detenerRespuestas').click(function(){
		detenerReproduccion();
	});
	
	/*Cargar nuevo tema*/
	
	jQuery('.cargarNuevoTema').click(function(){
		detenerReproduccion();
		cargarTema(parseInt(Math.random()*listaTemas.length));
	});
	
	/*Cargar tema desde tag*/
	
	jQuery('span.tagTema').click(function(){
		detenerReproduccion();
		cargarTema(jQuery(this).index());
		jQuery(window).scrollTop(0);
	});
	
});

	//Funciones
	
	function chequearMobile(){
		if(jQuery(document).width()<800){
			//mover texto
			jQuery("#itemTexto").detach().appendTo('#posicionTextoMobile');
			//versión mobile
			versionMobile=true;
			jQuery('#itemTexto .iniciarRespuestas').text('Ver otra respuesta');
		}
		else{
			//mover texto
			jQuery("#itemTexto").detach().appendTo('#posicionTextoDesktop');
			//versión mobile
			versionMobile=false;
			jQuery('#itemTexto .iniciarRespuestas').text('Ver respuestas');
		}
	}

	
//----- Funciones y variables genéricas de API Youtube

	
	var players = [];											//array de reproductores
	var reproductoresListos=0;									//contador de progreso onPlayerReady

	
	 /**/
	 
	function onYouTubeIframeAPIReady() {
		generarReproductores(cantidadReproductores);
	}
	 
	/**/
	
	function cargarApiYT(){
		var tag = document.createElement('script');
		tag.src = "https://www.youtube.com/iframe_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	}

	function onPlayerReady(event) {
		reproductoresListos++;
		jQuery('.rellenoCarga').animate({'width':100*reproductoresListos/cantidadReproductores+'%'});
		if(reproductoresListos==cantidadReproductores){	//finalizó la carga
			cargarTema(parseInt(Math.random()*listaTemas.length));
			jQuery('.barraCarga').animate({'opacity':'0'},1000,function(){
				jQuery('.overlayPrecarga').animate({'opacity':'0'},1000,function(){
					jQuery('.overlayPrecarga').css({'display':'none'});
				});
			});
		}
	}
	
	/**/
	
	function onPlayerStateChange(event) {
		if(event.data==0){
			if(!versionMobile){
				proximoVideo();
			}
			else{ /*restaurar todos los posters y no reproducir más*/
				jQuery('.H_poster').css({'opacity':'1'});
			}
		}
	}
	
	
	function generarReproductores(cantidad){
		for(var i=0; i<cantidad; i++){
			var idPlayer = 'player'+i;

			players[i] = new YT.Player(idPlayer, {
			playerVars: {
				'origin':'https://plataformahormiguero.com.ar',
			},
			  events: {
				'onReady': onPlayerReady,
				'onStateChange': onPlayerStateChange,
			  }
			});
		}
	}

	

//----- Control de temas y videos
	var cargadoMobile=false; //solo se setea al cargarse el documento. Determina la versión de reproducción de videos a usar
	var primeraCargaMobile=false; //controla la precarga del primer video en versión móvil
	var versionMobile = false; //si está activo, se reproduce un solo video cada vez que se clickea el botón. En combinación con cargadoMobile muestra un overlay para forzar la recarga de la página de ser necesaria.
	var videoMobileActivo = 0; //Índice de IDsVideos. determina el próximo video a cargar al hacer clic en Ver otra respuesta
	var IDsVideos;
	var reproductorActivo;
	var cantidadReproductores;
	var ordenReproduccion = []; //Orden de reproducción. Se va a shufflear recién al iniciar la función de reproducción
	//las funciones también usan el array players[] definido antes
	var reproduciendo=false;
	
	//variables de intervalo para chequear tiempo
	var duracionActual;
	var ivcargado = false;
	var ivinter;		//intervalo propiamente dicho
	var ivfunc = function(){	//chequear tiempo del video}
		if(players[ordenReproduccion[reproductorActivo]].getCurrentTime()>2&&!ivcargado){
			ivcargado=true;
			duracionActual=players[ordenReproduccion[reproductorActivo]].getDuration();
		}
		if(players[ordenReproduccion[reproductorActivo]].getCurrentTime()>duracionActual-0.1){
			players[ordenReproduccion[reproductorActivo]].pauseVideo();
			clearInterval(ivinter);
			ivcargado=false;
			proximoVideo();
		}
	}
	
	/**/
	
	function cargarTema(indice){
		IDsVideos = shuffle(listaTemas[indice].listaIDs);
		
		//cargar videos
		for(var i=0;i<cantidadReproductores;i++){
			players[i].loadVideoById(IDsVideos[i]);
			if(!primeraCargaMobile){
				players[i].pauseVideo();
			}
			else{
				primeraCargaMobile=false;
			}
		}
		
		//Item de texto
		jQuery('#itemTexto .contenidoTexto .pregunta').empty();
		jQuery('#itemTexto .contenidoTexto .pregunta').append('<p>'+listaTemas[indice].pregunta+'</p>');
	}
	
	/**/
	
	function iniciarReproduccion(){
		detenerReproduccion(); //por si había otro video reproduciéndose
		ordenReproduccion = shuffle(ordenReproduccion);
		reproductorActivo=-1; //iniciar en 0
		proximoVideo();
		reproduciendo=true;
	}
	function detenerReproduccion(){
		if(reproduciendo){ //solo detener si se está reproduciendo
			for(var i=0;i<cantidadReproductores;i++){
			players[i].seekTo(0);
			players[i].pauseVideo();			
			}
			jQuery('.H_poster').css({'opacity':'1'});
			reproduciendo=false;
		}
		clearInterval(ivinter);
	}
	function proximoVideo(){
		
		//desde el segundo reproductor, visibilizar poster previo
		if(reproductorActivo>=0){
			var posterPrevio = jQuery(players[ordenReproduccion[reproductorActivo]].a).siblings('.H_poster');
			//posterPrevio.css({'opacity':'1'});
		}
		
		if(cargadoMobile){
			players[0].loadVideoById(IDsVideos[videoMobileActivo]);
			videoMobileActivo++;
			if(videoMobileActivo>=IDsVideos.length){
				videoMobileActivo=0;
			}
		}

		if(reproductorActivo<cantidadReproductores-1){
			//reproducir siguiente video
			reproductorActivo++;
			var iframe = players[ordenReproduccion[reproductorActivo]];
			ivcargado=false; //resetear flag antes de iniciar un nuevo intervalo
			ivinter = setInterval(ivfunc,20);
			iframe.playVideo();
			var poster = jQuery(iframe.a).siblings('.H_poster');
			poster.animate({'opacity':'0'},300);
		}
	}
	
//----- Shuffle

	function shuffle(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
		}

		return array;
	}
	

	
