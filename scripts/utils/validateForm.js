import { setError, setSuccess } from "./validationFeedback.js";

const full_name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');


const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function validateFields(){
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
    } else if (emailVal.length > 80 ) {
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