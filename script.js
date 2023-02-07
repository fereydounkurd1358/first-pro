let input = document.getElementById('input');
let convert = document.getElementById('convert');
let result = document.getElementById('result');
let ourValue = document.querySelector('.card-title span');
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
    


})

// validation