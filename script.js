let input = document.getElementById('input');
let convert = document.getElementById('convert');
let change = document.getElementById('change');
let result = document.getElementById('result');
let reset = document.getElementById('reset');

let heading = document.querySelector('.heading');
let inputState = document.querySelector('.input-group-text span');
let ourValue = document.querySelector('.card-title span');
let ourValueState = document.querySelector('.card-title i');
let convertedValue = document.querySelector('.card-text');

let convertingState = 1 // 1 return C => F && 2 return F to C

convert.addEventListener('click', ()=> {

    let inputValue = parseInt(input.value);

    if (isNaN(inputValue)) {
        alert('لطفا فقط عدد وارد کنبد')
    }else {
        if (convertingState === 1) {
            result.style.display = 'block';
            ourValue.innerHTML = input.value;
            ourValueState.innerHTML = "C";
            convertedValue.innerHTML = "= "+((inputValue*9/5)+32)+" <sup>o</sup>F";
            input.value = ''
        }else {
            result.style.display = 'block';
            ourValue.innerHTML = input.value;
            ourValueState.innerHTML = "F";
            convertedValue.innerHTML = "= "+Math.floor(((inputValue-32)*5/9))+" <sup>o</sup>C";
            input.value = ''
        }
    }
    

});

change.addEventListener('click', ()=> {

    if (convertingState === 1) {
        convertingState = 2;
        result.style.display = 'none';
    }else {
        convertingState = 1;
        result.style.display = 'none';
    }

    if (convertingState == 1) {
        console.log('c to f');
        heading.innerHTML = "Convert Celsius to Fahrenheit";
        inputState.innerHTML = "C";
    }else {
        console.log('f to c');
        heading.innerHTML = "Convert Fahrenheit to Celsius";
        inputState.innerHTML = "F";
    }

});

reset.addEventListener('click', ()=> {

    input.value = '';
    result.style.display = 'none';
    convertingState = 1;
    heading.innerHTML = "Convert Celsius to Fahrenheit";
    inputState.innerHTML = "C";

})

// validation