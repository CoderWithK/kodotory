let toggleButton=document.querySelector('button');
let text=document.querySelector('p');
console.log(toggleButton);
console.log(text);
let btn=toggleButton.addEventListener('click',function(){
    console.log('click');
    console.dir(text);
    text.classList.toggle('hidden')
})