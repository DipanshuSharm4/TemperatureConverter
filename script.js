function celsiusToFahrenheit(celsius) {
	var fahrenheit = (celsius * 1.8) + 32;
	return fahrenheit.toFixed(2);
}

function fahrenheitToCelsius(fahrenheit) {
	var celsius = (fahrenheit - 32) / 1.8;
	return celsius.toFixed(2);
}

document.forms[0].addEventListener("submit", function(event) {
	event.preventDefault();
	var celsius = parseFloat(document.forms[0].elements.celsius.value);
	var result = document.getElementById("celsius-to-fahrenheit");
	result.innerHTML = celsius + "°C = " + celsiusToFahrenheit(celsius) + "°F";
});

document.forms[1].addEventListener("submit", function(event) {
	event.preventDefault();
	var fahrenheit = parseFloat(document.forms[1].elements.fahrenheit.value);
	var result = document.getElementById("fahrenheit-to-celsius");
	result.innerHTML = fahrenheit + "°F = " + fahrenheitToCelsius(fahrenheit) + "°C";
});
