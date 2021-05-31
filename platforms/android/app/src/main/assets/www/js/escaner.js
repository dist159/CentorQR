var tipo_scann = "";
//DATOS OBTENIDOS EN LA LLAVE
var uuid = "";

//ACTIVAR ESCANER
//ACTIVAR ESCANER
function Activar_Escanner(val) {
	tipo_scann = val; //TIPO SCANNER
	QRScanner.scan(displayContents);
	// Make the webview transparent so the video preview is visible behind it.
	QRScanner.show();
}

//FUNCTION PROPIA DEL ESCANER
//FUNCTION PROPIA DEL ESCANER
function displayContents(err, text) {
	if (err) {
		//alert("error");
		// an error occurred, or the scan was canceled (error code `6`)
	}
	else {
		// The scan completed, display the contents of the QR code:
		if (tipo_scann == 1) { Escanear_Data_Checkpoint(text); }
		if (tipo_scann == 2) { Escanear_Donglekey(text); }
		if (tipo_scann == 3) { Escanear_Point_Tour(text); }
		Detener_Camara();
	}
}

//GUARDAR CHECKPOINT 1 PARA TOUR
//GUARDAR CHECKPOINT 1 PARA TOUR
function Escanear_Data_Checkpoint(codigo) {
	if (localStorage.getItem("pasosAntes") == null || localStorage.getItem("pasosAntes") == undefined) {
		localStorage.setItem("pasosAntes", 0)
	}

	//	alert(" los pasos acutales "+parseInt(localStorage.getItem("pasos"))+" pasos de este recorrido: "+(parseInt(localStorage.getItem("pasos"))-parseInt(localStorage.getItem("pasosAntes"))))
	//VALIDAR CODIGO
	if (Validar_CRC(codigo) == true) {

		//VARIABLES
		tipo = codigo.substr(14, 2);
		nombre_sitio = "";
		nombre_tour = "";
		nombre_punto = "";
		mensaje = localStorage.getItem("mensaje_temporal");
		udid = device.uuid;
		nombre_guarda_sesion = localStorage.getItem("nombre_guarda_sesion");
		fecha_hora = Fecha_Hoy();

		if (mensaje == "" || mensaje == null) { mensaje = ""; }

		//VALIMADOS QUE SI NO EXITE UN REPORTE INICIADO Y EL TIPO ES 4 NO PERMITE
		reporte_tour = localStorage.getItem("reporte_tour");
		if (reporte_tour == "" || reporte_tour == null) {
			reporte_tour = "";
			//ReactivarPedometro();
		}

		if (tipo == "04" && reporte_tour == "") {
			$("#resp_check_registro").html(alertasText['alert_debe_marcar_start']); //para iniciar un nuevo reporte debes marcar un start tour
			$("#PopUpCheckPointRecord").show();
		}

		//DE LO CONTRARIO
		else {
			//VALIDAMOS QUE NO SEA UNA LICENCIA
			if (tipo >= "03" && tipo <= "04") {

				//1 = REGISTRADO Y LISTO PARA PROCEDER
				//2 = BASE DE PUNTOS SIN REGISTROS
				//3 = QR SIN REGISTRAR - PENDIENTE DE REGISTRO
				permitir = 1;

				//CON ESTE FRAGMENTO VALIDAMOS SI UN QR CODE ESTA CONFIGURADO.
				//CON ESTE FRAGMENTO VALIDAMOS SI UN QR CODE ESTA CONFIGURADO.
				//CON ESTE FRAGMENTO VALIDAMOS SI UN QR CODE ESTA CONFIGURADO.
				lista_puntos = localStorage.getItem("lista_puntos");

				if (lista_puntos == "" || lista_puntos == null) {
					permitir = 2;
				}

				else {
					permitir = 3;
					filas = lista_puntos.split(";");

					for (i = 0; i < filas.length; i++) {
						nodo = filas[i].split(","); //extraemos el codigo del marcador
						if (nodo[0] == codigo) {
							nombre_sitio = nodo[2];
							nombre_tour = nodo[3];
							nombre_punto = nodo[4];
							permitir = 1;
						}
					}
				}
				//FINAL VALIDACION QR
				//FINAL VALIDACION QR

				//INICIAMOS CON LA VALIDACION DE GUARDADO PARA RONDA
				//INICIAMOS CON LA VALIDACION DE GUARDADO PARA RONDA
				if (permitir == 1) {
					registrar = true; //SE PERMITE EL REGISTRO

					if (tipo == "04") {

						reporte_tour = localStorage.getItem("reporte_tour");
						if (reporte_tour == "" || reporte_tour == null) {
							registrar = true;
						}

						else {
							codigo_ronda = "";

							//iniciamos la extracion del ultimo nodo
							filas = reporte_tour.split(";");
							u_nodo = (filas.length - 1);
							ultima_fila = filas[u_nodo].split(","); //

							//aqui buscamos la ronda asignada
							lista_puntos = localStorage.getItem("lista_puntos");
							filas_puntos = lista_puntos.split(";");
							for (i = 0; i < filas_puntos.length; i++) {
								nodoP = filas_puntos[i].split(","); //
								if (nodoP[0] == codigo) {
									codigo_ronda = nodoP[1]
								}
							}

							if (ultima_fila[11] == codigo_ronda) {
								registrar = true;
							}
							else {
								registrar = false;
							}
						}
					}

					//así se arma la fila del reporte
					//udid+","+codigo+","+nombre_sitio+","+nombre_tour+","+nombre_punto+","+fecha_hora+","+nombre_guarda_sesion+","+latitud+","+longitud+","+mensaje+","+"abierto"+","+codigo;

					//SI ESTÁ PERMITIDO, SE REGISTRA EL PUNTO PARA EL REPORTE
					//SI ESTÁ PERMITIDO, SE REGISTRA EL PUNTO PARA EL REPORTE
					//SI ESTÁ PERMITIDO, SE REGISTRA EL PUNTO PARA EL REPORTE
					//SI ESTÁ PERMITIDO, SE REGISTRA EL PUNTO PARA EL REPORTE
					//SI ESTÁ PERMITIDO, SE REGISTRA EL PUNTO PARA EL REPORTE
					if (registrar == true) {

						if (tipo == "03") {
							elemento = udid + "," + codigo + "," + nombre_sitio + "," + nombre_tour + "," + nombre_punto + "," + fecha_hora + "," + nombre_guarda_sesion + "," + latitud +
								"," + longitud + "," + mensaje + "," + "abierto" + "," + codigo + "," + (parseInt(localStorage.getItem("pasos")) - parseInt(localStorage.getItem("pasosAntes")));
							localStorage.setItem("id_actual_tmp", codigo);
							localStorage.setItem("mensaje_temporal", '');///////////////////////////
						}

						if (tipo == "04") {
							codigo_tmp = localStorage.getItem("id_actual_tmp");
							elemento = udid + "," + codigo + "," + nombre_sitio + "," + nombre_tour + "," + nombre_punto + "," + fecha_hora + "," + nombre_guarda_sesion + "," +
								latitud + "," + longitud + "," + mensaje + "," + "abierto" + "," + codigo_tmp + "," + (parseInt(localStorage.getItem("pasos")) - parseInt(localStorage.getItem("pasosAntes")));
							localStorage.setItem("mensaje_temporal", '');///////////////////////////
						}

						if (reporte_tour == "" || reporte_tour == null) {
							guardar_fecha();
							localStorage.setItem("reporte_tour", elemento);
							//EJECUTAMOS EL TIMER SOLO 1 VEZ
						}
						else {
							localStorage.setItem("reporte_tour", reporte_tour + ";" + elemento);
						}

						$("#resp_check_registro").html(idiomaSeleccionado['ti_confirmacion_escaneo'] + '.<br><br>' + alertasText['nombre_punto'] + ': ' +
							nombre_punto + '<br>' + alertasText['hora_punto'] + ': ' + fecha_hora + '<br>');
						$("#PopUpCheckPointRecord").show();

						//	ReactivarPedometro(); // AQUI RE-ACTIVAMOS EL PEDOMETRO
						localStorage.setItem("pasosAntes", localStorage.getItem("pasos"))

					}
					//FIN
					//FIN

					else {
						$("#resp_check_registro").html(alertasText['alert_debe_marcar_start_cambio']); //este se cambia por debes marcar el start point de este ronda
						$("#PopUpCheckPointRecord").show();
					}

				}

				if (permitir == 2) {
					$("#resp_check_registro").html(alertasText['alert_ningun_punto']); //'No tienes ningun punto configurado.'
					$("#PopUpCheckPointRecord").show();
				}

				if (permitir == 3) {
					$("#resp_check_registro").html(alertasText['alert_qr_no_conf']); //'Este QR no esta configurado'
					$("#PopUpCheckPointRecord").show();
				}
			}
			else {

				$("#resp_check_registro").html(alertasText['alert_escaneado_licencia']); //Lo sentimos, estas escaneando una licencia. Intenta nuevamente
				$("#PopUpCheckPointRecord").show();

			}
		}

	}

	else {
		$("#resp_check_registro").html(alertasText['alert_no_qr_code']); //Lo sentimos, no reconocemos este QR CODE
		$("#PopUpCheckPointRecord").show();
	}

}

