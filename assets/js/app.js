var buttonTweet = document.getElementById('btn');
	buttonTweet.addEventListener('click', function() {
	
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

	//validar que textarea tenga un mensaje
	if (tweets.length == 0 || tweets == null) {
		alert('Debes ingresar un mensaje');
		return false;
	} 

	//nodo de texto del textarea
	var textNewTweet = document.createTextNode(tweets);

	//Pasamos elementos
	var contenedorElemento = document.createElement('p');
		contenedorElemento.appendChild(textNewTweet);
		newTweet.appendChild(contenedorElemento);

		container.appendChild(newTweet);	

	
	
})