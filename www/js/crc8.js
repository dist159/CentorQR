//FUNCION PRIMARIA
//FUNCION PRIMARIA
function Validar_CRC(codigo){
	longitud_len = codigo.length;
	//correcto = false;
	//VALIDAMOS LA LONGITUD DEL DECIMAL
	if( (longitud_len * 4) == 64 ){

		crc_binario = Hexadecimal_A_Binario(codigo);

		if(crc_binario.length == 64){
			
			validar = Calcular_CRC(codigo);
			if(validar == true){
				return true;
			}
			else{
				return false;
			}
		}
		
		else{
			return false;
		}
	}
	
	else{
		return false;
	}
}








//arreglo decimal y hexadecimal
var ArrayDecimalHexadecimal = [ ["0", "0000"], ["1", "0001"], ["2", "0010"], ["3", "0011"],  
	["4", "0100"], ["5", "0101"], ["6", "0110"], ["7", "0111"],
	["8", "1000"], ["9", "1001"], ["A", "1010"], ["B", "1011"],
	["C", "1100"], ["D", "1101"], ["E", "1110"], ["F", "1111"]
];

//CONVERSION A HEXADECIMAL	
//CONVERSION A HEXADECIMAL					
function Hexadecimal_A_Binario(crc){
	
	codigo_en_hexadecimal = "";
	//CONVERTIMOS EL CODIGO EN UN ARREGLO
	codigo_crc = crc.split("");
	codigo_crc.forEach( function(val, index, array) {
		
		ArrayDecimalHexadecimal.forEach( function(valor, indice, arreglo) {
			if(valor[0] == val ){
				codigo_en_hexadecimal += valor[1];
			}
		});
	});

	return codigo_en_hexadecimal;
}







///FUNCION PARA CALCULAR EL CRC
function Calcular_CRC(crc){
	tmp = crc;
	crc = crc.substr(2,14);

	//variables
	crc8 = "";
	var arreglo_binario = [ "0", "0", "0", "0", "0", "0", "0", "0" ];
	crc_temp = "";
	//codigo convertido a binarios
	binarioTMP = Hexadecimal_A_Binario(tmp);
	//codigo convertido a binarios
	binario = Hexadecimal_A_Binario(crc);
	//primero contamos un numero menos
	longitud_len = binario.length - 1;

	//cambiar el primer bit del binario al final
	for (i = 0; i <= longitud_len; i++){
		crc8 += binario[longitud_len - i];
	}
	
	//cambiar el primer bit del binario al final
	for (i = 0; i <= longitud_len; i++){
		
		crc_temp = arreglo_binario[0] ^ ( (crc8[i] == '1') ? 1 : 0 );
		//console.log("crc_temporal:"+crc_temp);

		arreglo_binario[0] = arreglo_binario[1];
		arreglo_binario[1] = arreglo_binario[2];
		arreglo_binario[2] = arreglo_binario[3] ^ crc_temp;
		arreglo_binario[3] = arreglo_binario[4] ^ crc_temp;
		arreglo_binario[4] = arreglo_binario[5];
		arreglo_binario[5] = arreglo_binario[6];
		arreglo_binario[6] = arreglo_binario[7];
		arreglo_binario[7] = crc_temp;
	}
		
	crc8 = "";
	//asignamos el CRC Final
	for (i = 7; i >= 0; i--){
		crc8 += arreglo_binario[i];
	}

	if(binarioTMP.substr(0,8) == crc8 ){
		return true
	}
	
	else{
		return false;
	}
}



