function toggleNightMode() {
    const themeStylesheet = document.getElementById('themeStylesheet');
    const video = document.getElementById('backgroundVideo');
    const image = document.getElementById('nighttimeImage');

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

        // Hide the image when switching back to light mode
        image.style.display = 'none';
    }
}
