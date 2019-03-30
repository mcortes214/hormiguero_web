// DATA

//console.log('data: v2');

	var listaTemas = [
		{
			nombre: 'Trabajo digital',
			pregunta: '¿Cuánto de tu trabajo es digital? ¿Usás redes sociales en tu trabajo?',
			listaIDs: ['4hPwoy-BZeE','SUsjOhrxuY8','JNP9vA1pN4s','xhF_6IG5COk','AxeZLVipnYg','prZMxa2dYIk','wc9Q7NXbrcE','bNZw4l71YBg']
		},
		{
			nombre: 'Riqueza',
			pregunta: '¿Qué significa para vos la riqueza?',
			listaIDs: ['hnGpHgWqNjI','fJyBCjUajyA','xTaki4TEz3w','dsm470TqqTA','ULLvbXCuFoM','T3Wyq4JoByU','gjEMgFRT45g','RCtvQrGMC5w','PsN1hBdvwI0','SggDR6FED0s','0cIryXGfIok','-ceHS-CaOGQ','w7HMVWDv_8o','geg7Iw3fqRQ']
		},
		{
			nombre: 'Identificación con el trabajo',
			pregunta: '¿Qué te identifica de tu trabajo?',
			listaIDs: ['uA5l-nvRTcQ','qs1QyQzHm8A','W-gcUB8XGZg','31uLzuIcvQY','O7fce5Wlxh8','O2qN6MDzI_g','K-xDxEA9YHg','YCN4bDHXCU4']
		},
		{
			nombre: 'Artista-trabajador',
			pregunta: '¿Creés que el artista es un trabajador? ¿Creés que el arte es un trabajo?',
			listaIDs: ['oASCwwGV1Z0','DNFuCMCpfAU','KeQmRQ-r91w','uj_ZRnDs-Ek','xOi3ZGQTkX0','vrwgX3t9NaI','t2cBgm64tzw','xZtSX1ZYZ8E','u6R2t2EEsHE','X9EgR7taHAE','ZSI5IByGzTk','tejHIFY1OpM','W7f4leI2aUk','5hVCgwILlCA','qEwYMGWeG0o']
		},
		{
			nombre: 'Creación y copia',
			pregunta: '¿Cuál es para vos la diferencia entre creación y copia?',
			listaIDs: ['KHYztaBN7Cs','87brdqji3d0','_bwEEaZZMSk','Xo1q1kl-h8E','ztW4y3tkjFI','CGDQTXenNRA','vRiooBVjmTM','nXP4mYufMqs','otOnxx036Mg','Loj1Cic2Lag','1qrHR3P3l_M','20lb3IAMbXI']
		},
		{
			nombre: 'Trabajo humano vs. tecnología',
			pregunta: '¿En qué creés que la tecnología no puede reemplazar el trabajo humano?',
			listaIDs: ['6nsJVc1mXdM','TLBleWrhcZ8','S10ckO2cr7g','Ar5o0ZRX6Qw','lmHpyQW15kU','2MzvOYgR_aY','y-krox28vhs','QKOohFNIYMw','kPsPkBV81Kg','AYq5KpTyFpg','mY-u5PcOEEk','BezjHmHpRHs','uDCYAPjtHws','nyyq3rNhJZo','m7uAtWN1um8','dYap5fMsryI','YKs5YCx9gak','VtgYCNWZUjk','w81w-9w1xnw','5_UCsH-q3Co','wFlBAsy-oUA','LCCCsoY_8aU']
		},
		{
			nombre: 'Máquinas y tiempo libre',
			pregunta: '¿Creés que las máquinas nos dejan más tiempo libre?',
			listaIDs: ['FweePWQotS8','bq0BvTb2KGs','jQ7JRQM7RAM','vupEMT3l2IE','7CGKD1ooKPA','OiEEy0-RGQk','NlKOi1U4Ez0','NAA5FTxfpDU','3IqWlJ4dVTQ','9jBQzPF7g9Y']
		},
		{
			nombre: 'Trabajo y medioambiente',
			pregunta: '¿Cómo se relaciona tu trabajo con el medioambiente?',
			listaIDs: ['4HOFGNLaM5o','9yZt42gisek','TXsX9VCGtUg','W4c07UBQF6g','dyPYeVEbIws','hrxMsTNOXmA','_ar4Vnp2w6Y']
		},
		{
			nombre: 'Definición de trabajo',
			pregunta: '¿Qué es el trabajo?',
			listaIDs: ['_-s7-aZaePI','GS-6UZ7icWE','jBTZuN1WdoE','KKx9YSnWmFw','Ubd2Absbruc','CYZEBzF0ofM','iRPrsptt5_Y','NUpBOrdiLOI','k8wvR_yU4xs','YDX0AT5fc1c','OiDitr-JbyM','N6PFFhDmAFA','VBn_qzkGdtg','_Sn51m8p0Ko','1p90NXv_sJA','GBp7yXuzFUo','ReUg_JgWo1Q','EJDr6tHpIew','sirk1aFvJ3o','1xtrnk5k8QE','LrHiFtwQq4Q']
		},
		{
			nombre: 'Medios de comunicación',
			pregunta: '<span class="chico">¿Crees en los medios de comunicación? ¿Qué lugar ocupan en la actualidad? ¿Qué lugar ocupa una red social en la actualidad, en comparación con medios más tradicionales como la televisión?</span>',
		//pasividad (2) + credibilidad (5) + redes (3)
			listaIDs: ['OM4RLXmYENY','HG_Nkz2BkqU','Ie_KUnd22Qc','ua82Tm01LD8','SfTsfELG3vA','n_ZxHvX35O0','rBBEp6bOliQ', 'XpkGWtXRmfI', 'FzV7lailFf4', '16vCdItHm4g']
		},
		{
			nombre: 'Presentación',
			pregunta: '¿Cómo te llamás? ¿De qué trabajás?',
			listaIDs: ['az9Tc2zjfH0','UTd3aprBzh0','9OkL1yzeRwg','oYsiUSCJOOA','maqd5CZt_UA','DGrGE64KIX0','EkNZQklcJE0','LGtWHUG3WNg','WLqnd5EKhGc','HX4vc0Sb5AY','WRc1Rd05wHs','BzDWeF3ykpc','Mijz4ZXGsxA','jy3XCu9k3iQ','8olw-rUpnoo','LQ8001C6MoE','yiwWQj5tDoc','cuV4XZC_28A','Th97hZvHFZI','tTTypg_0dow','Axb5Z6tAH6Q','FJJkjUeXJl4','7UNHuoToghc','4kRxXVpL6Zc','wlvqWCpwGPs','PkG2SZXtsHc','BDCpOkLfxGQ','Ro1sy9aE0_E','9RJ82A7o3tE','fkAefGT_zq4','IQwAh3-DfZc','SqiDvLH0aj8','b1aooepQSyQ','t0lJFglQr1s','X2xuZ-JQpWw','v5IZnuelk3U','ZaJ8CHffrsQ','Ua10YND9PuM','C_BVGrC-yoo','6n_OLwIVc3o','aJ1pSZBrFtM','E3KtdVXRNbk','Gh2v2qKledk']
		},
		{
			nombre: 'Textos en internet',
			pregunta: '¿Cómo afecta a tu trabajo la gran cantidad de textos disponibles en internet?',
			listaIDs: ['Z9eUcjSkqko','KyLqZlUmNXM','U6m79ag0mrI','yatcJ4UGVco','GJocDYYUgic','GpGZ11WHtdo','DIPNkvqzsg0','-WfTuKOGpu4']
		},
		{
			nombre: 'Software libre',
			pregunta: '¿cómo crees que el software libre afecta al trabajo? ¿y el privativo?',
			listaIDs: ['lYPQEzsLCOA','gjerOaEBVTE','37B4LTa9E3g','-yIisWUngMM','kIW5swqF-O0','pbI3fQP__tk','IwVKcOnH1tc']
		},
		{
			nombre: 'Lecturas',
			pregunta: '<span class="chico"><em>(Fragmentos de libros leídos en los eventos de lectura colectiva, llevados a cabo a lo largo del año)</em></span>',
			listaIDs: ['VhPaSZuudsI','arzZ-WdzZAE','y0dUUI1h3vQ','HMcKFtFRETg','Gtx8t3nX4IA','M7OQKs_wZBM','E075Vyk8DLs']
		},
	];
