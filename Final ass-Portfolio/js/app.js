/*
Name: Anna Dmitrienko
Student ID: 120412218
Date: August 19, 2022
*/


// I. FORM VALIDATION
let messages = [];
const form = document.getElementById('contact-form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    messages = [];

    // declare validations
    validName();
    validEmail();
    validAddress();
    validCity();
    validPostalCode();
    validMessage();



    // Displaying the errors
    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerHTML = `
        <h3>Incorrect values:</h3>
        <pre>${messages.join('\r\n')}</pre>
        `;
    }
})

form.addEventListener('reset', (e) => {
    messages = [];
    errorElement.innerHTML = '';
})

// Validation for the name 
function validName() {
    //
    const name = document.getElementById('name');
    if (isNull(name, 'name')) {
        let validRegex = /^([a-zA-Z]{1,}\s'?-?[a-zA-Z]{1,})/;
        if (!(name.value.match(validRegex))) {
            messages.push("***invalid name***");
        }
    }  
}

// Validation for email
function validEmail() {
    const email = document.getElementById('email');
    if (isNull(email, 'email')) {
        let validRegexE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!(email.value.match(validRegexE))) {
            messages.push("***invalid email address***");
        }
    }    
}

// Validation for address
function validAddress() {
    const address = document.getElementById('address');
    if (isNull(address, 'address')) {
        if (address.value.length < 5){
            messages.push("***invalid address***");
        }
    }
}

// Validation for city
function validCity() {
    const city = document.getElementById('city');
    if(isNull(city, 'city')) {
        if (city.value.length < 2) {
            messages.push("***invalid city***");
        }
    }
}

// Validation for postal code
function validPostalCode() {
    const postalCode = document.getElementById('postal code');
    if (isNull(postalCode, 'postal code')) {
        let validRegexP = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
        if (!(postalCode.value.match(validRegexP))) {
            messages.push("***invalid postal code***");
        }
    }
}




// Validation for message
function validMessage() {
    const message = document.getElementById('message');
    if (isNull(message, 'message')) {
        if (message.value.length < 30) {
            messages.push("***please provide a longer message (min 30 characters)***");
        }
    }
}


// check if value is empty
function isNull(element, Name) {
    result = true;
    if (element.value.length === 0 || element.value == null) {
        messages.push(`- ${Name} is required`);
        result = false;
    }
    return result;
}



//II. HIRING BOX - REVEAL 
const box = document.getElementById('rate');

function handleRadioClick() {
  if (document.getElementById('hiring').checked) {
    box.style.display = 'block';
  } else {
    box.style.display = 'none';
  }
}

const radioButtons = document.querySelectorAll('input[name="purpose"]');
radioButtons.forEach(radio => {
  radio.addEventListener('click', handleRadioClick);
});

//III. DEFAULT TO TODAY'S DATE

var date = new Date();

var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

var today = year + "-" + month + "-" + day;       
document.getElementById("date").value = today;
