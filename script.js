document.addEventListener('DOMContentLoaded', () => {
    // Your code here
    const number = document.querySelector('.number');
    const increment = document.querySelector('.increment');
    const decrement = document.querySelector('.decrement');

    const increase = () => {
        number.innerText = parseInt(number.innerText) + 1;
    }

    const decrease = () => {
        number.innerText = parseInt(number.innerText) - 1;
    }

    increment.addEventListener('click', increase);
    decrement.addEventListener('click', decrease);
});
