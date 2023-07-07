import './styles.css';

// yes, i am aware zipcodes don't change depending on the country.
// no, i don't want to change validation depending on country, this is already super boring.
const mail = document.getElementById('mail');
const country = document.getElementById('country');
const zip = document.getElementById('zip');
const pass = document.getElementById('pass');
const passconf = document.getElementById('passconf');
const form = document.getElementById('validatedForm');

function passwordConfirmation () {
  const password = pass.value;
  const confirmation = passconf.value;
  if(password === '' || confirmation === '' ){
    pass.setCustomValidity('field is empty');
    passconf.setCustomValidity('field is empty');
  }

  if(password === confirmation){
    pass.setCustomValidity('');
    passconf.setCustomValidity('');
    return true;
  }
  else{
    pass.setCustomValidity('passwords do not match');
    passconf.setCustomValidity('passwords do not match');
    return false;
  }
}

function checkEmail(){
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const emailValue = mail.value;
  if(emailPattern.value === '' ){
    pass.setCustomValidity('field is empty');
    passconf.setCustomValidity('field is empty');
  }
  
  if (emailPattern.test(emailValue)){
    mail.setCustomValidity('');
  }
  else{
    mail.setCustomValidity('emails format should be title@example.com');
  }
}

function checkZip(){
  const zipPattern = /^\d{5}(?:[-\s]\d{4})?$/;
  const zipValue = zip.value;

  if (zipPattern.test(zipValue)){
    zip.setCustomValidity('');
  }
  else{
    if(zipValue === ''){
      zip.setCustomValidity('empty!');
    }
    else{
      zip.setCustomValidity('zip format should be 12345 or 12345-6789');
    }
  }
}

form.addEventListener('submit', ()=>{
  if (mail.value !== '' && zip.value !== '' && pass.value !== '' && passconf.value !== ''){
    alert('high five!');
  }
  else{
    alert('Please fill all of the fields!');
  }
});


window.onload = () => {
  // const mail = document.getElementById('mail').onchange =
  // const country = document.getElementById('country').onchange =
  // const zip = document.getElementById('zip').onchange =
  const pass = document.getElementById('pass').onchange = passwordConfirmation;
  const passconf = document.getElementById('passconf').onchange = passwordConfirmation;
  const mail = document.getElementById('mail').onchange = checkEmail;
  const zip = document.getElementById('zip').onchange = checkZip;
};



