// step -1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
//step-2: get the email address inside the email input field
//always remember to use .value to get text from an input field
const emailField =document.getElementById('userEmail');
const email = emailField.value;
// console.log(email);
//step-3:get password
//3.a: set id on the html element
//3.b: get the element
//3.c: get the value from the element
const passwordField = document.getElementById('userPassword');
const password= passwordField.value;
// console.log(password);
//DANGER: DO NOT VERIFY email & password on the client side
if(email ==='sontan@baap.com'&& password=== 'sontan '){
    console.log('valid user');
    window.location.href='bank.html'
}
else{
    alert('invaild user!!');
}
})