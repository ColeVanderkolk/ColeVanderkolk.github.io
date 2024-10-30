// Coordinates of the target location (e.g., a building on campus)
const targetLocation = { lat: 48.731763, lng: -122.485326 }; // Replace with your target coordinates

document.getElementById('findDirection').addEventListener('click', getUserLocation);

function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    const userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
    };

    // Calculate the angle from the user to the target location
    const angle = calculateDirection(userLocation, targetLocation);

    // Rotate the needle to point in the correct direction
    const needle = document.getElementById('needle');
    needle.style.transform = `rotate(${angle}deg)`;
}

// Calculate the bearing (angle) between two coordinates
function calculateDirection(userLocation, targetLocation) {
    const lat1 = userLocation.lat;
    const lon1 = userLocation.lng;
    const lat2 = targetLocation.lat;
    const lon2 = targetLocation.lng;

    const dLon = lon2 - lon1;
    const y = Math.sin(dLon) * Math.cos(lat2);
    const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
    const angle = Math.atan2(y, x) * (180 / Math.PI); // Convert from radians to degrees

    // Adjust angle to be relative to north
    return (angle + 360) % 360; // Normalize to 0-360
}

// Handle errors in getting location
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}
