const inputRef = document.querySelector('input');
const spanRef = document.getElementById('name-output');


inputRef.addEventListener('input', event => {
    if(inputRef.value === '') {
        spanRef.textContent = 'незнакомец';
    }
    else {spanRef.textContent = inputRef.value};
 
}
);