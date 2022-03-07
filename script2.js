function pegarDados(){
	let PrimFaixa = document.getElementById("PrimFaixa").value;
	let SegFaixa = document.getElementById("SegFaixa").value;
	let TercFaixa = document.getElementById("TercFaixa").value;
	let QuatFaixa = document.getElementById("QuatFaixa").value;

	let concatenar = parseFloat(PrimFaixa + SegFaixa);
	let result = concatenar * TercFaixa;
	let tole1 = result * QuatFaixa;
	let tole2 = result - tole1;
	let tole3 = result + tole1;
	
	document.getElementById('result').innerHTML = result + ' ohms com tolerância mínima de ' + tole2 + ' ohms e máxima ' + tole3 + ' Ohms ';
}