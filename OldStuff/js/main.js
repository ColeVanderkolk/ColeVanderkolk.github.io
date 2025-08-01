function toggleNightMode() {
    const themeStylesheet = document.getElementById('themeStylesheet');
    const video = document.getElementById('backgroundVideo');
    const videoReverse = document.getElementById('backgroundVideoReverse');

    if (themeStylesheet.getAttribute('href') === 'css/lightTheme.css') { //switch to dark theme
        themeStylesheet.setAttribute('href', 'css/darkTheme.css');

        video.style.display = 'block'; 
        video.play();

        video.onended = function() {
            video.style.display = 'none';
        };
    } else { //switch to light theme
        themeStylesheet.setAttribute('href', 'css/lightTheme.css');

        
        videoReverse.style.display = 'block'; 
        videoReverse.play();

        videoReverse.onended = function() {
            videoReverse.style.display = 'none';
        };
    }
}

function hideHomepage() {
    document.getElementById('homepage').style.display = 'none';
}

function showHomePage() {
    document.getElementById('homepage').style.display = 'block';
}
