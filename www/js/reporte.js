function Compilar_reporte(){
	
	reporte_csv = '';
	
	if(localStorage.getItem("lenguaje") == 1){
		reporte_csv = 'Hardware ID, QR No., Site Name, Tour, Checkpoint Name, Date / Time, Officer, Latitude, Longitude, Message, Steps';
	}
	if(localStorage.getItem("lenguaje") == 3){
		reporte_csv = 'Hardware ID, QR No., Nombre Sitio, Ronda, Nombre punto, Fecha / Hora, Vigilante, Latitud, Longitud, Mensaje, Pasos';
	}
	
	if(localStorage.getItem("lenguaje") == 4){
		reporte_csv = 'Matériel ID, QR No., Nom du site, Ronde, Nom du point, Date / Heure, Vigilante, Latitude, Longueur, Message, Les Marches';
	}
	
	if(localStorage.getItem("lenguaje") == 5){
		reporte_csv = 'Hardware ID, QR No., Site Adi, Tur, Kontrol Noktasi Adi, Tarih / Saat, Bekgi, Emlen, Boylam, Mesaj, Adimlar';
	}

	
		
	fecha_inicio = '';
	fecha_fin = '';
	activar_resumen = false;
	resumen = '';
	array_escaneados_tem = [];
	
	//CARGAMOS LA INFORMACION EN LOCAL
	filas_reporte = localStorage.getItem("reporte_tour").split(";");
	puntos_conf = localStorage.getItem("lista_puntos").split(";");
		
	//RECORREMOS EL ARRAY SEPARADO POR ";"
	for (i = 0; i < filas_reporte.length; i++) {
		
		nodo = filas_reporte[i].split(","); //TODA LA FILA	
		tipo = nodo[1].substr(14,2); //TIPO DE REGISTRO
		
		
		//SI ES UN START TOUR
		//SI ES UN START TOUR
		//SI ES UN START TOUR
		//SI ES UN START TOUR
		//SI ES UN START TOUR
		if(tipo == "03"){
			//con cada start tour se cierra el ciclo //la primera vez no se completa
			if(activar_resumen == true ){ 
			
				omisiones = Validar_Total_Ronda( array_escaneados_tem, 'start'); //CON CADA START TOUR SE INICIA LA VERIFICACION
				omisiones_puntos = Obtener_Omisiones(array_escaneados_tem);

				//ARMAMOS EL REPORTE ANTES DE AGREGAR LA SIGUIENTE LINEA
				//FECHAS
				fecha1 = moment(fecha_inicio, "YYYY-MM-DD HH:mm:ss");
				fecha2 = moment(fecha_fin, "YYYY-MM-DD HH:mm:ss");
				direfencia_horas = moment.utc(fecha2.diff(fecha1)).format("HH:mm:ss");
				diferencia_dias = fecha2.diff(fecha1, 'days');	
				partes = direfencia_horas.split(":");
				
				//INICIAMOS LA BASE CVS
				if(localStorage.getItem("lenguaje") == 1){
						resumen = "Report: "+ronda+" : Duration "+diferencia_dias+" Days - "+partes[0]+" Hours - "+
						partes[1]+" Minutes - "+partes[2]+" Seconds : ("+fecha_inicio+" - "+fecha_fin+") : Omissions: "+omisiones+" : "+omisiones_puntos ;
				}
				if(localStorage.getItem("lenguaje") == 3){
						resumen = "Reporte: "+ronda+" : Duracion "+diferencia_dias+" dias - "+partes[0]+" Horas - "+
						partes[1]+" Minutos - "+partes[2]+" Segundos : ("+fecha_inicio+" - "+fecha_fin+") : Omisiones: "+omisiones+" : "+omisiones_puntos;
				}
				if(localStorage.getItem("lenguaje") == 4){
						resumen = "Rapport: "+ronda+" : Durée "+diferencia_dias+" jours - "+partes[0]+" Les heures - "+
						partes[1]+" Minutes - "+partes[2]+" Secondes : ("+fecha_inicio+" - "+fecha_fin+") : Omissions: "+omisiones+" : "+omisiones_puntos;
				}
				if(localStorage.getItem("lenguaje") == 5){
						resumen = "Rapor: "+ronda+" : Süre "+diferencia_dias+" Günler - "+partes[0]+" Saatler - "+
						partes[1]+" Dakika - "+partes[2]+" Saniye : ("+fecha_inicio+" - "+fecha_fin+") : Eksiklikler: "+omisiones+" : "+omisiones_puntos;
				}
				
					
				reporte_csv += "\n"+resumen; 
				
				array_escaneados_tem = []; //VAVIAMOS EL ARRAY TEMPORAL
				array_escaneados_tem.push( [nodo[1],nodo[11]] ); //Y SE AGREGA UNO NUEVO
			}
			 
			else{
				array_escaneados_tem.push( [nodo[1],nodo[11]] ); //LA PRIMERA  VEZ SE AÑADE
			}
			
			activar_resumen = true; //PARA ACTIVAR LOS REPORTES

			fecha_inicio = nodo[5];
			reporte_csv += "\n"+nodo[0]+","+nodo[1]+","+nodo[2]+","+nodo[3]+","+nodo[4]+","+nodo[5]+","+nodo[6]+","+nodo[7]+","+nodo[8]+","+nodo[9]+","+nodo[12];
	
		}
		
	
		//SI ES UN CONTROL POINT
		//SI ES UN CONTROL POINT
		//SI ES UN CONTROL POINT
		//SI ES UN CONTROL POINT
		//SI ES UN CONTROL POINT
		if(tipo == "04"){
			
			registrar_tmp = true;
			for (ival = 0; ival < array_escaneados_tem.length; ival++) { //VOLVEMOS A CONSULTAR LOS PUNTOS CONFIGURADOS EN ESTA RONDA
				if( array_escaneados_tem[ival][0] == nodo[1] ){
					registrar_tmp = false;
				}
			}
			
			if(registrar_tmp == true){
				array_escaneados_tem.push( [nodo[1],nodo[11]] ); //para añadirlo al arreglo
			}

			fecha_fin = nodo[5];
			ronda = nodo[3];
			reporte_csv += "\n"+nodo[0]+","+nodo[1]+","+nodo[2]+","+nodo[3]+","+nodo[4]+","+nodo[5]+","+nodo[6]+","+nodo[7]+","+nodo[8]+","+nodo[9]+","+nodo[12];
			
			if( (filas_reporte.length-1) == i){ //SE EJECUTA SOLO AL FINAL DEL REPORTE
				omisiones = Validar_Total_Ronda( array_escaneados_tem, 'final' ); //CON CADA START TOUR SE INICIA LA VERIFICACION
				omisiones_puntos = Obtener_Omisiones(array_escaneados_tem);
				
				//ARMAMOS EL REPORTE DESPUES DE AGREGAR LA SIGUIENTE LINEA
				fecha1 = moment(fecha_inicio, "YYYY-MM-DD HH:mm:ss");
				fecha2 = moment(fecha_fin, "YYYY-MM-DD HH:mm:ss");
				direfencia_horas = moment.utc(fecha2.diff(fecha1)).format("HH:mm:ss");
				diferencia_dias = fecha2.diff(fecha1, 'days');	
				partes = direfencia_horas.split(":");
				
				//INICIAMOS LA BASE CVS
				if(localStorage.getItem("lenguaje") == 1){
						resumen = "Report: "+ronda+" : Duration "+diferencia_dias+" Days - "+partes[0]+" Hours - "+
						partes[1]+" Minutes - "+partes[2]+" Seconds : ("+fecha_inicio+" - "+fecha_fin+") : Omissions: "+omisiones+" : "+omisiones_puntos ;
				}
				if(localStorage.getItem("lenguaje") == 3){
						resumen = "Reporte: "+ronda+" : Duracion "+diferencia_dias+" dias - "+partes[0]+" Horas - "+
						partes[1]+" Minutos - "+partes[2]+" Segundos : ("+fecha_inicio+" - "+fecha_fin+") : Omisiones: "+omisiones+" : "+omisiones_puntos;
				}
				if(localStorage.getItem("lenguaje") == 4){
						resumen = "Rapport: "+ronda+" : Durée "+diferencia_dias+" jours - "+partes[0]+" Les heures - "+
						partes[1]+" Minutes - "+partes[2]+" Secondes : ("+fecha_inicio+" - "+fecha_fin+") : Omissions: "+omisiones+" : "+omisiones_puntos;
				}
				if(localStorage.getItem("lenguaje") == 5){
						resumen = "Rapor: "+ronda+" : Süre "+diferencia_dias+" Günler - "+partes[0]+" Saatler - "+
						partes[1]+" Dakika - "+partes[2]+" Saniye : ("+fecha_inicio+" - "+fecha_fin+") : Eksiklikler: "+omisiones+" : "+omisiones_puntos;
				}
									
				reporte_csv += "\n"+resumen; 
			}
			
		}

	}
		
	console.log(reporte_csv);	
	return reporte_csv;

}




