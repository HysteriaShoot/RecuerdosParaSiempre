window.addEventListener ('load',intervaloCarrusel);
var i = 1;

function intervaloCarrusel(){
	setInterval('carrusel()',2500);
}

function stopInterval(){
	clearInterval(interval);
}

function carrusel(){
	for (i = 1; i < 7; i++) { 
		document.getElementById('imageCarrusel').src ="../media/carrusel/foto" + i + ".jpg";
		i++;
	}
}

function carruselNext(){
	i++;
	if(i > 6){
		i = 1;
	}
	document.getElementById('imageCarrusel').src ="../media/carrusel/foto" + i + ".jpg";
}

function carruselPrev(){
	i--;
	if(i < 1){
		i = 6;
	}
	document.getElementById('imageCarrusel').src ="../media/carrusel/foto" + i + ".jpg";
}
