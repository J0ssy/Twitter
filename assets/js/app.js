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

	/*//validar que textarea tenga un mensaje
	if (tweets.length == 0 || tweets == null) {
		document.getElementById('btn').disabled 
	} */

	//nodo de texto del textarea
	var textNewTweet = document.createTextNode(tweets);

	//Pasamos elementos
	var contenedorElemento = document.createElement('p');
		contenedorElemento.appendChild(textNewTweet);
		newTweet.appendChild(contenedorElemento);

		container.appendChild(newTweet);	
	
	var textarea = document.getElementById('tweets');
		textarea.onkeydown = function(){

  	var initialLimit = document.getElementById("counter");
  		initialLimit.innerHTML = 140 - this.value.length;
 
   };
	
})