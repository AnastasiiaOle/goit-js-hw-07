let inputVal = document.getElementById('validation-input');

let totalLenght = Number(inputVal.getAttribute('data-length'));

inputVal.oninput = function() {
  if (inputVal.value.length === totalLenght) {
    inputVal.classList.remove("invalid");
    inputVal.classList.add("valid");
  }
  else {
    inputVal.classList.remove("valid");
    inputVal.classList.add("invalid");
  
  }

};


