function max() {
	var a = parseInt(document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);
    var c = parseInt(document.getElementById("n3").value);

    var verificar = Math.max(a, b, c);

	alert(verificar);
}