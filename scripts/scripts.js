window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("preloader").classList.add("hidden");
        setTimeout(() => {
            document.body.removeChild(document.getElementById("preloader"));
        }, 200)
    }, 300);
});

Tu.tScroll({
    't-element': '.fadeUp',
    't-duration': 1
})

Tu.tScroll({
    't-element': '.fadeLeft',
    't-duration': 1
})

Tu.tScroll({
    't-element': '.fadeRight',
    't-duration': 1
})

Tu.tScroll({
    't-element': '.fadeDown',
    't-duration': 1
})

const form = document.getElementById("contact_form");

if(typeof grecaptcha === 'undefined') {
    grecaptcha = {};
  }
  grecaptcha.ready = function(cb){
    if(typeof grecaptcha === 'undefined') {
      // window.__grecaptcha_cfg is a global variable that stores reCAPTCHA's
      // configuration. By default, any functions listed in its 'fns' property
      // are automatically executed when reCAPTCHA loads.
      const c = '___grecaptcha_cfg';
      window[c] = window[c] || {};
      (window[c]['fns'] = window[c]['fns']||[]).push(cb);
    } else {
      cb();
    }
  }




form.addEventListener('submit', e => {
    e.preventDefault();

    let response = grecaptcha.getResponse();

    if (response.length == 0) {
        swal({
            title: "Error",
            text: "Please verify that you are human",
            icon: "error",
        });
    } else {
        if (validateFields()) {
            axios({
                url: 'https://formspree.io/f/xayvvowz',
                method: 'post',
                headers: {
                    'Accept': 'application/json'
                },
                data: {
                    name: document.getElementById('name').value.trim(),
                    email: document.getElementById('email').value.trim(),
                    subject: document.getElementById('subject').value.trim(),
                    message: document.getElementById('message').value.trim()
                }
            }).then(data => {
                swal({
                    title: "Good job!",
                    text: "Message succesfully sent.",
                    icon: "success",
                })

                console.log(data)
            })
                .catch((error) => {
                    swal({
                        title: "Something went wrong...",
                        text: error,
                        icon: "error",
                    });
                    console.log(error);
                });
        }
    }
})


const full_name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');


const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateFields() {
    let isValid = true;
    let nameVal = full_name.value.trim();
    let emailVal = email.value.trim();
    let subjectVal = subject.value.trim();
    let messageVal = message.value.trim();

    if (nameVal === '') {
        setError(full_name, 'Name is required.');
        isValid = false;
    } else if (nameVal.length > 20 || nameVal.length < 4) {
        setError(full_name, 'Name must be between 4 and 20 characters');
        isValid = false;
    } else {
        setSuccess(full_name);
    }

    if (emailVal === '') {
        setError(email, 'Email is required');
        isValid = false;
    } else if (emailVal.length > 80) {
        setError(email, 'Email can only be 80 characters long.');
        isValid = false;
    } else if (!isValidEmail(emailVal)) {
        setError(email, 'Provide a valid email address');
        isValid = false;
    } else {
        setSuccess(email);
    }

    if (subjectVal === '') {
        setError(subject, 'Subject is required.');
        isValid = false;
    } else if (subjectVal.length > 50 || subjectVal.length < 4) {
        setError(subject, 'Subject must be between 4 and 50 characters');
        isValid = false;
    } else {
        setSuccess(subject);
    }


    if (messageVal === '') {
        setError(message, 'Message is required.');
        isValid = false;
    } else if (messageVal.length > 300 || messageVal.length < 10) {
        setError(message, 'Message must be between 10 and 300 characters');
        isValid = false;
    } else {
        setSuccess(message);
    }

    return isValid;
}


function setError(element, message) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

function setSuccess(element) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

function showSuccessMessageAndRedirect(message, redirect) {
    swal({
        title: "Good job!",
        text: message,
        icon: "success",
    })
}

function showErrorMessage(message) {
    swal({
        title: "Something went wrong...",
        text: message,
        icon: "error",
    });
}