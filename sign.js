const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

function checkInputs() {
    //get values from the input
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (emailValue === "") {
        setErrorFor(email, "Email cannot be empty");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Email is invalid");
    } else {
        setSuccessFor(email);
    }


    if (passwordValue === "") {
        setErrorFor(password, "Password cannot be empty");
    } else {
        setSuccessFor(password);
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