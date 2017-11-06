var buttonTweet = document.getElementById('btn');
	buttonTweet.addEventListener('click', function() {
	
	//tenemos que tomar el texto ingresado en el textarea
	var tweets = document.getElementById('tweets').value;
	//limpiar el textarea
	document.getElementById('tweets').value = '';

	//contenedor que está en el html
	var container = document.getElementById('container');

	//creamos el div que contiene cada comentario
	var newTweet = document.createElement('div');

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

	//Llamando al textarea
	var textArea = document.getElementsByTagName('textarea');

	//Evento que cambia el color del botón al ingresar caracteres
	textArea.addEventListener('input', function() {
		buttonTweet.classList.add('textTweet');
	})
	
})