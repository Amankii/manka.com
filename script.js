document.addEventListener('DOMContentLoaded', () => {

    //let counter = 0;
    if(!localStorage.getItem('counter')) {
        localStorage.setItem('counter', 0)
    }

    document.querySelector('#btn1').onclick = () => {
        let counter = localStorage.getItem('counter');
        counter++;
        document.querySelector('#a').innerHTML = counter;
        localStorage.setItem('counter', counter);
    };

    document.querySelector('#a').innerHTML = localStorage.getItem('counter');


});