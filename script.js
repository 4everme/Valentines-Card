document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('message').innerHTML = "💖 Perfect! You are a JEWEL, a priceless treasure! 💎";
    document.getElementById('message').style.display = 'block';
});

document.getElementById('noButton').addEventListener('mouseover', function() {
    let randomX = Math.random() * (window.innerWidth - 100); 
    let randomY = Math.random() * (window.innerHeight - 50); 
    this.style.position = 'absolute';
    this.style.left = `${randomX}px`;
    this.style.top = `${randomY}px`;
});

document.getElementById('noButton').addEventListener('click', function() {
    document.getElementById('message').innerHTML = "🔐 Unlock Your Treasure… Love is waiting for you. 💘";
    document.getElementById('message').style.display = 'block';
});

window.onload = function() {
    document.getElementById('bg-music').play();
};
