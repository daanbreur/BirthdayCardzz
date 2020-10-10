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
		document.getElementById( "resetPopup-bdanim" ).removeAttribute( "disabled" );
		document.getElementById( "channel-name" ).removeAttribute( "disabled" );
		document.getElementById( "run-bdanim" ).innerHTML = `<i class="fa fa-play"></i> Start Preview`;
	}
	else {
		settingsUpdateHandler();
		document.getElementById( "run-bdanim" ).classList.add( "btn-danger" );
		document.getElementById( "run-bdanim" ).classList.remove( "btn-success" );
		// document.getElementById( "export-bdanim" ).setAttribute( "disabled", true );
		document.getElementById( "share-bdanim" ).setAttribute( "disabled", true );
		document.getElementById( "reset-bdanim" ).setAttribute( "disabled", true );
		document.getElementById( "resetPopup-bdanim" ).setAttribute( "disabled", true );
		document.getElementById( "channel-name" ).setAttribute( "disabled", true );
		document.getElementById( "run-bdanim" ).innerHTML = `<i class="fa fa-stop"></i> Stop Preview`;
	}
	isPreviewRunning = !isPreviewRunning;
} );

function settingsUpdateHandler(evt) {
	var checkboxes = document.querySelectorAll('input[data-type="checkbox"]');
	for (var checkbox of checkboxes) {
		options[checkbox.getAttribute("data-varName")] = checkbox.checked;
	}
	var radios = document.querySelectorAll('input[data-type="radio"]');
	for (var radio of radios) {
		options[radio.value] = radio.checked;
	}
	var colors = document.querySelectorAll('input[data-type="color"]');
	for (var color of colors) {
		if (color.checked) {
			colorInput = color.parentElement.querySelector('input[type="color"]');
			options["cf-customColor"] = true
			options[colorInput.getAttribute("data-varName")] = colorInput.value;
		}
	}
	
	let data = `{ "fireworks": { "enabled": ${options["fw"]}, "heartOnly": ${options["fw-heart"]}, "noHeart": ${options["fw-no-heart"]} }, "confetti": { "enabled": ${options["cf"]}, "color": "${options["cf-color"]}", "customColor": ${options["cf-customColor"]} } }`
	console.log(options)
	console.log(JSON.parse(data))
	document.getElementById( "debug-bdanim" ).innerText = data;

	return data;
}

// document.getElementById( "" ).addEventListener( "click", ( ev ) => {

// } );

document.getElementById( "share-bdanim" ).addEventListener( "click", ( ev ) => {
  name='hey'
  window.open(`http://wa.me/?text=${encodeURIComponent(`Happy Birthday ${name} ! I have a gift for you: http://github.daanbreur.systems/card.html?options=${settingsUpdateHandler()}`)}`); // TODO: FINISH THIS URL!
} );