//valida
function Validar_Total_Ronda(escaneados, text){
		
	puntos_configurados = 0;
	puntos_escaneados = 0;

	//console.log(escaneados);
	ronda = escaneados[0][0]; // RONDA SE TOMA DEL PRIMER REGISTRO
	//VALIDAMOS LOS PUNTOS CONFIGURADOS
	for (ip = 0; ip < puntos_conf.length; ip++) { //VOLVEMOS A CONSULTAR LOS PUNTOS CONFIGURADOS EN ESTA RONDA
		
		filasP = puntos_conf[ip].split(",");  // 			
		
		if(filasP[1] == ronda ){ //SOLO ME TRAE LOS CORRESPONDIENTES A LA RONDA
			puntos_configurados++;
				
			for (ie = 0; ie < escaneados.length; ie++) { //RECORREMOS LOS ESCANEADOS
				//console.log(escaneados[ie]);
				
				if( filasP[0] ==  escaneados[ie][0] && escaneados[ie][1] == ronda){
					//console.log( "punto escaneado"+escaneados[ie][0] );
					puntos_escaneados++;
				}
			}
			
		}
	}
	

	
	console.log("configurados: "+puntos_configurados);
	console.log("escaneados: "+puntos_escaneados);
	console.log(text);
	
	return (puntos_configurados - puntos_escaneados);
	
	//console.log(array_escaneados_tem);
}