//GUARDAR LICENCIA 2
//GUARDAR LICENCIA 2
function Escanear_Donglekey(codigo) {

	//DATA
	tipo = codigo.substr(14, 2);
	partes = codigo.split(","); ////////////////////////

	if (partes.length == 3) {
		if (validarLicencia() === partes[0]) {

			//validamos que tenga 3 partes
			//if (tipo == "02") {

			localStorage.setItem("licencia", partes[0]);
			$("#resp_pop_licencia").html(alertasText['alert_escanear_licencia']);
			$("#PopUpLicencia").show();

			localStorage.setItem("activar_licencia", "por_activar");
			localStorage.setItem("licencia_full", codigo);
			localStorage.setItem("correo_sender", partes[2]);

			Validaciones();

			/*
			//validamos que coincida el UDID
			uuid = device.uuid;

			if (partes[1] == "0642a42b1dc9666x") { uuid = "0642a42b1dc9666x"; }
			
							if (uuid == partes[1]) {
								//localStorage.setItem("familia", familia ); //ASIGNAMOS EL GRUPO  
								localStorage.setItem("licencia", partes[0]);
								$("#resp_pop_licencia").html(alertasText['alert_escanear_licencia']);
								$("#PopUpLicencia").show();
			
								localStorage.setItem("activar_licencia", "por_activar");
								localStorage.setItem("licencia_full", codigo);
								localStorage.setItem("correo_sender", partes[2]);
			
								Validaciones();
							}
							else {
								$("#resp_pop_licencia").html(alertasText['alert_licencia_invalidad']);
								$("#PopUpLicencia").show();
							}
							*/
			/*}
			else {
				$("#resp_pop_licencia").html(alertasText['alert_licencia_no_licencia']);
				$("#PopUpLicencia").show();
			}*/

		}

		else {
			$("#resp_pop_licencia").html(alertasText['alert_licencia_invalidad']);
			$("#PopUpLicencia").show();
			/*
			$("#resp_pop_licencia").html(codigo);
			$("#PopUpLicencia").show();
			*/
		}

	} else {
		$("#resp_pop_licencia").html(alertasText['alert_licencia_no_licencia']);
		$("#PopUpLicencia").show();
		/*
		$("#resp_pop_licencia").html(alertasText['alert_licencia_no_qr']);
		$("#PopUpLicencia").show();*/
	}
}

