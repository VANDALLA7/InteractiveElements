'use strict'

const btnOpen = document.querySelector('.btn--open');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.modal__close');

const modalViewHandler = () => {
    modal.classList.toggle('modal--open');
}

btnOpen.addEventListener('click', modalViewHandler);
modal.addEventListener('click', modalViewHandler)


const tooltips = document.querySelectorAll('.tooltip');

/*tooltips.forEach((tooltip) => {
    tooltip.addEventListener('click', onTooltipClick);
    
});

function onTooltipClick (evt) {
    evt.currentTarget.classList.toggle('tooltip-animated');
    
} */

tooltips.forEach((tooltip) => {
    tooltip.addEventListener('mouseover', (evt) => {
        evt.currentTarget.classList.add('tooltip-animated');
        evt.currentTarget.classList.remove('tooltip-closing');
    });

    tooltip.addEventListener('mouseleave', (evt) => {
        evt.currentTarget.classList.add('tooltip-closing');
        evt.currentTarget.classList.remove('tooltip-animated');
    });
});