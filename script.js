const today = new Date();

// Get the weekday name and day number
const dayNumber = today.getDate();
const weekday = today.toLocaleString('default', { weekday: 'long' });

// Set the content in the DOM
document.getElementById("day").textContent = dayNumber;
document.getElementById("weekday").textContent = weekday;
