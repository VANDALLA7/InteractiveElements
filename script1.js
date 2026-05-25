const menu = document.querySelector('.menu');
const burgerBtn = document.querySelector('.burger')

burgerBtn.addEventListener('click', ()=> {
    menu.classList.toggle('menu--open');
});


const accordeonQuestions = document.querySelectorAll('.accordeon__question');

accordeonQuestions.forEach(accordeonQuestion => {
    accordeonQuestion.addEventListener('click', function() {
        
        const clickedAnswer = accordeonQuestion.parentElement.querySelector('.accordeon__answer');

        accordeonQuestion.classList.toggle('accordeon__question--active');
        clickedAnswer.classList.toggle('accordeon__answer--visible');

        if (clickedAnswer.classList.contains('accordeon__answer--visible')) {
            clickedAnswer.style.maxHeight = clickedAnswer.scrollHeight + 'px';
        } else {
            clickedAnswer.style.maxHeight = null; 
        }
    });
});

window.addEventListener('DOMContentLoaded', () => {
    if (accordeonQuestions.length > 0) {
        const firstQuestion = accordeonQuestions[0];
        const firstAnswer = firstQuestion.parentElement.querySelector('.accordeon__answer');

        firstQuestion.classList.add('accordeon__question--active');
        firstAnswer.classList.add('accordeon__answer--visible');
        firstAnswer.style.maxHeight = firstAnswer.scrollHeight + 'px';
    }
});


const tabLinks = document.querySelectorAll('.tablinks');
const tabContents = document.querySelectorAll('.tabcontent');


function openTab(evt) {
    
    const btnTarget = evt.currentTarget;
    const day = btnTarget.getAttribute('data-day');

    tabContents.forEach(content => content.classList.remove('tabcontent-active'));
    tabLinks.forEach(link => link.classList.remove('tablinks-active'));

    document.querySelector(`#${day}`).classList.add('tabcontent-active');
    btnTarget.classList.add('tablinks-active');
}

tabLinks.forEach(link => {
    link.addEventListener('click', openTab);
});