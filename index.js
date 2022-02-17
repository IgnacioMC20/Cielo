document.addEventListener('mousemove', (event) => {

    const body = document.querySelector('body');
    const heart = document.createElement('span');

    const x = event.offsetX;
    const y = event.offsetY;

    let size = Math.random() * 80;
    let trasnformValue = Math.random() * 360;
    
    heart.style.width = 20 + size+'px';
    heart.style.height = 20 + size+'px';
    heart.style.transform = `rotate(${trasnformValue}deg)`;
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    
    body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 500);
})