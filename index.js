
let content = document.querySelector('.content');

let decBtn = document.querySelector('.decre');

let incBtn = document.querySelector('.incre');

let resetBtn = document.querySelector('.reset');


decBtn.addEventListener('click',()=>{
    let value = parseInt(content.innerHTML);
    value = value - 1;
    content.innerHTML = value;
})

incBtn.addEventListener('click',()=>{
    let value = parseInt(content.innerHTML);
    value = value + 1;
    content.innerHTML = value;
})


resetBtn.addEventListener('click',()=>{
    let value = parseInt(content.innerHTML);
    value = 0;
    content.innerHTML = value;
})