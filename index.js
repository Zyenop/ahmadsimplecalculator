
    let display= document.getElementById('display');

    function buttonClicked(value) {
      display.classList.add("inputing");
      display.value += value;
    }

    function deleteInput() {
      let displayValue = display.value;
      const displayValueString = displayValue.toString();
      displayValueString.slice(0, -1);
      displayValue = displayValueString.slice(0, -1);
      display.value = displayValue;
      if (displayValue == "") {
        display.classList.remove("inputing");
      }
    }

    function clearDisplay() {
      display.value = "";
      const displayValue = display.value
      if (displayValue == "") {
        display.classList.remove("inputing");
      }
    }

    function calculate() {
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = 'Input is invalid'
      }
    }