/*** Nuevo algoritmo de validacion */
/** Le entra el uudi del dispositivo y retorna la licencia */

var Dictionary = "0123456789-ABCDEFGHIJKLMNOPQRSTUVWXYZ";

Values = [0x1f, 0x0, 0x15, 0x2, 0x3,
	0xa, 0xb, 0x18, 0xc, 0x24,
	0xe, 0xf, 0x10, 0x11, 0x12,
	0x14, 0x4, 0x22, 0x17, 0x19,
	0x5, 0x6, 0x7, 0x8, 0x9,
	0x1a, 0x1b, 0x1c, 0x1d, 0x1e,
	0xd, 0x20, 0x1, 0x21, 0x16,
	0x13, 0x23];


function validarLicencia() {
	DeviceId = device.uuid;
	var DeviceIdLength = DeviceId.length;
	var DictionaryLength = Dictionary.length;
	var RandomNumber = 0;
	var NumberSum = 0;

	var License = "";

	for (let i = 0; i < DeviceIdLength; i++) {

		for (let j = 0; j < DictionaryLength; j++) {
			if (DeviceId.toUpperCase()[i] == Dictionary[j]) {

				NumberSum += (Values[j] < 0xa) ? Number(String(Dictionary[Values[j]])) << NumberSum : Values[j] >> NumberSum;

				RandomNumber = (NumberSum << (i | j));

				License += Dictionary[Values[j]] + String(RandomNumber);

			}
		}

	}

	return License;
}

