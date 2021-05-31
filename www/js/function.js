if (localStorage.getItem("activar_phone") == null) { localStorage.setItem("activar_phone", ""); }


//1. PRIMERA VALIDACION
function Validaciones() {
	//1. VALIDAMOS SI NUNCA A COPIADO EL CODIGO
	uuid = localStorage.getItem("uuid");
	if (uuid == "" || uuid == null) {
		window.location = "#UUID";
	}
	else {
		//2. VALIDAMOS EL IDIOMA
		leng = localStorage.getItem("lenguaje");
		if (leng == "" || leng == null) {
			window.location = "#LENGUAJE";
		}
		else {
			//3. VALIDAMOS SI EXISTE UNA LICENCIA QR
			licencia = localStorage.getItem("licencia");
			if (licencia == "" || licencia == null) {
				Ir_Licencia();
				Activar_Escanner(2);
			}
			//DE LO CONTRARIO
			else {
				//4. VALIDAMOS SI ESTÁ CONFIGURADO EL SUPERVISOR
				set_key_supervisor = localStorage.getItem("set_key_supervisor");
				if (set_key_supervisor == "" || set_key_supervisor == null) {
					window.location = "#SETUP";
					Contador_Mostrar_Envios()
					window.plugins.gdrive.estadoSesion(
						function (success) {
							console.log("Si esta iniciado: " + success)
							$("#buttonCerrarSesion").show()
							$("#buttonIniciarSesion").hide()
							calStorage.setItem("sesionActiva", "si");
						},
						function (error) {
							console.log("No esta iniciado: " + error)
							$("#buttonCerrarSesion").hide()
							$("#buttonIniciarSesion").show()
							calStorage.setItem("sesionActiva", "no");
						});
					logIn();

				}
				else {
					//5. VALIDAMOS SI SE TIENE CONFIGURADO EL NOMBRE DEL GUARDA
					if (localStorage.getItem("nombre_guarda_sesion") == "" || localStorage.getItem("nombre_guarda_sesion") == null) {
						Ir_Sesion();
					}
					else {
						Ir_Home();
					}
				}
			}
		}
	}

	//PARA ACTIVAR LA LICENCIA
	activar_licencia = localStorage.getItem("activar_licencia");
	if (activar_licencia == "por_activar") {
		Transmitir_Activar_Licencia();
	}
}

//2. SELECCIONAR IDIOMA
function Seleccionar_Idioma() {
	leng = $("#seleccion_idioma").val();
	localStorage.setItem("lenguaje", leng);
	idioma(leng); //FUNCION PARA SETEAR TODAS LAS VARABLES DE IDIOMA
	Validaciones();
}

