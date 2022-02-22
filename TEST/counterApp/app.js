const score = document.querySelector('#score');
const btnIncrement = document.querySelector('#increment');
const btnReset = document.querySelector('#reset');
const btnDecrement = document.querySelector('#decrement');

let scoreValue = 0;

function increment(){
    scoreValue++;
    score.textContent = scoreValue;
}

function reset(){
    scoreValue = 0
    score.textContent = 0;
}

function decrement(){
   scoreValue--;
   score.textContent = scoreValue;
}

btnIncrement.addEventListener('click',function(){
    increment();
});


btnReset.addEventListener('click',function(){
    reset();
});

btnDecrement.addEventListener('click',function(){
    decrement();
})


