function openLight(n){ //traemos el numero y lo pasamos al enlace, jejejejeje, tres horas para esto

	document.getElementById("lightboxPhoto").src=document.getElementById(n).src;
	document.getElementById("lightbox").style.visibility = "visible";
	document.getElementById("boton").style.visibility = "visible";
	document.getElementById("iconos").style.visibility = "hidden";
}

function closeLight(){ //ponemos el enlace en blanco para que desaparezca
	document.getElementById("lightboxPhoto").src="";
	document.getElementById("lightbox").style.visibility = "hidden";
	document.getElementById("boton").style.visibility = "hidden";
	document.getElementById("iconos").style.visibility = "visible";
}
