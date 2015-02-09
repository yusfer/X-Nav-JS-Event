
function changer (id, newValue) {
	var element = document.getElementById(id);
	element.innerHTML = newValue;
}

function modifyText() {
	var form = document.getElementById("formulario")
	var text = document.getElementById("texto")
	text.innerHTML = form.value
}

// add event listener to table
var el = document.getElementById("formulario");
el.addEventListener("input", modifyText)

