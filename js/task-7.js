let inputRef = document.getElementById("font-size-control");

let text = document.getElementById("text");

inputRef.oninput = function() {
  text.style.fontSize = inputRef.value + "px";
};