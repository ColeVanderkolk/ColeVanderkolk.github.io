//coordinates to small park by strarbucks
const targetLocation = { lat: 48.733955, lng: -122.486354 };

document.getElementById('findDirection').addEventListener('click', getLocation);

function getLocation() {
    if (navigator.geolocation) { //find geolocation through api if available
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("location unavailable");
    }
}

function showPosition(position) {
    const userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
    };

    // call calculate direction with user location and target location
    const angle = calculateDirection(userLocation, targetLocation);

    // rotate the needle 
    const needle = document.getElementById('needle');
    needle.style.transform = `rotate(${angle}deg)`;
}

// calculate angle between the two coordinates
function calculateDirection(userLocation, targetLocation) {
    const userlat = userLocation.lat * (Math.PI / 180);
    const userlon = userLocation.lng * (Math.PI / 180);
    const locationlat = targetLocation.lat * (Math.PI / 180);
    const locationlong = targetLocation.lng * (Math.PI / 180);

    const dLon = locationlong - userlon; //comput difference in longitude to decide which way is north
    const y = Math.sin(dLon) * Math.cos(locationlat);
    const x = Math.cos(userlat) * Math.sin(locationlat) - Math.sin(userlat) * Math.cos(locationlat) * Math.cos(dLon);
    const angle = Math.atan2(y, x) * (180 / Math.PI); // convert from radians to degrees

    // adjust angle to be relative to north
    return (angle + 360) % 360; // Normalize to 0-360
}

// errors 
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("permission denied");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("position unavailable");
            break;
        case error.TIMEOUT:
            alert("request timeout");
            break;
        case error.UNKNOWN_ERROR:
            alert("error");
            break;
    }
}
