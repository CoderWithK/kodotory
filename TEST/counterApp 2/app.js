const socre = document.getElementById('score');
const btns = document.querySelectorAll('.btn');
let count = 0;

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
     const styles = e.currentTarget.classList;
     if(styles.contains('increment')){
        count++;
     }
    else if(styles.contains('decrement')){
        count--;
    }
    else{
        count = 0;
    }
     socre.textContent = count;
    })
})

