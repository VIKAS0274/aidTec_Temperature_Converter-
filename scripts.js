function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelcius").innerHTML = (valNum - 32) / 1.8;
    document.getElementById("outputKelvin").innerHTML = (valNum + 459.67) * 5/9;
  }

  function temperatureConverter1(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFarenheit").innerHTML = (valNum * 9/5) + 32;
    document.getElementById("outputKelvin1").innerHTML = (valNum + 273.15);
  }

  function temperatureConverter2(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFarenheit1").innerHTML = (valNum - 273.15) * (9/5) + 32;
    document.getElementById("outputCelcius1").innerHTML = (valNum - 273.15);
  }
