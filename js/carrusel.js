window.addEventListener ('load',intervaloCarrusel);
var i = 1;

function intervaloCarrusel(){
	setInterval('carrusel()',2500);
}

function stopInterval(){
	clearInterval(interval);
}

function carrusel(){
	if (i <= 6){
		document.getElementById('imageCarrusel').src ="../media/carrusel/foto" + i + ".jpg";
		i++;
	}else{
		i = 1;
		carrusel();
	}
}

function carruselNext(){
	i++;
	if(i > 7){
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
