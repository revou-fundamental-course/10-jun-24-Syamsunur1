document
  .getElementById("temperature-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const temperature = parseFloat(
      document.getElementById("temperature").value
    );
    const unit = document.getElementById("unit").value;
    let convertedTemperature;
    let resultText = "";

    if (unit === "celsius") {
      convertedTemperature = (temperature * 9) / 5 + 32;
      resultText = `${temperature}° Celsius = ${convertedTemperature.toFixed(
        2
      )}° Fahrenheit`;
    } else if (unit === "fahrenheit") {
      convertedTemperature = ((temperature - 32) * 5) / 9;
      resultText = `${temperature}° Fahrenheit = ${convertedTemperature.toFixed(
        2
      )}° Celsius`;
    }

    document.getElementById("converted-temperature").innerText = resultText;
  });
