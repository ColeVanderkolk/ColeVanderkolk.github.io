function toggleNightMode() {
    const themeStylesheet = document.getElementById('themeStylesheet');
    const video = document.getElementById('backgroundVideo');
    const videoReverse = document.getElementById('backgroundVideoReverse');

    if (themeStylesheet.getAttribute('href') === 'css/lightTheme.css') {
        themeStylesheet.setAttribute('href', 'css/darkTheme.css');

        // Play the video and show it
        video.style.display = 'block'; 
        video.play();

        video.onended = function() {
            video.style.display = 'none';
        };
    } else {
        themeStylesheet.setAttribute('href', 'css/lightTheme.css');

        // Play the video and show it
        videoReverse.style.display = 'block'; 
        videoReverse.play();

        videoReverse.onended = function() {
            videoReverse.style.display = 'none';
        };
    }
}
