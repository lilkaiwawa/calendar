const today = new Date();

const dayNumber = today.getDate();
const weekday = today.toLocaleString('default', { weekday: 'long' });

document.getElementById("day").textContent = dayNumber;
document.getElementById("weekday").textContent = weekday;
