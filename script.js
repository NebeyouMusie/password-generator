const passwordBox = document.getElementById('password');
const passwordLengthBox = document.querySelector('.password-length');
const text = document.querySelector('.text');
let length ;
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '@#$%^&*()_+~|}{[]></-=';

const allChars = upperCase + lowerCase + numbers + symbols;

function createPassword(){
  let password = '';
  length = passwordLengthBox.value;
  if(length < 4 ){
    text.innerHTML = 'Can generate no less than 4 characters please try again';
    passwordBox.value = '';
  }if(length == ''){
    text.innerHTML = 'Please insert the length first';
    passwordBox.value = '';
  }else if(length >= 4){
    text.innerHTML = '';
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(length > password.length){
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
  }
}

function copyPassword(){
  passwordBox.select();
  document.execCommand('copy');
}

document.querySelector('button').addEventListener('click', () => {
  createPassword();
});

document.querySelector('img').addEventListener('click', () => {
  copyPassword();
});