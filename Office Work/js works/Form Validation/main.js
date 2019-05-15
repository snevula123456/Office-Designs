document.getElementById('name').addEventListener('blur',validateName);
document.getElementById('zipcode').addEventListener('blur',validateZip);
document.getElementById('email').addEventListener('blur',validateEmail);
document.getElementById('phone number').addEventListener('blur',validatePhone);

function validateName(){
    const name = document.getElementById('name');
    const re = /^[A-Za-z]{2,10}$/;
    if(re.test(name.value)){
        name.classList.add('is-invalid');
        /*alert('sucess');*/
    }else{
        name.classList.remove('is-invalid');
       /* alert('invalid');*/
    }
}

function validateZip(){
const zip = document.getElementById('zipcode');
const re = /^[0-9]{3}(-[0-9]{3})?$/;
    if(!re.test(zip.value)){
        zip.classList.add('is-invalid');
    }else{
        zip.classList.remove('is-invalid');
    }
}

function validateEmail(){
const email = document.getElementById('email');
const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(!re.test(email.value)){
    email.classList.add('is-invalid');
    }else {
        email.classList.remove('is-invalid');
    }
}

function validatePhone(){
    const phone = document.getElementById('phone number');
    const re = /^\d{10}$/;
    if(!re.test(phone.value)){
        phone.classList.add('is-invalid');
    }else{
        phone.classList.add('is-invalid');
    }

}