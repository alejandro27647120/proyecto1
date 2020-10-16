var btnAbrirPopup = document.getElementById('btn-abrir-modal'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});


 function reloj() {
	hactual = new Date()
	hora = hactual.getHours();
	minuto = hactual.getMinutes();
	segundo = hactual.getSeconds();
	document.getElementsById('mhora').innerHTML = hours+ ":" +minuto+ ":" +segundos;
 }