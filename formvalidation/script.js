
const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phone = document.getElementById("phone");
const dob = document.getElementById("dob");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const submitButton = document.getElementById("submitBtn");
submitButton.disabled = true;


form.addEventListener("input",(e)=>{
    e.preventDefault();
    validateName();
})

form.addEventListener("input",(e)=>{
    e.preventDefault();
    validateEmail();

})

form.addEventListener("input",(e)=>{
    e.preventDefault();
    validatePhone();
})

 form.addEventListener("input",(e)=>{
    e.preventDefault();
    validateDate();
 })

 form.addEventListener("input",(e)=>{
    e.preventDefault();
    validatePassword();
    ConPassword();
 })



form.addEventListener("input", isValid);

function isValid() {
    if (validateName() && validateEmail() && validatePhone() && validateDate() && validatePassword() && ConPassword() ) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

function validateName() {
    const nameValue = nameInput.value.trim();
    const nameError = document.getElementById('nameError');
    const nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;    
    if (nameValue === '' ) {
      nameError.textContent = 'Please enter a valid name (at least 3 characters).';
      nameInput.style.borderColor="red";
      return false; 
    }else if( nameValue.length < 3)
    {
        nameError.textContent = 'Please enter at least 3 characters.';
        nameInput.style.borderColor="red";
        return false; 
  }
  else if(!nameRegex.test(nameValue)){
    nameError.textContent = 'Please enter alphabets characters only .';
    nameInput.style.borderColor="red";
    return false;
  }
  else if(nameValue.length>25){
    nameError.textContent = 'Please enter a maximum of 25 characters only.';
    nameInput.style.borderColor="red";
    return false;
  }
  else{
    nameError.textContent = ''; 
    nameInput.style.borderColor="green";
    return true; 

  }
}

  function validateEmail() {
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailError = document.getElementById('emailError');

    if (emailValue === '' || !emailRegex.test(emailValue)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailInput.style.borderColor="red";
        return false; 
    } else if(emailValue.length>35){
        emailError.textContent = 'Please enter a maximum of 30 characters only.';
        emailInput.style.borderColor="red";
        return false; 
      }
    else {
        emailError.textContent = ''; 
        emailInput.style.borderColor="green";
        return true; 
      }
  }

  function validatePhone(){
    const phoneValue = phone.value.trim();
    const phoneRegex =/^(?=[6-9])[0-9]+$/;
    const phoneError = document.getElementById('phoneError');

    if(phoneValue ===''){
        phoneError.textContent= 'Please enter a valid phone number.';
        phone.style.borderColor="red";
        return false ;
    }else if(!phoneRegex.test(phoneValue)){
        phoneError.textContent= 'Invalid phone number.';
        phone.style.borderColor="red";
        return false ;
    }else if(phoneValue.length<10 ||phoneValue.length>10){
        phoneError.textContent='Phone number must have 10 numbers.';
        phone.style.borderColor="red";
        return false;
    }else{
        phoneError.textContent = ''; 
        phone.style.borderColor="green";
        return true; 
    }
  }

function validateDate(){
    const dateValue= new Date(dob.value);
    const currentDate = new Date();
    const dobError=  document.getElementById('dobError');

    if(dateValue>currentDate){
        dobError.textContent='The date is in the future.';
        dob.style.borderColor="red";
        return false;
}else{
    dobError.textContent = ''; 
    dob.style.borderColor="green";
    return true; 
}
}

function validatePassword(){
    const passwordValue =password.value.trim();
    const passError=document.getElementById('passwordError');
    const uppercaseRegex = /[A-Z]/g;
    const lowercaseRegex = /[a-z]/g;
    const numericRegex = /[0-9]/g;
    var specialCharacterRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;

    if (passwordValue === ''){
        passError.textContent= 'Please enter a valid password.';
        password.style.borderColor="red";
        return false;
    }else if(!specialCharacterRegex.test(passwordValue)){
        passError.textContent=' Password must have atleast one special character.';
        password.style.borderColor="red";
        return false;
    }else if(!uppercaseRegex.test(passwordValue)){
        passError.textContent='Password must have atleast one uppercase letter .';
        password.style.borderColor="red";
        return false;
    }else if(!lowercaseRegex.test(passwordValue)){
        passError.textContent=' Password must have atleast one lowercase letter.';
        password.style.borderColor="red";
        return false;
    }else if(!numericRegex.test(passwordValue)){
        passError.textContent=' Password must have atleast one number.';
        nameInput.style.borderColor="red";
        return false;
    }else if(passwordValue.length<8){
        passError.textContent='Password must be atleast 8 characters .';
        password.style.borderColor="red";
        return false;
    }else if(passwordValue.length>12){
        passError.textContent=' Password must be less than 12 characters.';
        password.style.borderColor="red";
        return false;
    }else{
        passError.textContent = ''; 
        password.style.borderColor="green";
        return true; 
    }
}

function ConPassword(){
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();
    const passError= document.getElementById('confirmPasswordError');

    if(passwordValue!== confirmPasswordValue){
       passError.textContent="Passwords do not match!";
       confirmPassword.style.borderColor="red";
       return false;
    }else{
        passError.textContent = ''; 
        confirmPassword.style.borderColor="green";
        return true;
}
}

const toggleButton = document.querySelector('#toggle-password-button');
const passwordField = document.querySelector('#password');
const closedEye = document.querySelector('#closed-eye');
const openEye = document.querySelector('#open-eye');
const toggleButton1 = document.querySelector('#toggle-conpassword-button');
const ConpasswordField = document.querySelector('#confirmPassword');
const closedEye1 = document.querySelector('#closed-eye1');
const openEye1 = document.querySelector('#open-eye1');
let isPasswordHidden = true;
let isConPasswordHidden = true;

toggleButton.addEventListener('click', function() {
 if (isPasswordHidden) {
 passwordField.type = 'text';
 openEye.classList.remove('hide');
 openEye.classList.add('show');
 closedEye.classList.add('hide');
 closedEye.classList.remove('show');
 } else {
 passwordField.type = 'password';
 closedEye.classList.remove('hide');
 closedEye.classList.add('show');
 openEye.classList.add('hide');
 openEye.classList.remove('show');
 }
 isPasswordHidden = !isPasswordHidden;
});

toggleButton1.addEventListener('click', function() {
    if (isConPasswordHidden) {
    ConpasswordField.type = 'text';
    openEye1.classList.remove('hide');
    openEye1.classList.add('show');
    closedEye1.classList.add('hide');
    closedEye1.classList.remove('show');
    } else {
    ConpasswordField.type = 'password';
    closedEye1.classList.remove('hide');
    closedEye1.classList.add('show');
    openEye1.classList.add('hide');
    openEye1.classList.remove('show');
    }
    isConPasswordHidden = !isConPasswordHidden;
   });


   function toggleReadMore() {
    const hiddenContent = document.querySelector('.hidden-content');
    const readMoreBtn = document.querySelector('.read-more-btn');
    

    if (hiddenContent.style.display === 'none') {
      hiddenContent.style.display = 'inline';
      readMoreBtn.textContent = 'Read Less';
    } else {
      hiddenContent.style.display = 'none';
      readMoreBtn.textContent = 'Read More';
    }
  }