//ESCANEAR CHECKPOINT 3 PARA GUARDAR
//ESCANEAR CHECKPOINT 3 PARA GUARDAR
function Escanear_Point_Tour(codigo) {

	if (Validar_CRC(codigo) == true) {
		//DATA
		//id_qr = codigo.substr(0,8);
		tipo = codigo.substr(14, 2);
		//pass = codigo.substr(10,3);
		//familia = codigo.substr(13,3);

		//VALIDAMOS EL PASS
		if (codigo.length == 16) {

			//VALIDAMOS QUE NO SEA UNA LICENCIA
			if (tipo != "02") {
				permitir = true;

				//CON ESTE FRAGMENTO VALIDAMOS SI UN QR CODE YA FUE CONFIGURADO.
				//CON ESTE FRAGMENTO VALIDAMOS SI UN QR CODE YA FUE CONFIGURADO.
				//CON ESTE FRAGMENTO VALIDAMOS SI UN QR CODE YA FUE CONFIGURADO.
				lista_puntos = localStorage.getItem("lista_puntos");

				if (lista_puntos == "" || lista_puntos == null) {
					permitir = true;
				}
				else {
					filas = lista_puntos.split(";");
					for (i = 0; i < filas.length; i++) {

						nodo = filas[i].split(","); //extraemos el codigo del marcador

						if (nodo[0] == codigo) {
							permitir = false;
						}
					}
				}
				//FINAL VALIDACION QR
				//FINAL VALIDACION QR

				if (permitir == true) {

					if (tipo == "03") {//STARPOINT
						$("#checkp_serial").html(codigo); //PARA MOSTRARLO
						$("#ckeck_id_qr").val(codigo); //PARA GUARDARLO
						localStorage.setItem("id_star_point", codigo);
						$("#ckeck_tipo").val(tipo); //PARA GUARDARLO

						$("#check_name").val(""); // PARA VACIAR
						$("#check_tour_name").val(""); // PARA VACIAR
						window.location = "#CREAR_PUNTO";
					}

					else if (tipo == "04") {//STARPOINT

						if (localStorage.getItem("id_star_point") == "" || localStorage.getItem("id_star_point") == null) {

							$("#resp_pop_licencia").html(alertasText['alert_sin_star_tour']);
							$("#PopUpLicencia").show();
						}
						else {
							$("#checkp_serial").html(codigo); //PARA MOSTRARLO
							$("#ckeck_id_qr").val(codigo); //PARA GUARDARLO
							$("#ckeck_tipo").val(tipo); //PARA GUARDARLO
							$("#check_name").val(""); // PARA VACIAR
							window.location = "#CREAR_PUNTO";
						}
					}

					else {
						$("#resp_pop_licencia").html(alertasText['alert_qr_invalido']); ///'Este código ya se encuentra registrado, intenta nuevamente.'
						$("#PopUpLicencia").show();
					}

				}
				if (permitir == false) {
					$("#resp_pop_licencia").html(alertasText['alert_ya_registrado']); ///'Este código ya se encuentra registrado, intenta nuevamente.'
					$("#PopUpLicencia").show();
				}

				if (tipo == 03) { // startpoint
					$("#solo_startpoint").show();
					$("#bt_star_point").show();
					$("#bt_control_point").hide();
				}

				if (tipo == 04) { // generico
					$("#solo_startpoint").hide();
					$("#bt_star_point").hide();
					$("#bt_control_point").show();
				}
			}

			else {
				$("#resp_pop_licencia").html(alertasText['alert_es_licencia']); //'Lo sentimos, estas escaneando una licencia. Intenta nuevamente'
				$("#PopUpLicencia").show();
			}
		}
		else {
			$("#resp_pop_licencia").html(alertasText['alert_no_qr_code']); //'Lo sentimos, no reconocemos este QR CODE'
			$("#PopUpLicencia").show();
		}
	}
	else {
		$("#resp_pop_licencia").html(alertasText['alert_no_qr_code']); //'Lo sentimos, no reconocemos este QR CODE'
		$("#PopUpLicencia").show();
	}
}

