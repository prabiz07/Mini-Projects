// UI Variables
const form = document.getElementById('form'),
      username = document.getElementById('username'),
      email = document.getElementById('email'),
      password = document.getElementById('password'),
      password2 = document.getElementById('password2');

// Event Listener on submit
form.addEventListener('submit', function(e){
    checkRequire([username, email, password, password2]);
    checkLength(username, 3, 20);
    checkLength(password, 6, 18);
    checkEmail(email);
    checkPasswordsMatch(password, password2);

    // Prevent Default
    e.preventDefault();
});

// Function checkRequire init
function checkRequire(inputArr){
    inputArr.forEach(input => {
        if(input.value === ''){
            showError(input, `${getRequiredField(input)} is required`);
        } else{
            showSuccess(input);
        }
    });
}

// Function checkLength init
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getRequiredField(input)} must be atleast ${min} character`);
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
        showError(input, `Please enter valid email`);
    }
}

// Function checkPasswordsMatch init
function checkPasswordsMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'Password does not match');
    } else{
        showSuccess(input2);
    }
}

// Function getRequiredField init
function getRequiredField(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Function showError
function showError(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

// Function showSuccess
function showSuccess(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control success';
    small.innerText = message;
}
