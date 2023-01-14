const form = document.getElementById("form");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const address = document.getElementById("adr");
const cardname = document.getElementById("cname");
const cardnumber = document.getElementById("ccnum");
const expyear = document.getElementById("expyear");
const cardverification = document.getElementById("cvv");

function checkInputs() {
    //get values from the input
    const fullnameValue = fullname.value.trim();
    const emailValue = email.value.trim();
    const addressValue = address.value.trim();
    const cardnameValue = cardname.value.trim();
    const cardnumberValue = cardnumber.value.trim();
    const expyearValue = expyear.value.trim();
    const cardverificationValue = cardverification.value.trim();


    if (fullnameValue === "") {
        //show error
        //add error class
        setErrorFor(fullname, "Username cannot be empty");
    } else {
        //add success class
        setSuccessFor(fullname);
    }

    if (emailValue === "") {
        setErrorFor(email, "Email cannot be empty");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Email is invalid");
    } else {
        setSuccessFor(email);
    }


    if (addressValue === "") {
        setErrorFor(address, "Password cannot be empty");
    } else {
        setSuccessFor(address);
    }


    if (cardnameValue === "") {
        setErrorFor(cardname, "Password cannot be empty");
    } else {
        setSuccessFor(cardname);
    }
    
    
    if (cardnumberValue === "") {
        setErrorFor(cardnumber, "Password cannot be empty");
    } else {
        setSuccessFor(cardnumber);
    }

    if (expyearValue === "") {
        setErrorFor(expyear, "Password cannot be empty");
    } else {
        setSuccessFor(expyear);
    }

    if (cardverificationValue === "") {
        setErrorFor(cardverification, "Password cannot be empty");
    } else {
        setSuccessFor(cardverification);
    }
}


// ------------X--------------

function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control div

    const small = formControl.querySelector("small");

    //add error message for the small tag
    small.innerText = message;

    //add error class
    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement; // .form-control div

    //add error class
    formControl.className = "form-control success";
}

// -------------X-------------


form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});

// ------------X----------
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}