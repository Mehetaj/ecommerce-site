document.getElementById('btn-login-submit').addEventListener('click',function(){
    const emailField = document.getElementById('email-field');
    const email = emailField.value;

    const passwordField = document.getElementById('pass-field');
    const password = passwordField.value;

    if (email === "puck@gmail.com" && password === 111) {
        console.log('You are successfully Login');
    } else{
        alert('tui moira jah')
    }
})