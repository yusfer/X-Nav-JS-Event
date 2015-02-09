
function changer (id, newValue) {
	var element = document.getElementById(id);
	element.innerHTML = newValue;
}

function modifyColor() {
	var form = document.getElementById("formulario")
	var element = document.getElementById("caja")
	var aux = 'background-color:#' + form.value
	element.attributes[0].nodeValue = aux
	console.log(aux)
	console.log(element.attributes[0].nodeValue)
}

// add event listener to table
var el = document.getElementById("formulario");
el.addEventListener("input", modifyColor)

