//VARIABLES SMTP2GO
var api_key = "api-F3448E029A5311E899A0F23C91C88F4E";

function Validar_Transmision_Tour(exepcion) {

	reporte_tour = localStorage.getItem("reporte_tour");
	//VALIDAMOS SI EXISTE ALGUN REPORTE
	if (reporte_tour == "" || reporte_tour == null) {
		$("#PopUp").show();
		$("#parrafo_info").html(alertasText["alert_sin_ronda"] + "<br>");
		$("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');
	}

	else {
		//PERMISO
		permiso_transmision = false;
		if (validar_intervalo() == true) {
			intervalo_transmision = 0; //AQUI SE PERMITE TRANSMITIR
		}

		else {
			intervalo_transmision = 2; //AQUI NO SE PERMITE TRANSMITIR
		}

		if (exepcion == 1) { intervalo_transmision = 0; }

		if (intervalo_transmision > 0) {
			permiso_transmision = false;
			$("#PopUp").show();
			$("#parrafo_info").html('<img src="img/icono_advertencia_amarillo.png" width="30"/><br>');
			$("#parrafo_info").append(alertasText["alert_interval_incumplido"] + "<br>");
			$("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()" style="width: 80%; margin-bottom: 5px;"><br><input type="button" data-role="none" value="' +
				idiomaSeleccionado['bt_trasnmit_tours'] + '" class="bt_verde" onclick="Ocultar_PopUp();Transmitir_Tour()" style="width: 80%; margin-bottom: 5px;">'); //SE CAMBÍO "ver_validar_pass(5)" POR "Transmitir_Tour" 
		}
		else {
			permiso_transmision = true;
		}

		//LUEGO DE VALIDAR TRANSMITICOS
		if (permiso_transmision == true) {
			Transmitir_Tour();
		}
	}
}

//FUNCION PARA TRANSMITIR UN TOUR
function Transmitir_Tour() {

	//CARGAMOS LAS VARIABLES DEL SETUP
	set_mail_1 = localStorage.getItem("set_mail_1");
	set_mail_2 = localStorage.getItem("set_mail_2");
	reporte_tour = localStorage.getItem("reporte_tour");
	nombre_guarda_sesion = localStorage.getItem("nombre_guarda_sesion");
	correo_sender = localStorage.getItem("correo_sender");

	//fotos guardadas
	foto1 = localStorage.getItem("foto1");
	foto2 = localStorage.getItem("foto2");
	foto3 = localStorage.getItem("foto3");
	foto4 = localStorage.getItem("foto4");
	foto5 = localStorage.getItem("foto5");

	var adjuntos = [];

	if (foto1 != "" && foto1 != null) {
		adjuntos.push({ 'filename': 'foto1.png', 'fileblob': foto1, 'mimetype': 'image/png' });
	}

	if (foto2 != "" && foto2 != null) {
		adjuntos.push({ 'filename': 'foto2.png', 'fileblob': foto2, 'mimetype': 'image/png' });
	}

	if (foto3 != "" && foto3 != null) {
		adjuntos.push({ 'filename': 'foto3.png', 'fileblob': foto3, 'mimetype': 'image/png' });
	}

	if (foto4 != "" && foto4 != null) {
		adjuntos.push({ 'filename': 'foto4.png', 'fileblob': foto4, 'mimetype': 'image/png' });
	}

	if (foto5 != "" && foto5 != null) {
		adjuntos.push({ 'filename': 'foto5.png', 'fileblob': foto5, 'mimetype': 'image/png' });
	}

	//VALIDAMOS SI EXISTE ALGUN REPORTE
	if (reporte_tour == "" || reporte_tour == null) {
		$("#PopUp").show();
		$("#parrafo_info").html(alertasText["alert_sin_ronda"] + "<br>");
		$("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');
	}

	else {
		$("#Preloader").show();

		reporte_csv = Compilar_reporte();
		//------FINALIZAMOS LA CREACION DEL REPORTE CVS
		//------FINALIZAMOS LA CREACION DEL REPORTE CVS

		//CODIFICAMOS EL REPORTE A CSV
		encodedString = btoa(reporte_csv);

		//INICIAMOS EL ENVÍO DEL REPORTE A TRAVÉS DE LA API DE SMTP2GO
		//fecha
		var dt = new Date();
		fecha = dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate();
		hora = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();


		hora_name = dt.getHours() + "-" + dt.getMinutes() + "-" + dt.getSeconds();

		cuerpo = "<table cellspacing=\"0\" cellpadding=\"10\" width=\"600\"><tr><td  align=\"center\"><b>" + alertasText["mail_titulo_reporte"] + " - CENTOR ARES</b><br /><br />" + alertasText["mail_enviado"] + ": <b>" + nombre_guarda_sesion +
			"</b><br />" + alertasText["mail_fecha"] + ": <b>" + fecha + "</b><br>" + alertasText["mail_ubicacion"] + ": " + latitud + "," + longitud + "</td></tr><tr><td style=\"background-color: #00174b; color:#ffffff\" align=\"center\">Centor Ares - 2018</td></tr></table>";

		adjuntos.push({ 'filename': localStorage.getItem("nombre_guarda_sesion") + fecha + "_" + hora_name + ".csv", 'fileblob': encodedString, 'mimetype': 'text/plain' });
		window.plugins.gdrive.uploadFile(localStorage.getItem("nombre_guarda_sesion") + fecha + "_" + hora_name + ".csv", reporte_csv,
			function (res) {
				console.log(res);
				alert(res);
			},
			function (err) {
				console.log(err);
			}
		);
		// Built by LucyBot. www.lucybot.com
		var url = "https://api.smtp2go.com/v3/email/send";
		$.ajax({
			url: url,
			method: 'POST',
			headers: {
				'Content-Type': "application/json"
			},
			data: JSON.stringify({
				'api_key': api_key,
				'sender': correo_sender, //
				'to': [
					set_mail_1,
					set_mail_2
				],
				'subject': alertasText["mail_titulo_reporte"] + " - Centor Ares",
				'html_body': cuerpo,
				'text_body': "reporte",
				'attachments': adjuntos
			}),
		}).done(function (result) {
			$("#Preloader").hide(); //OCULTAMOS EL PRELOADER
			$("#PopUp").show();
			$("#parrafo_info").html('<img src="img/icono_check.png" width="30"/><br>');
			$("#parrafo_info").append(alertasText["alert_transmision_exito"] + "<br>");
			$("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');

			console.log(result.data["succeeded"]);

			localStorage.setItem("reporte_tour", "");  //VACIAMOS LA BASE DE REPORTE LOCAL
			Solo_Setear_Fecha_Cierre();  //SETEAMOS LA FECHA DE CIERRE
			Ir_Home();
			Cantidad_Reportes_Hoy();
			//Validar_Timer_Activo(); //PARA REACTIVAR EL TIMER /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			//Cancelar_Quietud (); // CON ESTA LINEA CANCELAMOS EL TIMER DE QUIETUD
			DetenerPedometro();

			localStorage.setItem("foto1", "");
			localStorage.setItem("foto2", "");
			localStorage.setItem("foto3", "");
			localStorage.setItem("foto4", "");
			localStorage.setItem("foto5", "");

			$("#imagenPrevio1").hide();
			$("#imagenPrevio2").hide();
			$("#imagenPrevio3").hide();
			$("#imagenPrevio4").hide();
			$("#imagenPrevio5").hide();



			//PARA ACTIVAR LA LICENCIA
			activar_licencia = localStorage.getItem("activar_licencia");
			if (activar_licencia == "por_activar") {
				Transmitir_Activar_Licencia();
			}
			//PARA ACTIVAR LA LICENCIA

		}).fail(function (err) {
			$("#Preloader").hide(); //OCULTAMOS EL PRELOADER
			$("#PopUp").show();
			$("#parrafo_info").html('<img src="img/icono_check.png" width="30"/><br>');
			$("#parrafo_info").append(alertasText["alert_sin_internet"] + "<br>");
			$("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');
			//throw err;
		});
	}
}

//FUNCION PARA TRANSMITIR UN TOUR
function Transmitir_Foto() {

	//CARGAMOS LAS VARIABLES DEL SETUP
	set_mail_1 = localStorage.getItem("set_mail_1");
	set_mail_2 = localStorage.getItem("set_mail_2");
	foto1 = localStorage.getItem("foto1");
	nombre_guarda_sesion = localStorage.getItem("nombre_guarda_sesion");

	//VALIDAMOS SI EXISTE AL MENOS 1 FOTO
	if (foto1 == "" || foto1 == null) {
		$("#PopUp").show();
		$("#parrafo_info").html(alertasText["alert_sin_fotos"] + "<br>");
		$("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');
	}

	else {

		$("#Preloader").show();

		//fotos guardadas
		foto1 = localStorage.getItem("foto1");
		foto2 = localStorage.getItem("foto2");
		foto3 = localStorage.getItem("foto3");
		foto4 = localStorage.getItem("foto4");
		foto5 = localStorage.getItem("foto5");

		var adjuntos = [];


		if (foto1 != "" && foto1 != null) {
			adjuntos.push({ 'filename': 'foto1.png', 'fileblob': foto1, 'mimetype': 'image/png' });
		}

		if (foto2 != "" && foto2 != null) {
			adjuntos.push({ 'filename': 'foto2.png', 'fileblob': foto2, 'mimetype': 'image/png' });
		}

		if (foto3 != "" && foto3 != null) {
			adjuntos.push({ 'filename': 'foto3.png', 'fileblob': foto3, 'mimetype': 'image/png' });
		}

		if (foto4 != "" && foto4 != null) {
			adjuntos.push({ 'filename': 'foto4.png', 'fileblob': foto4, 'mimetype': 'image/png' });
		}

		if (foto5 != "" && foto5 != null) {
			adjuntos.push({ 'filename': 'foto5.png', 'fileblob': foto5, 'mimetype': 'image/png' });
		}

		//INICIAMOS EL ENVÍO DEL REPORTE A TRAVÉS DE LA API DE SMTP2GO
		//fecha
		var dt = new Date();
		fecha = dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate();

		cuerpo = "<table cellspacing=\"0\" cellpadding=\"10\" width=\"600\"><tr><td  align=\"center\"><b>FOTOS - CENTOR ARES</b><br /><br />Enviado por: <b>" + nombre_guarda_sesion +
			"</b><br />Fecha: <b>" + fecha + "</b><br>Ubicacion: " + latitud + "," + longitud + "</td></tr><tr><td style=\"background-color: #00174b; color:#ffffff\" align=\"center\">Centor Ares - 2018</td></tr></table>";

		correo_sender = localStorage.getItem("correo_sender");

		//CODIGO PARA EL ENVÍO
		var url = "https://api.smtp2go.com/v3/email/send";
		$.ajax({
			url: url,
			method: 'POST',
			headers: {
				'Content-Type': "application/json"
			},
			data: JSON.stringify({
				'api_key': api_key,
				'sender': correo_sender,
				'to': [
					set_mail_1,
					set_mail_2
				],
				'subject': "Fotos - Centor Ares",
				'html_body': cuerpo,
				'text_body': "fotos",
				'attachments': adjuntos
			}),
		}).done(function (result) {
			$("#Preloader").hide(); //OCULTAMOS EL PRELOADER
			$("#PopUp").show();
			$("#parrafo_info").html('<img src="img/icono_check.png" width="30"/><br>');
			$("#parrafo_info").append(alertasText["alert_transmision_fotos"] + "<br>");
			$("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');
			localStorage.setItem("reporte_tour", "");
			Ir_Home();

			//VACIAMOS LAS FOTOS DEL TEMPORAL
			localStorage.setItem("foto1", "");
			localStorage.setItem("foto2", "");
			localStorage.setItem("foto3", "");
			localStorage.setItem("foto4", "");
			localStorage.setItem("foto5", "");

			$("#imagenPrevio1").hide();
			$("#imagenPrevio2").hide();
			$("#imagenPrevio3").hide();
			$("#imagenPrevio4").hide();
			$("#imagenPrevio5").hide();

		}).fail(function (err) {
			$("#Preloader").hide(); //OCULTAMOS EL PRELOADER
			$("#PopUp").show();
			$("#parrafo_info").html('<img src="img/icono_check.png" width="30"/><br>');
			$("#parrafo_info").append(alertasText["alert_sin_internet"] + "<br>");
			$("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');
			//throw err;
		});
	}
}

//FUNCION PARA TRANSMITIR UN TOUR
function Transmitir_Alerta() {

	//CARGAMOS LAS VARIABLES DEL SETUP
	set_mail_1 = localStorage.getItem("set_mail_1");
	set_mail_2 = localStorage.getItem("set_mail_2");
	//set_mail_3 = localStorage.getItem( "set_mail_3" );
	nombre_guarda_sesion = localStorage.getItem("nombre_guarda_sesion");

	//INICIAMOS EL ENVÍO DEL REPORTE A TRAVÉS DE LA API DE SMTP2GO
	//fecha
	var dt = new Date();
	fecha = dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate();

	cuerpo = "<table cellspacing=\"0\" cellpadding=\"10\" width=\"600\"><tr><td  align=\"center\"><b>ALERTA - CENTOR ARES</b><br /><br />Registrado por: <b>" + nombre_guarda_sesion + "</b><br />Fecha: <b>" +
		fecha + "</b><br>Ubicacion: " + latitud + "," + longitud + "</td></tr><tr><td style=\"background-color: #00174b; color:#ffffff\" align=\"center\">Centor Ares - 2018</td></tr></table>";

	correo_sender = localStorage.getItem("correo_sender");

	//CODIGO PARA EL ENVÍO
	var url = "https://api.smtp2go.com/v3/email/send";
	$.ajax({
		url: url,
		method: 'POST',
		headers: {
			'Content-Type': "application/json"
		},
		data: JSON.stringify({
			'api_key': api_key,
			'sender': correo_sender,
			'to': [
				set_mail_1,
				set_mail_2
			],
			'subject': "Alerta - Centor Ares",
			'html_body': cuerpo,
			'text_body': "alerta"
		}),
	}).done(function (result) {
		console.log(result);
	}).fail(function (err) {
	});
}


function Exportar_Sitio() {
	if (activar_eliminar == false) {

		$("#parrafo_info").html('<img src="img/icono_check.png" width="30"/><br>');
		$("#parrafo_info").append(alertasText["alert_exportar_sitio"] + "<br>");
		$("#parrafo_info").append('<input type="button" data-role="none" value="' + idiomaSeleccionado["bt_ok"] + '" class="bt_verde" onclick="activar_eliminar = true; Exportar_Sitio()" style="width: 90%;">');
		$("#parrafo_info").append('<input type="button" data-role="none" value="' + idiomaSeleccionado["bt_cancelar"] + '" class="bt_rojo" onclick="Ocultar_PopUp()" style="width: 90%;">');

		$("#PopUp").show();
	}
	else {
		sitio = $("#variable_seleccion").val();
		Ocultar_Editar();
		Ir_Sitios();
		activar_eliminar = false;
		Ocultar_PopUp();
		//Transmitir_Base(sitio);
		Transmitir_Base_Local(sitio)
	}
}


function Exportar_Todos_Los_Sitios() {
	console.log("si entro aca fffff")
	//Transmitir_Base(sitio);
	lista_sitios = localStorage.getItem("lista_sitios");
	$("#Preloader").show(); //OCULTAMOS EL PRELOADER
	base_csv = "";
	set_mail_1 = localStorage.getItem("set_mail_1");
	set_mail_2 = localStorage.getItem("set_mail_2");
	//set_mail_3 = localStorage.getItem( "set_mail_3" );
	lista_tours = localStorage.getItem("lista_tours");
	lista_puntos = localStorage.getItem("lista_puntos");
	nombre_guarda_sesion = localStorage.getItem("nombre_guarda_sesion");

	//TOMAS SOLO LOS TOUR CON EL NOMBRE DEL SITIO
	//TOMAS SOLO LOS TOUR CON EL NOMBRE DEL SITIO
	sites = lista_sitios.split(",");

	for (t = 0; t < sites.length; t++) {
		lista_tours = localStorage.getItem("lista_tours");
		lista_puntos = localStorage.getItem("lista_puntos");
		console.log("la lsita de puntos es");
		console.log(lista_tours);
		sitio = sites[t];
		nuevo_lista_tour = "";
		if (lista_tours == "" || lista_tours == null) {
			lista_tours = "";
		}
		else {
			filas = lista_tours.split(";");
			nueva_fila = "";

			for (i = 0; i < filas.length; i++) {
				nodo = filas[i].split(","); //extraemos el codigo del marcador
				console.log("el nodo actual es" + nodo[0]);
				if (nodo[0] == sitio) {
					if (nueva_fila == "" && nuevo_lista_tour == "") {// SI ESTAMOS EN EL FINAL
						nueva_fila = nodo[0] + "," + nodo[1] + "," + nodo[2];
						console.log("No tiene nada la fila:" + nueva_fila);
						nuevo_lista_tour = nueva_fila;
					}
					else {
						nueva_fila = "|" + nodo[0] + "," + nodo[1] + "," + nodo[2];
						console.log("Si tiene nada la fila:" + nueva_fila);
						nuevo_lista_tour += nueva_fila;
					}
				}

				console.log("el fila actual es" + nuevo_lista_tour);
			}
			lista_tours = nuevo_lista_tour;
		}

		//TOMAS SOLO LOS PUNTOS CON EL NOMBRE DEL SITIO
		//TOMAS SOLO LOS TOUR CON EL NOMBRE DEL SITIO
		nuevo_lista_puntos = "";

		if (lista_puntos == "" || lista_puntos == null) {
			lista_puntos = "";
		}
		else {
			filasP = lista_puntos.split(";");
			nueva_fila_puntos = "";

			for (i = 0; i < filasP.length; i++) {
				nodo = filasP[i].split(","); //extraemos el codigo del marcador

				if (nodo[2] == sitio) {
					if (nueva_fila_puntos == "") { //VALIDAMOS SI ESTA VACIO
						nueva_fila_puntos = nodo[0] + "," + nodo[1] + "," + nodo[2] + "," + nodo[3] + "," + nodo[4] + "," + nodo[5];
						nuevo_lista_puntos += nueva_fila_puntos;
						console.log("el filaXX actual es" + nuevo_lista_puntos);
					}
					else {
						nueva_fila_puntos = "|" + nodo[0] + "," + nodo[1] + "," + nodo[2] + "," + nodo[3] + "," + nodo[4] + "," + nodo[5];
						nuevo_lista_puntos += nueva_fila_puntos;
						console.log("el filaXX actual es" + nuevo_lista_puntos);
					}
				}

			}
			lista_puntos = nuevo_lista_puntos;
		}

		//ARMAMOS EL CONTENIDO DEL ARCHIVO CSV
		if (t == 0) {
			base_csv += sitio + ";" + lista_tours + ";" + lista_puntos + "\n";
		} else {
			base_csv += "&" + sitio + ";" + lista_tours + ";" + lista_puntos + "\n";
		}

		console.log(base_csv);

		encodedString = btoa(base_csv);
	}
	console.log("ENVIO ES: " + base_csv)
	//INICIAMOS EL ENVÍO DEL REPORTE A TRAVÉS DE LA API DE SMTP2GO
	//fecha
	var dt = new Date();
	fecha = dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate();

	cuerpo = "<table cellspacing=\"0\" cellpadding=\"10\" width=\"600\"><tr><td  align=\"center\"><b>" + alertasText["mail_titulo_base"] + " - CENTOR ARES</b><br /><br />" + alertasText["mail_enviado"] + ": <b>" + nombre_guarda_sesion +
		"</b><br />" + alertasText["mail_fecha"] + ": <b>" + fecha + "<br>" + alertasText["mail_ubicacion"] + ": " + latitud + "," + longitud + "</b></td></tr><tr><td style=\"background-color: #00174b; color:#ffffff\" align=\"center\">Centor Ares - 2018</td></tr></table>";

	correo_sender = localStorage.getItem("correo_sender");

	window.plugins.gdrive.deleteFile("Base_Datos.csv", base_csv,
		function (res) {
			console.log(res);
			alert(res);
		},
		function (err) {
			console.log(err);
		}
	);

	//CODIGO PARA EL ENVÍO
	var url = "https://api.smtp2go.com/v3/email/send";
	$.ajax({
		url: url,
		method: 'POST',
		headers: {
			'Content-Type': "application/json"
		},
		data: JSON.stringify({
			'api_key': api_key,
			'sender': correo_sender,
			'to': [
				set_mail_1,
				set_mail_2
			],
			'subject': alertasText["mail_titulo_base"] + " - Centor Ares",
			'html_body': cuerpo,
			'text_body': "Base datos",
			'attachments': [{
				'filename': sitio + fecha + ".csv",
				'fileblob': encodedString,
				'mimetype': "text/plain"
			}]
		}),
	}).done(function (result) {
		$("#Preloader").hide(); //OCULTAMOS EL PRELOADER		
		console.log(result);

		//PARA ACTIVAR LA LICENCIA
		activar_licencia = localStorage.getItem("activar_licencia");
		if (activar_licencia == "por_activar") {
			Transmitir_Activar_Licencia();
		}
		//PARA ACTIVAR LA LICENCIA

	}).fail(function (err) {
	});

}

//FUNCION PARA TRANSMITIR UN TOUR
function Transmitir_Activar_Licencia() {
	correo_sender = localStorage.getItem("correo_sender");
	//activar_licencia = localStorage.getItem("activar_licencia");	
	licencia_full = localStorage.getItem("licencia_full");

	//CODIGO PARA EL ENVÍO
	var url = "https://api.smtp2go.com/v3/email/send";
	$.ajax({
		url: url,
		method: 'POST',
		headers: {
			'Content-Type': "application/json"
		},
		data: JSON.stringify({
			'api_key': api_key,
			'sender': correo_sender,
			'to': [
				'info@centorguardclocks.com',
				'support@centorguardclocks.com'
			],
			'subject': "Activacion licencia " + licencia_full,
			'html_body': 'se ha activado una licencia para el dispositivo: ' + licencia_full,
			'text_body': "activacion"
		}),
	}).done(function (result) {
		console.log(result);
		localStorage.setItem("activar_licencia", "activada");
	}).fail(function (err) {
	});

}



//FUNCION PARA TRANSMITIR UN TOUR
function Transmitir_Base_Local(sitio) {

	$("#Preloader").show(); //OCULTAMOS EL PRELOADER

	set_mail_1 = localStorage.getItem("set_mail_1");
	set_mail_2 = localStorage.getItem("set_mail_2");
	//set_mail_3 = localStorage.getItem( "set_mail_3" );
	lista_tours = localStorage.getItem("lista_tours");
	lista_puntos = localStorage.getItem("lista_puntos");
	nombre_guarda_sesion = localStorage.getItem("nombre_guarda_sesion");

	//TOMAS SOLO LOS TOUR CON EL NOMBRE DEL SITIO
	//TOMAS SOLO LOS TOUR CON EL NOMBRE DEL SITIO
	nuevo_lista_tour = "";
	if (lista_tours == "" || lista_tours == null) {
		lista_tours = "";
	}
	else {
		filas = lista_tours.split(";");
		nueva_fila = "";

		for (i = 0; i < filas.length; i++) {
			nodo = filas[i].split(","); //extraemos el codigo del marcador

			if (nodo[0] == sitio) {
				if (nueva_fila == "") {// SI ESTAMOS EN EL FINAL
					nueva_fila = nodo[0] + "," + nodo[1] + "," + nodo[2];
				}
				else {
					nueva_fila = "|" + nodo[0] + "," + nodo[1] + "," + nodo[2];
				}
			}
			nuevo_lista_tour += nueva_fila;
		}
		lista_tours = nuevo_lista_tour;
	}

	//TOMAS SOLO LOS PUNTOS CON EL NOMBRE DEL SITIO
	//TOMAS SOLO LOS TOUR CON EL NOMBRE DEL SITIO
	nuevo_lista_puntos = "";

	if (lista_puntos == "" || lista_puntos == null) {
		lista_puntos = "";
	}
	else {
		filasP = lista_puntos.split(";");
		nueva_fila_puntos = "";

		for (i = 0; i < filasP.length; i++) {
			nodo = filasP[i].split(","); //extraemos el codigo del marcador

			if (nodo[2] == sitio) {
				if (nueva_fila_puntos == "") { //VALIDAMOS SI ESTA VACIO
					nueva_fila_puntos = nodo[0] + "," + nodo[1] + "," + nodo[2] + "," + nodo[3] + "," + nodo[4] + "," + nodo[5];
				}
				else {
					nueva_fila_puntos = "|" + nodo[0] + "," + nodo[1] + "," + nodo[2] + "," + nodo[3] + "," + nodo[4] + "," + nodo[5];
				}
			}
			nuevo_lista_puntos += nueva_fila_puntos;
		}
		lista_puntos = nuevo_lista_puntos;
	}

	//ARMAMOS EL CONTENIDO DEL ARCHIVO CSV
	base_csv = sitio + ";" + lista_tours + ";" + lista_puntos;
	console.log(base_csv);

	encodedString = btoa(base_csv);


	//INICIAMOS EL ENVÍO DEL REPORTE A TRAVÉS DE LA API DE SMTP2GO
	//fecha
	var dt = new Date();
	fecha = dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate();

	cuerpo = "<table cellspacing=\"0\" cellpadding=\"10\" width=\"600\"><tr><td  align=\"center\"><b>" + alertasText["mail_titulo_base"] + " - CENTOR ARES</b><br /><br />" + alertasText["mail_enviado"] + ": <b>" + nombre_guarda_sesion +
		"</b><br />" + alertasText["mail_fecha"] + ": <b>" + fecha + "<br>" + alertasText["mail_ubicacion"] + ": " + latitud + "," + longitud + "</b></td></tr><tr><td style=\"background-color: #00174b; color:#ffffff\" align=\"center\">Centor Ares - 2018</td></tr></table>";

	correo_sender = localStorage.getItem("correo_sender");

	window.plugins.gdrive.uploadFile(sitio + fecha + ".csv", base_csv,
		function (res) {
			console.log(res);
			alert(res);
		},
		function (err) {
			console.log(err);
		}
	);

	//CODIGO PARA EL ENVÍO
	var url = "https://api.smtp2go.com/v3/email/send";
	$.ajax({
		url: url,
		method: 'POST',
		headers: {
			'Content-Type': "application/json"
		},
		data: JSON.stringify({
			'api_key': api_key,
			'sender': correo_sender,
			'to': [
				set_mail_1,
				set_mail_2
			],
			'subject': alertasText["mail_titulo_base"] + " - Centor Ares",
			'html_body': cuerpo,
			'text_body': "Base datos",
			'attachments': [{
				'filename': sitio + fecha + ".csv",
				'fileblob': encodedString,
				'mimetype': "text/plain"
			}]
		}),
	}).done(function (result) {
		$("#Preloader").hide(); //OCULTAMOS EL PRELOADER		
		console.log(result);

		//PARA ACTIVAR LA LICENCIA
		activar_licencia = localStorage.getItem("activar_licencia");
		if (activar_licencia == "por_activar") {
			Transmitir_Activar_Licencia();
		}
		//PARA ACTIVAR LA LICENCIA

	}).fail(function (err) {
	});
}

//FUNCION PARA TRANSMITIR UN TOUR
function Transmitir_Activar_Licencia() {
	correo_sender = localStorage.getItem("correo_sender");
	//activar_licencia = localStorage.getItem("activar_licencia");	
	licencia_full = localStorage.getItem("licencia_full");

	//CODIGO PARA EL ENVÍO
	var url = "https://api.smtp2go.com/v3/email/send";
	$.ajax({
		url: url,
		method: 'POST',
		headers: {
			'Content-Type': "application/json"
		},
		data: JSON.stringify({
			'api_key': api_key,
			'sender': correo_sender,
			'to': [
				'info@centorguardclocks.com',
				'support@centorguardclocks.com'
			],
			'subject': "Activacion licencia " + licencia_full,
			'html_body': 'se ha activado una licencia para el dispositivo: ' + licencia_full,
			'text_body': "activacion"
		}),
	}).done(function (result) {
		console.log(result);
		localStorage.setItem("activar_licencia", "activada");
	}).fail(function (err) {
	});
}