//GUARDAR CONFIGURACION SETUP
function Guardar_Configuracion() {
	set_key_supervisor = $("#set_key_supervisor").val();
	//set_mail_1 = $("#set_mail_1").val();
	//set_mail_2 = $("#set_mail_2").val();
	set_mail_1 = "centor@centor.com";
	set_mail_2 = "centor@centor.com";
	set_hora_transmicion = $("#set_hora_transmicion").val();
	set_minuto_transmicion = $("#set_minuto_transmicion").val();
	set_telefono_emergencia = $("#set_telefono_emergencia").val();
	set_sms_emergencia = $("#set_sms_emergencia").val();
	set_minutos_quietud = $("#set_minutos_quietud").val();

	set_activar_podometro = $("#set_activar_podometro").prop("checked");
	set_activar_acelerometro = $("#set_activar_acelerometro").prop("checked");
	set_activarCaidas = $("#set_activarCaidas").prop("checked");
	set_nivelCaidas = $("#set_nivelCaidas").val();
	set_minreportes = $("#set_minreportes").val();

	if (set_key_supervisor != "" && set_mail_1 != "" && set_mail_2 != "" && set_hora_transmicion != "" && set_telefono_emergencia != "" && set_sms_emergencia != "" && set_minutos_quietud != "") {
		localStorage.setItem("set_key_supervisor", set_key_supervisor);
		localStorage.setItem("set_mail_1", set_mail_1);
		localStorage.setItem("set_mail_2", set_mail_2);
		localStorage.setItem("set_hora_transmicion", set_hora_transmicion);
		localStorage.setItem("set_minuto_transmicion", set_minuto_transmicion);
		localStorage.setItem("set_telefono_emergencia", set_telefono_emergencia);
		localStorage.setItem("set_sms_emergencia", set_sms_emergencia);
		localStorage.setItem("set_minutos_quietud", set_minutos_quietud);
		localStorage.setItem("caidaNivel", set_nivelCaidas)
		localStorage.setItem("minutosEnvioReportes", set_minreportes)
		
		if (set_activar_podometro == true) { localStorage.setItem("activar_podemotro", 1); }
		if (set_activar_podometro == false) { localStorage.setItem("activar_podemotro", 2); }

		if (set_activar_acelerometro == true) { localStorage.setItem("activar_mandonw", 1); }
		if (set_activar_acelerometro == false) { localStorage.setItem("activar_mandonw", 2); }

		if (set_activarCaidas == true) { localStorage.setItem("activar_caidas", 1); }
		if (set_activarCaidas == false) { localStorage.setItem("activar_caidas", 2); }

		if (localStorage.getItem("nombre_guarda_sesion") == "" || localStorage.getItem("nombre_guarda_sesion") == null) {
			Ir_Sesion();
			//ValidarSensores();
			Activar_Timer_Quietud();
		}
		else {
			Ir_Home();
			ValidarSensores();
			Cancelar_Quietud();
			//Activar_Acelerometro();	
			if (localStorage.getItem("activar_caidas") == "1") {
				monitorearCaidas();
			}
			else {
				console.log("Eliminando el devise motio")
				window.removeEventListener("devicemotion")
			}
		}
	}

	else {
		$("#PopUp").show();
		$("#parrafo_info").html('<img src="img/icono_advertencia_amarillo.png" width="30"/><br>');
		$("#parrafo_info").append(alertasText["alert_obligatorios"] + "<br>");
		$("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');
	}

	var stateObj = { page: "#HOME" };
	window.history.replaceState(stateObj, "home", "#HOME");
}

//GUARDAR SESION
function Sesion_Guarda() {
	nombre_guarda_sesion = $("#nombre_guarda_sesion").val();
	if (nombre_guarda_sesion != "") {
		$("#name_guarda_menu").html(nombre_guarda_sesion);
		localStorage.setItem("nombre_guarda_sesion", nombre_guarda_sesion);
		Ir_Home();
	}
	else {
		$("#PopUp").show();
		$("#parrafo_info").html('<img src="img/icono_advertencia_amarillo.png" width="30"/><br>');
		$("#parrafo_info").append(alertasText["alert_ingresar_nombre"] + "<br>");
		$("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');
	}
}

//CERRAR SESION GUARDADA
function Cerrar_Sesion_Guarda() {
	$("#name_guarda_menu").html("");
	$("#nombre_guarda_sesion").val("");
	localStorage.setItem("nombre_guarda_sesion", "");
	window.location = "#SESION";
}

//OCULTAR POP UP VALIDAR KEY SUPERVIDOR
function Ocultar_PopUpValidarKey() {
	$("#key_supervisor").val("");
	$("#PopUpValidarKey").hide();
}

//OCULTAR POP UP VALIDAR PASSWORD DIA
function Ocultar_PopUpValidarPass() {
	$("#PopUpValidarPassDia").hide();
}

//OCULTAR POP UP CHECKPOINT
function Ocultar_PopUpCheckPointSet() {
	$("#PopUpCheckPointSet").hide();
}

//OCULTAR POP UP CHECKPOINT RECORD
function Ocultar_PopUpCheckPointRecord() {
	$("#PopUpCheckPointRecord").hide();
}

//OCULTAR POP UP LICENCIA
function Ocultar_PopUpLicencia() {
	$("#PopUpLicencia").hide();
}

//OCULTAR POP UP LICENCIA
function Ocultar_PopUp() {
	$("#PopUp").hide();
}

//OCULTAR POPUP ALERTA
function Ocultar_Popup_Acerca() {
	$("#PopUpAcerca").hide();
}


//MENU LATERAL
function VerMenuLateral() {
	$("#menu_lateral").fadeIn();
}
//OCULTAR MENU LATERAL
function OcultarMenuLateral() {
	$("#menu_lateral").fadeOut();
}
//POPUO CREAR TOUR
function Ocultar_PopUp_Crear_Tour() {
	$("#PopUpCrearTour").fadeOut();
}

function Ver_PopUp_Crear_Tour() {
	$("#PopUpCrearTour").fadeIn();
}

//POPUP VER EDITAR
function Ver_Editar(val, val2, tour) {
	$("#cont_popup_Editar_Sitio").hide();
	$("#cont_popup_Editar_Ronda").hide();
	$("#cont_popup_Editar_Punto").hide();

	if (val2 == 1) { $("#cont_popup_Editar_Sitio").show(); }
	if (val2 == 2) {
		$("#cont_popup_Editar_Ronda").show();
		$("#variable_tour").val(tour);
	}

	if (val2 == 3) {
		$("#cont_popup_Editar_Punto").show();
		$("#variable_tour").val(tour);
	}

	$("#variable_seleccion").val(val);
	$("#PopUpEditarSitio").fadeIn();
}

//POPUP OCULTAR EDITAR
function Ocultar_Editar() {
	$("#PopUpEditarSitio").fadeOut();
}

//GUARDAR MENSAJE
function Guardar_Mensaje() {
	text_incident_message = $("#text_incident_message").val();
	if (text_incident_message != "") {
		localStorage.setItem("mensaje_temporal", text_incident_message);
		$("#text_incident_message").val("");

		reporte_tour = localStorage.getItem("reporte_tour");

		if (reporte_tour == "" || reporte_tour == null) {
			reporte_tour = "";
		}
		else {
			filas = reporte_tour.split(";");
			nuevo_reporte = "";
			contador

			for (i = 0; i < filas.length; i++) {

				nodo = filas[i].split(",");
				nueva_fila = "";

				nueva_fila = filas[i];

				if (filas.length == (i + 1)) {
					nueva_fila = nodo[0] + "," + nodo[1] + "," + nodo[2] + "," + nodo[3] + "," + nodo[4] + "," + nodo[5] + "," + nodo[6] + ","
						+ nodo[7] + "," + nodo[8] + "," + text_incident_message + "," + nodo[11] + "," + nodo[11] + "," + nodo[12];

				}

				//ASIGNAMOS EL NUEVO REGISTRO
				if (nuevo_reporte == "") {
					nuevo_reporte = nueva_fila;
				}

				else {
					nuevo_reporte += ";" + nueva_fila;
				}
			}
			localStorage.setItem("reporte_tour", nuevo_reporte);
			localStorage.setItem("mensaje_temporal", '');
		}
	}
	else {
		$("#PopUp").show();
		$("#parrafo_info").html(alertasText["alert_sin_mensaje"] + "<br>");
		$("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');
	}
}


//COPIAR UDID EN EL PORTAPAPELES
function Copiar_Codigo() {

	id_uuid = $("#uuid_cont").val();

	cordova.plugins.clipboard.copy(id_uuid);
	cordova.plugins.clipboard.paste(function (id_uuid) {

		$("#PopUp").show();
		$("#parrafo_info").html(alertasText["alert_codigo_udid_copiado"] + " " + id_uuid + "<br>");
		$("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');
	});

	//cordova.plugins.clipboard.clear();
	Ir_Lenguaje();
	localStorage.setItem("uuid", id_uuid);
}

//OBTENER UBICACION LATITUD Y LONGITUD
var latitud = "";
var longitud = "";
function Obtener_mi_ubicacion() {

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function (objPosition) {

			longitud = objPosition.coords.longitude;
			latitud = objPosition.coords.latitude;

		}, function (objPositionError) {
			switch (objPositionError.code) {
				case objPositionError.PERMISSION_DENIED:
					$("#PopUp").show();
					$("#parrafo_info").html('<img src="img/icono_advertencia_amarillo.png" width="30"/><br>');
					$("#parrafo_info").append(alertasText["no_permitido_gps"] + "<br>");
					$("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');
					break;
				case objPositionError.POSITION_UNAVAILABLE:
					alert("No se ha podido acceder a la información de su posición.");
					break;
				case objPositionError.TIMEOUT:
					$("#PopUp").show();
					$("#parrafo_info").html('<img src="img/icono_advertencia_amarillo.png" width="30"/><br>');
					$("#parrafo_info").append(alertasText["no_soporta_gps"] + "<br>");
					$("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');

					break;
				default:
					alert("Error desconocido.");
			}
		}, {
			maximumAge: 75000,
			timeout: 10000
		});
	}

	else {
		$("#PopUp").show();
		$("#parrafo_info").html('<img src="img/icono_advertencia_amarillo.png" width="30"/><br>');
		$("#parrafo_info").append(alertasText["no_soporta_gps"] + "<br>");
		$("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');
	}

}


//PERMISOS SMS
function Permiso_SMS() {


	var success = function (hasPermission) {
		if (!hasPermission) {
			sms.requestPermission(function () {
				sms.send(number, message, options, successSend, error);
				//console.log('[OK] Permission accepted')
			}, function (error) {
				console.log("no dejo permiso::" + error)
				$("#PopUp").show();
				$("#parrafo_info").html('<img src="img/icono_advertencia_amarillo.png" width="30"/><br>');
				$("#parrafo_info").append(alertasText['alert_sin_smsm'] + '<br>');
				$("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');
			})
		}
	};
	var error = function (e) {
		//alert('Message Failed:' + e); 
		$("#PopUp").show();
		$("#parrafo_info").html('<img src="img/icono_advertencia_amarillo.png" width="30"/><br>');
		$("#parrafo_info").append(alertasText['alert_sin_smsm'] + '<br>');
		$("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');
	};

	sms.hasPermission(success, error);
	//Activar_Telefono();
	//var cordovaCall = cordova.plugins.CordovaCall;
	//if(localStorage.getItem("activar_phone") != ""){
	//Activar_Telefono();
	//}
}

//ENVIAR SMS
function Enviar_SMS() {
	// iOS: ensure number is actually a string 
	var number = localStorage.getItem("set_sms_emergencia").toString();;
	var message = alertasText["alert_activo_alerta"] + " " + localStorage.getItem("nombre_guarda_sesion") + " : " + latitud + "," + longitud;

	//CONFIGURATION
	var options = {
		replaceLineBreaks: false, // true to replace \n by a new line, false by default
		android: {
			//intent: 'INTENT'  // send SMS with the native android SMS messaging
			intent: '' // send SMS without open any other app
		}
	};

	var success = function () {
		$("#resp_pop_licencia").html(alertasText["alert_alerta_enviada"]);
		$("#PopUpLicencia").show();
		Ocultar_PopUpAlerta();
		setTimeout(Llamar_Telefono(), 2000);
	};
	var error = function (e) {
		$("#PopUp").show();
		$("#parrafo_info").html('<img src="img/icono_advertencia_amarillo.png" width="30"/><br>');
		$("#parrafo_info").append(alertasText['alert_sin_smsm'] + '<br>');
		$("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');
	};

	sms.send(number, message, options, success, error);
}

//ENVIAR SMS ALERTA
function Enviar_SMS_alerta_Quietud() {
	var number = localStorage.getItem("set_sms_emergencia").toString();;
	var message = alertasText['sms_inactividad_1'] + localStorage.getItem("set_minutos_quietud") + alertasText['sms_inactividad_2'] + localStorage.getItem("nombre_guarda_sesion") + " : " + latitud + "," + longitud;

	//CONFIGURATION
	var options = {
		replaceLineBreaks: false, // true to replace \n by a new line, false by default
		android: {
			//intent: 'INTENT'  // send SMS with the native android SMS messaging
			intent: '' // send SMS without open any other app
		}
	};

	var success = function () {
		$("#resp_pop_licencia").html(alertasText["alert_alerta_enviada"]);
		$("#PopUpLicencia").show();
	};
	var error = function (e) {
		$("#PopUp").show();
		$("#parrafo_info").html('<img src="img/icono_advertencia_amarillo.png" width="30"/><br>');
		$("#parrafo_info").append(alertasText['alert_sin_smsm'] + '<br>');
		$("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');
	};

	sms.send(number, message, options, success, error);
}

//ENVIAR SMS ALERTA REPORTE
function Enviar_SMS_alerta_Reporte() {
	var number = localStorage.getItem("set_sms_emergencia").toString();;
	var message = alertasText['sms_reporte']  + localStorage.getItem("nombre_guarda_sesion") + " : " + latitud + "," + longitud;

	//CONFIGURATION
	var options = {
		replaceLineBreaks: false, // true to replace \n by a new line, false by default
		android: {
			//intent: 'INTENT'  // send SMS with the native android SMS messaging
			intent: '' // send SMS without open any other app
		}
	};

	var success = function () {
	//	$("#resp_pop_licencia").html(alertasText["alert_alerta_enviada"]);
	//	$("#PopUpLicencia").show();
	};
	var error = function (e) {
		$("#PopUp").show();
		$("#parrafo_info").html('<img src="img/icono_advertencia_amarillo.png" width="30"/><br>');
		$("#parrafo_info").append(alertasText['alert_sin_smsm'] + '<br>');
		$("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');
	};

	sms.send(number, message, options, success, error);
}

//ENVIAR SMS ALERTA
function Enviar_SMS_alerta_Caida() {
	var number = localStorage.getItem("set_sms_emergencia").toString();;
	var message = alertasText['sms_caida_1'] + localStorage.getItem("nombre_guarda_sesion") + " : " + latitud + "," + longitud;

	//CONFIGURATION
	var options = {
		replaceLineBreaks: false, // true to replace \n by a new line, false by default
		android: {
			//intent: 'INTENT'  // send SMS with the native android SMS messaging
			intent: '' // send SMS without open any other app
		}
	};

	var success = function () {
		$("#resp_pop_licencia").html(alertasText["alert_alerta_enviada"]);
		$("#PopUpLicencia").show();
	};
	var error = function (e) {
		$("#PopUp").show();
		$("#parrafo_info").html('<img src="img/icono_advertencia_amarillo.png" width="30"/><br>');
		$("#parrafo_info").append(alertasText['alert_sin_smsm'] + '<br>');
		$("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');
	};

	sms.send(number, message, options, success, error);
}


//LLAMADA
function Llamar_Telefono() {
	tel = localStorage.getItem("set_telefono_emergencia");
	window.open("tel:" + tel);
}

//LLAMADA
/*
function Llamar_Telefono_Nativo(){
	tel = localStorage.getItem("set_telefono_emergencia");
	var successtel_done = function () { 
	};
	var errortel_done = function (e) { 
		
	};
	cordova.plugins.CordovaCall.callNumber( tel , successtel_done , errortel_done);
}
*/

/*
//LLAMADA
function Activar_Telefono(){
	tel = "";
	var successtel = function () { 
	};
	var errortel = function (e) { 
		localStorage.setItem("activar_phone", "true");
		
	};
	cordova.plugins.CordovaCall.callNumber( tel , successtel , errortel);
}
*/




//MINIMO MAXIMO
function minimo_max() {
	val = $("#set_hora_transmicion").val();

	if (val >= 0 && val <= 168) {
		//return true;
		console.log("en el rango");
		if (val == 0) {
			//	$("#op_0").selected = "true";
			document.getElementById("op_0").selected = "true";

		}
	}
	else {
		//return false
		console.log("fuera de rango");
		$("#set_hora_transmicion").val("");
	}
}

//MINIMO MAXIMO
function minimo_minutos_max() {
	val = $("#set_hora_transmicion").val();
	set_minuto_transmicion = $("#set_minuto_transmicion").val();
	if (val == 0 && set_minuto_transmicion < 30) {
		//return true;
		console.log("en el rango");
		document.getElementById("op_0").selected = "true";
	}
}

//MINIMO MAXIMO
function minimo_max_inactividad() {
	val = $("#set_minutos_quietud").val();

	if (val >= 5 && val <= 999) {
		//return true;
		console.log("en el rango");
	}
	else {
		//return false
		console.log("fuera de rango");
		$("#set_minutos_quietud").val("");
	}
}



//PAGINAS EXTERNAS
function Ver_Manuales() {

	//INICIAMOS LA BASE CVS
	if (localStorage.getItem("lenguaje") == 1) {
		url_manuales = 'http://www.centorguardclocks.com/Ares-QR-Manuals.html';
	}
	if (localStorage.getItem("lenguaje") == 3) {
		url_manuales = 'http://www.control-entradas-y-salidas.com/Ares-QR-Manuales.html';
	}
	if (localStorage.getItem("lenguaje") == 4) {
		url_manuales = 'http://www.control-entradas-y-salidas.com/Ares-QR-Manuales.html';
	}

	var ref = cordova.InAppBrowser.open(url_manuales, '_system', 'location=yes');
}

function ver_nombre_archivo() {
	$("#archivo_cargado_tmp").html($("#file_rondas").val());
}

//FECHA ACTUAL
function Fecha_Hoy() {
	hoy = new Date();
	//texto
	mes_txt = (hoy.getMonth() + 1);
	dia_txt = hoy.getDate();;
	hora_txt = hoy.getHours();
	minuto_txt = hoy.getMinutes();
	segundo_txt = hoy.getSeconds();

	//CONVERSION DE FECHAS
	if (hoy.getMonth() < 9) { mes_txt = "0" + (hoy.getMonth() + 1); }
	if (hoy.getDate() <= 9) { dia_txt = "0" + hoy.getDate(); }
	if (hoy.getHours() <= 9) { hora_txt = "0" + hoy.getHours(); }
	if (hoy.getMinutes() <= 9) { minuto_txt = "0" + hoy.getMinutes(); }
	if (hoy.getSeconds() <= 9) { segundo_txt = "0" + hoy.getSeconds(); }

	fecha = hoy.getFullYear() + "-" + mes_txt + "-" + dia_txt + " " + hora_txt + ":" + minuto_txt + ":" + segundo_txt;
	return fecha;
}


function clickedUploadFile(event) {
	var appDirectory = false;
	var resultElement = document.getElementsByClassName('drive-result')[0];
	resultElement.innerHTML = "Uploading file…";

	window.plugins.gdrive.uploadFile(JSON.stringify(event), appDirectory, null,
		function (success) {
			localStorage.setItem("sesionActiva", "si");
			resultElement.innerHTML = "Upload success: <br><pre>" + JSON.stringify(success) + "</pre>";
		},
		function (error) {
			resultElement.innerHTML = "Upload error: <br><pre>" + JSON.stringify(error) + "</pre>";
		});
}

function logOut() {

	window.plugins.gdrive.requestSync(false,
		function (res) {
			console.log("sesion serrada: " + res);
			//alert(res);
			localStorage.setItem("sesionActiva", "no");

			$("#buttonCerrarSesion").hide()
			$("#buttonIniciarSesion").show()

		},
		function (err) {
			console.log(err);
			console.log("La sesion no se pudo cerrada: " + err);
		}
	);
}

function logIn() {

	window.plugins.gdrive.requestSync(true,
		function (res) {
			console.log("sesion iniciada: " + res);
			//alert(res);
			localStorage.setItem("sesionActiva", "si");

			$("#buttonCerrarSesion").show()
			$("#buttonIniciarSesion").hide()

		},
		function (err) {
			console.log(err);
		}
	);
}

