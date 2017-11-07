//Variables globales
var buttonTweet = document.getElementById('btn');
var textarea = document.getElementById('tweets');
var initialCounter = document.getElementById("counter");
var heightLimit = 200;

//Evento de click para generar nuevo tweet
buttonTweet.addEventListener('click', function() {
	//Hora del tweet
	var d = new Date();
	var n = d.toLocaleTimeString();

	//Tenemos que tomar el texto ingresado en el textarea
	var tweets = textarea.value;
	
	//Limpiar el textarea
	textarea.value = '';

	//Deshabilitar el botón y el textarea
	buttonTweet.disabled = true;
	buttonTweet.classList.add("disableBtn");
	textarea.classList.add('disabled');

	//Contenedor que está en el html
	var container = document.getElementById('commentDiv');

	//Creamos el div que contiene cada tweet
	var newTweet = document.createElement('div');
	newTweet.className = "tweetText commentDivTweet";

	//Nodo de texto del textarea
	var textNewTweet = document.createTextNode(n + ' | ' + tweets); //Agregando hora + tweet

	//Pasamos elementos
	var contenedorElemento = document.createElement('p');
	contenedorElemento.appendChild(textNewTweet);
	newTweet.appendChild(contenedorElemento);

	container.appendChild(newTweet);
	
	//Reseteando contador
	initialCounter.innerHTML = 140;

});

//Desactivar botón y border del textarea
function disableTweet() {
	var tweets = document.getElementById('tweets').value;

	if (tweets.length == 0 || tweets == null || tweets.length > 140) {
		buttonTweet.disabled = true;
		buttonTweet.classList.add("disableBtn");
		textarea.classList.add('disabled');
	} else {
		buttonTweet.disabled = false;
		buttonTweet.classList.remove("disableBtn");
		textarea.classList.remove('disabled');
	}
}

//Ajuste de tamaño automático
function textareaResize() {
  textarea.style.height = ""; 
  textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";
};

//Contador de caracteres
function tweetCounter() {
	var textCount = textarea.value.length;
	var counter = initialCounter.innerHTML = 140 - textCount;

	// Cambiar colores del contador
	if (textCount >= 120 && textCount <= 130) {
		initialCounter.classList.remove('basecolor', 'warning');
		initialCounter.classList.add('prewarning');
	} else if (textCount >= 130) {
		initialCounter.classList.remove('basecolor', 'prewarning');
		initialCounter.classList.add('warning');
	} else {
		initialCounter.classList.remove('prewarning', 'warning');
		initialCounter.classList.add('basecolor');
	}
}

//Llamando a las funciones desactivar, contador y redimensionar textarea
textarea.addEventListener('input', function() {
	disableTweet();
	tweetCounter();
	textareaResize();
});