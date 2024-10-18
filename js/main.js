function toggleNightMode() {
    const video = document.getElementById('backgroundVideo');
    const image = document.getElementById('nighttimeImage');

    video.style.display = 'block'; 
    video.play();

    video.onended = function() {
        video.style.display = 'none';
        image.style.display = 'block'; 
    };
}
