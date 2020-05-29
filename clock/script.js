function updateTime() {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  let hourEl = document.querySelector('#hour');
  let minEl = document.querySelector('#min');
  let secEl = document.querySelector('#sec');

  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (min < 10) {
    min = `0${min}`;
  }
  if (sec < 10) {
    sec = `0${sec}`;
  }

  hourEl.innerHTML = `${hour}:`;
  minEl.innerHTML = `${min}:`;
  secEl.innerHTML = sec;
}
window.onload = updateTime;

setInterval(updateTime, 1000);
