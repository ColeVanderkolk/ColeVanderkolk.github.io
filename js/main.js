function toggleNightMode() {
    const themeStylesheet = document.getElementById('themeStylesheet');

    if (themeStylesheet.getAttribute('href') === 'css/lightTheme.css') {
        themeStylesheet.setAttribute('href', 'css/darkTheme.css');
    } else {
        themeStylesheet.setAttribute('href', 'css/lightTheme.css');
    }
}

