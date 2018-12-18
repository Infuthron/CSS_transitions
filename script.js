const butt1 = document.getElementById('butt1');

let field1 = document.querySelector('.field');
let field2 = document.querySelector('.field2');
let field3 = document.querySelectorAll('.field3');

let field3_1 = document.querySelector('.field3-1');
let field3_2 = document.querySelector('.field3-2');
let field3_3 = document.querySelector('.field3-3');

const move = () => {
    field1.classList.toggle('field-move1');
    field2.classList.toggle('field-move2');

    field3_1.classList.toggle('field3-1-move');
    field3_2.classList.toggle('field3-2-move');
    field3_3.classList.toggle('field3-3-move');

    for(let i = 0; i < field3.length ; i++) {
        field3[i].classList.toggle('field-move3');
    }


}

butt1.addEventListener('click', move);