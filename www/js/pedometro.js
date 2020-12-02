//ESTA LINEA SETEA PASOS EN LOCAL
//ESTA LINEA SETEA PASOS EN LOCAL
if(localStorage.getItem("pasos") == "" || localStorage.getItem("pasos") == null){
	localStorage.setItem("pasos", 0);
}

if(localStorage.getItem("activar_podemotro") == "" || localStorage.getItem("activar_podemotro") == null){
	localStorage.setItem("activar_podemotro", 2); //ACTIVO
}

//VALIDAMOS LOS SENSORES
//VALIDAMOS LOS SENSORES
//VALIDAMOS LOS SENSORES
//VALIDAMOS LOS SENSORES
//VALIDAMOS LOS SENSORES
function ValidarSensores(){
	
	$("#podometro_disponible_alert").hide();
	
	if(localStorage.getItem("activar_podemotro") == 1 || localStorage.getItem("activar_mandonw") == 1){
		cordova.plugins.backgroundMode.setEnabled(true);
		
		cordova.plugins.backgroundMode.on('activate', function() {
		   cordova.plugins.backgroundMode.disableWebViewOptimizations(); 
		});
	}
	
	if(localStorage.getItem("activar_podemotro") == 2 && localStorage.getItem("activar_mandonw") == 2){
		cordova.plugins.backgroundMode.setEnabled(false);
	}
	
	//PARA ACTIVAR LOS PASOS
	if(localStorage.getItem("activar_podemotro") == 1){
		Activar_Pedometro();
	}
	else{
		DetenerPedometro();
	}
}


//ESTA FUNCION HABILITAR EL SENSOR PARA GUARDAR LOS PASOS
//ESTA FUNCION HABILITAR EL SENSOR PARA GUARDAR LOS PASOS
//ESTA FUNCION HABILITAR EL SENSOR PARA GUARDAR LOS PASOS
//ESTA FUNCION HABILITAR EL SENSOR PARA GUARDAR LOS PASOS
function Activar_Pedometro(){
	var exitoPedometro = function (pedometerData) {
		//$("#Cantidad_Pasos").html( pedometerData.numberOfSteps );
		localStorage.setItem("pasos", pedometerData.numberOfSteps);
		//alert( pedometerData.numberOfSteps );
		// pedometerData.startDate; -> ms since 1970
		// pedometerData.endDate; -> ms since 1970
		// pedometerData.numberOfSteps;
		// pedometerData.distance;
		// pedometerData.floorsAscended; Only iOS 
		// pedometerData.floorsDescended; Only iOS
	};
	
	pedometer.startPedometerUpdates(exitoPedometro, errorPedometro);
	$("#podometro_disponible_alert").hide();
}
		
function errorPedometro(e){
	$("#podometro_disponible_alert").show();
	//alert("podometro no disponible");
	//alert(e);
}

//PARA DETENER EL PEDOMETRO DESDE EL REPORTE
//PARA DETENER EL PEDOMETRO DESDE EL REPORTE
//PARA DETENER EL PEDOMETRO DESDE EL REPORTE
function DetenerPedometro(){
	pedometer.stopPedometerUpdates(exitoDetenerPedometroReport, errorDetenerPedometroReport);
	
}
function exitoDetenerPedometroReport(){	
	localStorage.setItem("pasos","0");
}
function errorDetenerPedometroReport(e){
	localStorage.setItem("pasos","0");
	//alert(e);
}

//PARA REACTIVAR EL PEDOMETRO
//PARA REACTIVAR EL PEDOMETRO
//PARA REACTIVAR EL PEDOMETRO
//PARA REACTIVAR EL PEDOMETRO
function ReactivarPedometro(){
	pedometer.stopPedometerUpdates(exitoReactivarPedometro, errorReactivarPedometro);
}
function exitoReactivarPedometro(){	
	Activar_Pedometro();
}
function errorReactivarPedometro(e){
	//alert(e);
}


