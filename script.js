const date = document.querySelectorAll('.paragraph');

const day = document.querySelector('.input1');
const month = document.querySelector('.input2');
const year = document.querySelector('.input3');

const day_p = document.querySelector('.day_p');
const month_p = document.querySelector('.month_p');
const year_p = document.querySelector('.year_p');

const error1 = document.querySelector('.error1');
const error2 = document.querySelector('.error2');
const error3 = document.querySelector('.error3');

const btn = document.querySelector('.btn');

let day_text = '';
let month_text = '';
let year_text = '';

day.addEventListener('blur', (e) => {
    day_text = parseInt(e.target.value);
});

month.addEventListener('blur', (e) => {
    month_text = parseInt(e.target.value); 
});

year.addEventListener('blur', (e) => {
    year_text = parseInt(e.target.value); 
});

function calculateAge(){
    if (isTrue1&&isTrue2&&isTrue3) {

        const birthDate = new Date(`${year_text}-${month_text}-${day_text}`);
        const currentDate = new Date();
        const ageInMilliseconds = currentDate - birthDate;

        const years = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
        const months = Math.floor((ageInMilliseconds % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
        const days = Math.floor((ageInMilliseconds % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

        const text_years = document.querySelector('.text_change1_p');
        const text_month = document.querySelector('.text_change2_p');
        const text_days = document.querySelector('.text_change3_p');

        

        text_years.textContent = years;
        text_month.textContent = months;
        text_days.textContent = days;
    } 
}

btn.addEventListener('click',()=>{
    day1();
    month1();
    year1();
    calculateAge();
})

let isTrue1 = false
let isTrue2 = false
let isTrue3 = false

function day1() {
    if (day_text === '') {
        day_p.style.color = '#FF5959';
        error1.style.opacity = '1';
        error1.textContent = 'This field is required';
        isTrue1 = false;
    } else if (day_text > 31 || day_text < 1) {
        day_p.style.color = '#FF5959';
        error1.style.opacity = '1';
        error1.textContent = 'Must be a valid day';
        isTrue1 = false;
    } else if (isNaN(day_text)) {
        day_p.style.color = '#FF5959';
        error1.style.opacity = '1';
        error1.textContent = 'Write only the numbers';
        isTrue1 = false;
    } else {
        day_p.style.color = '#716F6F';
        error1.style.opacity = '0';
        isTrue1 = true;
    }
}

function month1() {
    if (month_text === '') {
        month_p.style.color = '#FF5959';
        error2.style.opacity = '1';
        error2.textContent = 'This field is required';
        isTrue1 = false;
    } else if (month_text > 12 || month_text < 1) {
        month_p.style.color = '#FF5959';
        error2.style.opacity = '1';
        error2.textContent = 'Must be a valid day';
        isTrue2 = false;
    } else if (isNaN(month_text)) {
        month_p.style.color = '#FF5959';
        error2.style.opacity = '1';
        error2.textContent = 'Write only the numbers';
        isTrue2 = false;
    } else {
        month_p.style.color = '#716F6F';
        error2.style.opacity = '0';
        isTrue2 = true;
    }
}

let newDate = new Date().getFullYear();

function year1() {
    if (year_text > newDate) {
        year_p.style.color = '#FF5959';
        error3.style.opacity = '1';
        error3.textContent = 'Must be in the past';
        isTrue3 = false;
    } else if (year_text === '') {
        year_p.style.color = '#FF5959';
        error3.style.opacity = '1';
        error3.textContent = 'This field is required';
        isTrue3 = false;
    } else if (isNaN(year_text)) {
        year_p.style.color = '#FF5959';
        error3.style.opacity = '1';
        error3.textContent = 'Write only the numbers';
        isTrue3 = false;
    } else {
        year_p.style.color = '#716F6F';
        error3.style.opacity = '0';
        isTrue3 = true;
    }
}
