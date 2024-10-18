function toggleNightMode() {
    const video = document.getElementById('images/BackroundVid - Made with Clipchamp (1).mp4');
    const image = document.getElementById('images/NighttimeImage.png');

    // Show the video and play it
    video.style.display = 'block'; // Show the video
    video.play();

    // When the video ends, hide the video and show the image
    video.onended = function() {
        video.style.display = 'none'; // Hide the video
        image.style.display = 'block'; // Show the image
    };
}
