var opcion_foto = "";
//TOMAR FOTO O LIBRERIA VERSION MOVIL
//TOMAR FOTO O LIBRERIA VERSION MOVIL
function tomarFotoCamara(val){
	opcion_foto = val;
	//if(val == 1){
	navigator.camera.getPicture(Procesar_Imagen, onFail, { 
		quality: 30,
		destinationType: Camera.DestinationType.DATA_URL
	});

	//}
/*
	if(val == 2){
		navigator.camera.getPicture(onSuccess, onFail, { 
			destinationType: Camera.DestinationType.DATA_URL,
    		sourceType: Camera.PictureSourceType.PHOTOLIBRARY
		});
	}
*/

	//$('#loader_carga').show();
	//$('#imagenPrevio1').hide();
}



//SI ES EXITOSO
//SI ES EXITOSO
function Procesar_Imagen(imageData){

	//CARGAMOS LA IMAGEN EN EL TAG IMAGNE
	var base64 = "data:image/jpeg;base64," + imageData;
	var image = document.getElementById('imagenPrevio'+opcion_foto);
    image.src = base64;
	$("#imagenPrevio"+opcion_foto).show();
	
	//GUARDAMOS LA FOTO EN BASE 62
	localStorage.setItem("foto"+opcion_foto, imageData);

}


//EN CASO DE FALLAR
//EN CASO DE FALLAR
function onFail(){
	alert('Failed because: ' + message);
}

function Eliminar_Foto(val){
	$("#imagenPrevio"+val).hide();
	localStorage.setItem("foto"+val, "");
}