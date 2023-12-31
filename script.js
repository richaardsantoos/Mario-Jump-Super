const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

// Adicione um listener de eventos para o toque (touchstart)
document.addEventListener('touchstart', jump);

const loop = setInterval(() => {


 
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipePosition <= 80 && pipePosition > 0 && marioPosition < 40){ 

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

       mario.style.animation = 'none';
       mario.style.bottom = `${pipePosition}px`;

       mario.src = './imagens/game-over.png'
       mario.style.width = '75px'
       mario.style.marginLeft = '10px'

      
       
    
       clearInterval(loop);

    }



} ,10);

document.addEventListener('keydown' , jump);