document.getElementById('yesButton').addEventListener('click', function() {
    showPopup("💖 Perfect! You are a JEWEL, a priceless treasure! 💎");
});

document.getElementById('noButton').addEventListener('mouseover', function() {
    let randomX = Math.random() * (window.innerWidth - 100); 
    let randomY = Math.random() * (window.innerHeight - 50); 
    this.style.position = 'absolute';
    this.style.left = `${randomX}px`;
    this.style.top = `${randomY}px`;
});

document.getElementById('noButton').addEventListener('click', function() {
    showPopup("🔐 Unlock Your Treasure… Love is waiting for you. 💘");
});

function showPopup(message) {
    document.getElementById('popup-message').innerHTML = message;
    document.getElementById('popup').style.display = 'flex';
}

// Close the popup when clicking the "X"
document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

// Auto-show pop-up after 3 seconds (Optional)
setTimeout(() => {
    showPopup("💝 Welcome! A special Valentine’s message awaits you...");
}, 3000);

window.onload = function() {
    document.getElementById('bg-music').play();
};
