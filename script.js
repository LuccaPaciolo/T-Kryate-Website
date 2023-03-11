const nav = document.querySelector('nav');
const close = document.querySelector('.close');
const burger = document.querySelector('.burger');
const brainstorming = document.querySelector('.brainstorming');
const approaching = document.querySelector('.approaching');
const adjusting = document.querySelector('.adjusting');
const brainPara = document.querySelector('.brain-para');
const approachPara = document.querySelector('.approach-para');
const adjustPara = document.querySelector('.adjust-para');


burger.addEventListener ("click", () => {
    nav.classList.add('show-nav');
});

close.addEventListener ("click", () => {
    nav.classList.remove('show-nav');
});

brainstorming.addEventListener('mouseover', () => {
    brainPara.classList.add('add-brain-para');
});
brainstorming.addEventListener('mouseout', () => {
    brainPara.classList.remove('add-brain-para');
});

approaching.addEventListener('mouseover', () => {
    approachPara.classList.add('add-approach-para');
});
approaching.addEventListener('mouseout', () => {
    approachPara.classList.remove('add-approach-para');
});

adjusting.addEventListener('mouseover', () => {
    adjustPara.classList.add('add-adjust-para');
});
adjusting.addEventListener('mouseout', () => {
    adjustPara.classList.remove('add-adjust-para');
});

const nameEl = document.getElementById('name');
const emailEl = document.getElementById('email');
const subjectEl = document.getElementById('subject');
const messageEl = document.getElementById('message');
const nameError = document.getElementById('error-name');
const emailError = document.getElementById('error-email');
const subjectError = document.getElementById('error-subject');
const messageError = document.getElementById('error-message');

nameEl.minlength = 5;

const nameMessage = () => {
    if (nameEl.validity.valueMissing) {
        nameError.textContent = "Please fill in the space";
    }
    else if (nameEl.validity.tooShort) {
        nameError.textContent = `Please input should not be less than ${nameEl.minlength}`
    }
}

nameEl.addEventListener('input', ()=> {
    if (nameEl.validity.valid) {
        nameError.textContent = '';
    }
    else {
        nameMessage()
    }
})

const emailMessage = () => {
    if (emailEl.validity.valueMissing) {
        emailError.textContent = "Please fill in the space";
    }
    
    else if (emailEl.validity.typeMismatch) {
        emailError.textContent = 'Please type in a valid email address';
    }
}

emailEl.addEventListener('input', ()=> {
    if (emailEl.validity.valid) {
        emailError.textContent = '';
    }
    else {
        emailMessage();
    }
    
})

subjectEl.addEventListener('input', ()=> {
    if(subjectEl.validity.valid) {
        subjectError.textContent = ''
    }
    else
    if (subjectEl.validity.valueMissing) {
        subjectError.textContent = "Please fill in the space";
    }
}) 

messageEl.addEventListener('input', ()=> {
    if(messageEl.validity.valid) {
        subjectError.textContent = ''
    }
    else
    if (messageEl.validity.valueMissing) {
        messageError.textContent = "Please fill in the space";
    }
}) 

