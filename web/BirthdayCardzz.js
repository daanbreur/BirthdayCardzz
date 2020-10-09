window.onload = function() {
	var toggler = document.getElementsByClassName("toggle");
	var i;
	
	for (i = 0; i < toggler.length; i++) {
		toggler[i].addEventListener("click", function() {
			this.parentElement.parentElement.querySelector(".nested").classList.toggle("active");
		});
	}	
}

let options = {}
let isPreviewRunning = false;
document.getElementById( "run-bdanim" ).addEventListener( "click", ( ev ) => {
	if( isPreviewRunning ) {
		document.getElementById( "run-bdanim" ).classList.add( "btn-success" );
		document.getElementById( "run-bdanim" ).classList.remove( "btn-danger" );
		// document.getElementById( "export-bdanim" ).removeAttribute( "disabled" );
		document.getElementById( "share-bdanim" ).removeAttribute( "disabled" );
		document.getElementById( "reset-bdanim" ).removeAttribute( "disabled" );
		document.getElementById( "channel-name" ).removeAttribute( "disabled" );
		document.getElementById( "run-bdanim" ).innerHTML = `<i class="fa fa-play"></i> Start Preview`;
	}
	else {
		document.getElementById( "run-bdanim" ).classList.add( "btn-danger" );
		document.getElementById( "run-bdanim" ).classList.remove( "btn-success" );
		// document.getElementById( "export-bdanim" ).setAttribute( "disabled", true );
		document.getElementById( "share-bdanim" ).setAttribute( "disabled", true );
		document.getElementById( "reset-bdanim" ).setAttribute( "disabled", true );
		document.getElementById( "channel-name" ).setAttribute( "disabled", true );
		document.getElementById( "run-bdanim" ).innerHTML = `<i class="fa fa-stop"></i> Stop Preview`;
	}
	isPreviewRunning = !isPreviewRunning;
} );

function settingsUpdateHandler(params) {
	var checkboxes = document.querySelectorAll('input[type="checkbox"]');
	for (var checkbox of checkboxes) {

		options[checkbox.getAttribute("data-varName")] = checkbox.checked

	}
	console.log(options)
	let data = `\{ fireworks: \{ "enabled": ${options["fw"]}, "heartOnly": ${options["fw-heart"]} \}, confetti: \{ "enabled": ${options["cf"]}\} \}`
	document.getElementById( "debug-bdanim" ).innerText = data
}

// document.getElementById( "" ).addEventListener( "click", ( ev ) => {

// } );

document.getElementById( "share-bdanim" ).addEventListener( "click", ( ev ) => {
  name='hey'
  window.open(`http://wa.me/?text=${encodeURIComponent(`Happy Birthday ${name} 🎉🎉 I have a gift for you: http://github.daanbreur.systems/card.html?`)}`); // TODO: FINISH THIS URL!
} );

// document.getElementById( "" ).addEventListener( "click", ( ev ) => {
	
// } );



