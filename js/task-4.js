const incrementRef = document.querySelector("[data-action='increment']");
const decrementRef = document.querySelector("[data-action='decrement']");
const span = document.querySelector("#value");
  
  let counterValue = 0;
  const increment = () => {
    counterValue += 1;
    span.textContent = counterValue;
  };
  
  const decrement = () => {
    counterValue -= 1;
    span.textContent = counterValue;
  };
  
  incrementRef.addEventListener("click", increment);
  decrementRef.addEventListener("click", decrement);