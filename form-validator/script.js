// UI Variables
const form = document.getElementById('form'),
      username = document.getElementById('username'),
      email = document.getElementById('email'),
      password = document.getElementById('password'),
      password2 = document.getElementById('password2');

// Event listener for form submit
form.addEventListener('submit', function(e){
    checkRequire([username, email, password, password2]);
    checkLength(username, 3, 25);
    checkEmail(email);
    checkLength(password, 6, 20);
    checkPasswordsMatch(password, password2);

    // Prevent Default
    e.preventDefault();
});

// Function CheckRequire init
function checkRequire(inputArr){
    inputArr.forEach(input => {
        if(input.value.trim() === ''){
            showError(input, `${getRequiredField(input)} is required.`);
        } else{
            showSuccess(input);
        }
    });
}

// Function checkLength init
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getRequiredField(input)} must be atleast ${min} character.`);
    } else if(input.value.length > max){
        showError(input, `${getRequiredField(input)} must not exceed ${max} character`);
    } else{
        showSuccess(input);
    }
}

// Function checkEmail init
function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    } else{
        showError(input, 'Invalid email address');
    }
}

// Function checkPasswordsMatch init
function checkPasswordsMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'Passwords does not match');
    } 
}

// Function getRequiredField init
function getRequiredField(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Function showError init
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const info = formControl.querySelector('small');
    info.innerText = message;
}

// Function showSuccess init
function showSuccess(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    const info = formControl.querySelector('small');
    info.innerText = message;
}