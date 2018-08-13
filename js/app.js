// init weather object
const weather = new Weather('54.492976', '18.543219', 'pl');

// get weather on dom load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('52.226050', '21.015136');

function getWeather(){
  weather.getWeather()
  .then(results => console.log(results))
  .catch(err => console.log(err));
}

// toggling modal window
document.querySelector('#openModal').addEventListener('click', openModal);
function openModal(){
  document.querySelector('.modal').classList.add('is-active')
}
function closeModal(){
  document.querySelector('.modal').classList.remove('is-active')
}

document.querySelector('.modal').addEventListener('click', (e) => {
  if(e.target.classList.contains('modal-background') || e.target.classList.contains('modal-close')){
    closeModal();
  }
  e.preventDefault();
})