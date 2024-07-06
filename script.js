window.onload = function() {
    const bubble = document.querySelector('.card');
    const bubble2 = document.querySelector('#card2');

    const targetY = 500;

    let currentPosition = window.innerHeight;
    const animationDuration = 700;
    const startTime = performance.now();

    function animate(time) {
        const elapsedTime = time - startTime;
        const progress = Math.min(elapsedTime / animationDuration, 5);

        currentPosition = window.innerHeight - progress * (window.innerHeight - targetY);
            bubble.style.transform = `translateY(-${window.innerHeight - currentPosition}px)`;
            bubble2.style.transform = `translateY(-${window.innerHeight - currentPosition}px)`;

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }
    requestAnimationFrame(animate);
}

