var buttonTweet = document.getElementById('btn');
	buttonTweet.addEventListener('click', function() {
		var d = new Date();
	    var n = d.toLocaleTimeString();
	    var time = document.getElementById("time").innerHTML = n;

	/*//Fecha
	buttonTweet.addEventListener('click', function() {
	    var d = new Date();
	    var n = d.toLocaleTimeString();
	    document.getEle..., ,,mentById("time").innerHTML = n;
	});*/	                              

	//tenemos que tomar el texto ingresado en el textarea
	var tweetsTextArea = document.getElementById('tweets');
	var tweets = tweetsTextArea.value;
	
	//limpiar el textarea
	document.getElementById('tweets').value = '';

	//contenedor que está en el html
	var container = document.getElementById('commentDiv');

	//creamos el div que contiene cada comentario
	var newTweet = document.createElement('div');
	newTweet.className = "tweetText commentDivTweet";
    
    //Evento que cambia el color del botón al ingresar caracteres
	tweetsTextArea.addEventListener('input', function() {
		buttonTweet.classList.add('addTweet');
	});


	//nodo de texto del textarea
	var textNewTweet = document.createTextNode(tweets);

	//Pasamos elementos
	var contenedorElemento = document.createElement('p');
		contenedorElemento.appendChild(textNewTweet);
		newTweet.appendChild(contenedorElemento);

		container.appendChild(newTweet);	
		document.getElementById("counter").innerHTML = 140 
	
	var counter = initialCounter.innerHTML = 140;

})

/*Botón en proceso
var tweets = document.getElementById('tweets').value;

if (tweets.length == 0 || tweets == null) {
	document.getElementById("btn").disabled = true;
    btn.classList.add("disableBtn");
	} else {
		document.getElementById("btn").disabled = false;
		btn.classList.remove("disableBtn");
	}
*/

//Ajuste de tamaño automático
var textarea = document.getElementById('tweets');
var heightLimit = 200; /* Maximum height: 200px */

textarea.oninput = function() {
  textarea.style.height = ""; 
  textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";
};

//Contador
textarea.onkeydown = function(){
var initialCounter = document.getElementById("counter");
var counter = initialCounter.innerHTML = 140 - this.value.length;
	
	if (counter <= 20 && counter >= 11) {
   		initialCounter.classList.remove('basecolor');
   		initialCounter.classList.add('prewarning');
   	} else if (counter <= 10 && counter > 0) {
   		initialCounter.classList.remove('prewarning');
   		initialCounter.classList.add('warning');
   	} else if(counter > 20) {
   		initialCounter.classList.remove('prewarning');
   		initialCounter.classList.remove('warning');
   		initialCounter.classList.add('basecolor');
   	} 
};

