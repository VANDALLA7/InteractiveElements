
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