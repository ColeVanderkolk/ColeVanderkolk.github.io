const compassCircle = document.querySelector(".compass-circle");
const myPoint = document.querySelector(".my-point");
const startBtn = document.querySelector(".start-btn");
const timeDisplay = document.querySelector(".time-display");
const elevationDisplay = document.querySelector(".elevation-display");
const isIOS =
  navigator.userAgent.match(/(iPod|iPhone|iPad)/) &&
  navigator.userAgent.match(/AppleWebKit/);

function init() {
  startBtn.addEventListener("click", startCompass);
  navigator.geolocation.getCurrentPosition(locationHandler, locationError);

  if (!isIOS) {
    window.addEventListener("deviceorientationabsolute", handler, true);
  }

  // Update time every second
  setInterval(updateTime, 1000);
}

function startCompass() {
  if (isIOS) {
    DeviceOrientationEvent.requestPermission()
      .then((response) => {
        if (response === "granted") {
          window.addEventListener("deviceorientation", handler, true);
        } else {
          alert("Permission must be granted!");
        }
      })
      .catch(() => alert("Device orientation not supported"));
  }
}

function handler(e) {
  compass = e.webkitCompassHeading || Math.abs(e.alpha - 360);
  compassCircle.style.transform = `translate(-50%, -50%) rotate(${-compass}deg)`;

  // ±15 degree condition
  if (
    (pointDegree < Math.abs(compass) && pointDegree + 15 > Math.abs(compass)) ||
    pointDegree > Math.abs(compass + 15) ||
    pointDegree < Math.abs(compass)
  ) {
    myPoint.style.opacity = 0;
  } else if (pointDegree) {
    myPoint.style.opacity = 1;
  }
}

let pointDegree;

function locationHandler(position) {
  const { latitude, longitude, altitude } = position.coords;
  pointDegree = calcDegreeToPoint(latitude, longitude);

  // Update elevation display
  if (altitude !== null) {
    updateElevation(altitude);
  } else {
    updateElevation("Not available");
  }

  if (pointDegree < 0) {
    pointDegree = pointDegree + 360;
  }
}

function locationError(error) {
  console.error("Geolocation error:", error);
  updateElevation("Unable to retrieve elevation");
}

function calcDegreeToPoint(latitude, longitude) {
  // North geolocation (0° longitude, 90° latitude for the North Pole)
  const point = { lat: 90.0, lng: 0.0 };

  const phiK = (point.lat * Math.PI) / 180.0;
  const lambdaK = (point.lng * Math.PI) / 180.0;
  const phi = (latitude * Math.PI) / 180.0;
  const lambda = (longitude * Math.PI) / 180.0;

  const psi =
    (180.0 / Math.PI) *
    Math.atan2(
      Math.sin(lambdaK - lambda),
      Math.cos(phi) * Math.tan(phiK) -
        Math.sin(phi) * Math.cos(lambdaK - lambda)
    );
  return Math.round(psi);
}

function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Format time as HH:MM:SS
  const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  timeDisplay.textContent = `Time: ${formattedTime}`;
}

function updateElevation(altitude) {
  // Update elevation display
  elevationDisplay.textContent = `Elevation: ${altitude}`;
}

init();