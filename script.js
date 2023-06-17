function getToday() {
    const currentDate = new Date();

    const options = { 
        weekday: 'long', 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);

    document.getElementById("today").innerHTML = formattedDate;
}

function getRandomNumber() {
    const num = Number((Math.random() * (29.00 - 16.00) + 16.00).toFixed(2));
    document.getElementById("gme").innerHTML = num;
  }

window.addEventListener('load', getToday);
window.addEventListener('load', getRandomNumber);