//ESTRUCTURA DE LA BASE GUARDADA SEPARADA POR COMAS
//1. CODIGO
//2. CODIGO DEL STARTPOINT
//3. NOMBRE SITIO
//4. NOMBRE TOUR
//5. NOMBRE PUNTO
//6. TIPO PUNTO
//ESTRUCTURA DE LA BASE GUARDADA SEPARADA POR COMAS

//GURADAR PUNTO CONFIGURADO // ESTA FUNCIONALIDAD GUARDA UN PUNTO DE UN TOUR
//GURADAR PUNTO CONFIGURADO // ESTA FUNCIONALIDAD GUARDA UN PUNTO DE UN TOUR
function Guardar_Punto(val) {
	//VARIABLES
	site_name = localStorage.getItem("site_temp");
	lista_puntos = localStorage.getItem("lista_puntos"); // BASE DE DATOS
	punto_ctrl = "";

	if (val == 1) { //STARTPOINT
		check_name = $("#check_name").val();
		check_name = check_name.replace("'", "´");
		check_tour_name = $("#check_tour_name").val();
		check_tour_name = check_tour_name.replace("'", "´");

		ckeck_id_qr = $("#ckeck_id_qr").val(); //ocultos
		ckeck_tipo = $("#ckeck_tipo").val(); //ocultos

		//GUARDAMOS EN LA LISTA DE TOURS
		//GUARDAMOS EN LA LISTA DE TOURS
		tour = site_name + "," + ckeck_id_qr + "," + check_tour_name;
		lista_tours = localStorage.getItem("lista_tours");
		if (lista_tours == "" || lista_tours == null) {
			localStorage.setItem("lista_tours", tour);
		}
		else {
			localStorage.setItem("lista_tours", lista_tours + ";" + tour);
		}

		localStorage.setItem("id_star_point", ckeck_id_qr);
		localStorage.setItem("tour_name", check_tour_name);
		punto_ctrl = ckeck_id_qr + "," + ckeck_id_qr + "," + site_name + "," + check_tour_name + "," + check_name + "," + ckeck_tipo; //nueva linea
	}

	if (val == 2) { //CONTROL POINT
		check_name = $("#check_name").val();
		ckeck_id_qr = $("#ckeck_id_qr").val(); //ocultos
		ckeck_tipo = $("#ckeck_tipo").val(); //ocultos

		id_star_point = localStorage.getItem("id_star_point");
		tour_name = localStorage.getItem("tour_name");

		punto_ctrl = ckeck_id_qr + "," + id_star_point + "," + site_name + "," + tour_name + "," + check_name + "," + ckeck_tipo; //nueva linea
	}

	//CARGAMOS LOS PUNTOS
	if (lista_puntos == "" || lista_puntos == null) {
		localStorage.setItem("lista_puntos", punto_ctrl);
	}
	else {
		nuevo = lista_puntos + ";" + punto_ctrl
		localStorage.setItem("lista_puntos", nuevo);
	}

	$("#resp_pop_licencia").html(alertasText['alert_punto_guardado']);
	$("#PopUpLicencia").show();
	Ir_Escanner_Tour();
}





