//valida
function Obtener_Omisiones(escaneados){

	puntos_omitidos = "";
	ronda = escaneados[0][0]; // RONDA SE TOMA DEL PRIMER REGISTRO
	
	//VALIDAMOS LOS PUNTOS CONFIGURADOS
	for (ip = 0; ip < puntos_conf.length; ip++) { //VOLVEMOS A CONSULTAR LOS PUNTOS CONFIGURADOS EN ESTA RONDA
		
		filasP = puntos_conf[ip].split(",");  // 			
		
		//SOLO ME TRAE LOS CORRESPONDIENTES A LA RONDA, NO TRAE MAS INFO
		//SOLO ME TRAE LOS CORRESPONDIENTES A LA RONDA, NO TRAE MAS INFO
		if(filasP[1] == ronda ){  
			no_escaneado = true;
				
			for (ie = 0; ie < escaneados.length; ie++) { //RECORREMOS LOS ESCANEADOS
				//console.log(escaneados[ie]);
				
				if( filasP[0] ==  escaneados[ie][0] ){
					no_escaneado = false;
				}
			}
			
			if(no_escaneado == true){
				if(puntos_omitidos == ""){
					puntos_omitidos += filasP[4];
				}
				else{
					puntos_omitidos += "/"+filasP[4];
				}
			}
			
		}
		//FINAL DE LO CORRESPONDIENTE A LA RONDA
	}

	return (puntos_omitidos);
}


















/*
function Total_Ronda(rondap){
	total_configurado_ronda = 0;
	//VALIDAMOS LOS PUNTOS CONFIGURADOS
	for (ip = 0; ip < puntos_conf.length; ip++) {
		filasP = puntos_conf[ip].split(",");			
		if(filasP[1] == rondap ){
			total_configurado_ronda++;
			//console.log(filasP[0]);
		}
	}
	
	console.log(array_escaneados_tem);
}
*/





