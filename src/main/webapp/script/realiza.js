/**
 * 
 */

function verificarFecha(){
 var fechaActual = new Date();
 
 var diaActual = fechaActual.getDate();
 var mesActual =fechaActual.getMonth();
 var anioActual = fechaActual.getFullYear();
 
   console.log("Fecha actual:", diaActual, "-", mesActual + 1, "-", anioActual); // Sumamos 1 al mes porque los meses en JavaScript van de 0 a 11

 
 var fechaEspecifica = {
	 
	 dia: 25,
	 mes:4,
	 año: 2022	
 };
 
 var calendario = {
	 
	 dia: diaActual,
	 mes: mesActual,
	 año: anioActual
	 
 };
 
 function obtenerMes (numeroMes){
	 var nombreMes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
   	return nombreMes[numeroMes];
 }
 
 calendario.mes=obtenerMes(calendario.mes)
 
 if (
    fechaEspecifica.dia === calendario.dia &&
    fechaEspecifica.mes === calendario.mes &&
    fechaEspecifica.año === calendario.año
) {
    console.log("Aun falta");
} else {
    console.log("Es hoy");
}
}