//GURADAR PUNTO CONFIGURADO // ESTA FUNCIONALIDAD GUARDA UN PUNTO DE UN TOUR
//GURADAR PUNTO CONFIGURADO // ESTA FUNCIONALIDAD GUARDA UN PUNTO DE UN TOUR
function Guardar_Punto_old(val) {

	//VARIABLES
	site_name = localStorage.getItem("site_temp");
	lista_puntos = localStorage.getItem("lista_puntos"); // BASE DE DATOS

	if (val == 1) { //start point
		check_name = $("#check_name").val();
		check_tour_name = $("#check_tour_name").val();

		ckeck_id_qr = $("#check_name").val(); //ocultos
		ckeck_tipo = $("#check_name").val(); //ocultos


	}





	//datos obtenidos
	codigo = $("#ckeck_id_qr").val(); //OCULTO
	tour_name = $("#check_tour_name").val();
	name_point = $("#check_name").val();
	ckeck_tipo = $("#ckeck_tipo").val(); //OCULTO

	punto_ctrl = "";

	if (val == 1) { //start point

		//GUARDAMOS EN LA LISTA DE TOURS
		//GUARDAMOS EN LA LISTA DE TOURS
		tour = site_name + "," + codigo + "," + tour_name;
		lista_tours = localStorage.getItem("lista_tours");
		if (lista_tours == "" || lista_tours == null) {
			localStorage.setItem("lista_tours", tour);
		}
		else {
			localStorage.setItem("lista_tours", lista_tours + ";" + tour);
		}

		localStorage.setItem("id_star_point", codigo);
		localStorage.setItem("tour_name", tour_name);
		punto_ctrl = codigo + "," + codigo + "," + site_name + "," + tour_name + "," + name_point + "," + ckeck_tipo; //nueva linea
	}

	if (val == 2) { //control point
		id_star_point = localStorage.getItem("id_star_point");
		tour_name = localStorage.getItem("tour_name");

		punto_ctrl = codigo + "," + id_star_point + "," + site_name + "," + tour_name + "," + name_point + "," + ckeck_tipo; //nueva linea
	}

	if (lista_puntos == "" || lista_puntos == null) {
		localStorage.setItem("lista_puntos", punto_ctrl);
	}
	else {
		nuevo = config_tours + ";" + punto_ctrl
		localStorage.setItem("lista_puntos", nuevo);
	}

	$("#resp_pop_licencia").html('Punto Guardado');
	$("#PopUpLicencia").show();
	Ir_Escanner_Tour();
}


//ACTIVAR LUZ
//ACTIVAR LUZ
function Activar_luz() {
	QRScanner.enableLight(function (err, status) {
		err && console.error(err);
		console.log(status);
	});

	$("#linterna_on").hide();
	$("#linterna_off").show();

	$("#linterna_on_scanner").hide();
	$("#linterna_off_scanner").show();

	$("#linterna_on_config").hide();
	$("#linterna_off_config").show();
}

//DESACTIVAR LUZ
function Desactivar_luz() {
	QRScanner.disableLight(function (err, status) {
		err && console.error(err);
		console.log(status);
	});
	$("#linterna_on").show();
	$("#linterna_off").hide();

	$("#linterna_on_scanner").show();
	$("#linterna_off_scanner").hide();

	$("#linterna_on_config").show();
	$("#linterna_off_config").hide();
}

//DETENER CAMARA
function Detener_Camara() {
	QRScanner.cancelScan(function (status) {
	});
	/*
	QRScanner.pausePreview(function(status){
	  console.log(status);
	});
	*/
}

//CANCELAR  ESCANER
function Cancelar_Escaner() {
	window.location = "#HOME";

	QRScanner.cancelScan(function (status) {
	});
	QRScanner.destroy();
	/*
		QRScanner.pausePreview(function(status){
		  console.log(status);
		});
		*/
}


//FUNCIONES PARA ESCANEAR LICENCIA
//FUNCIONES PARA ESCANEAR LICENCIA
//FUNCIONES PARA ESCANEAR LICENCIA

//FUNCION PARA DESENCRIPTAR
function Desencriptar(valor) {
	var dato_cifrado = valor;

	alert(dato_cifrado);

	var bfd = new Blowfish('ba19de74a0f05bfa');
	var desencriptado = bfs.decrypt(atob(dato_cifrado));

	alert(desencriptado);
	//decrypted = bf.trimZeroes(decrypted); // for string/text information 
	//return desencriptado.toString();
}
