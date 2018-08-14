// init objects
const weather = new Weather('54.492976', '18.543219', 'pl');
const ui = new UserInterface();

// get weather on dom load
document.addEventListener('DOMContentLoaded', getWeather());

// weather.changeLocation('52.226050', '21.015136');

function getWeather(){
  weather.getWeather()
  .then(results => {
    console.log(results)
    ui.displayWeather(results)
  })
  .catch(err => console.log(err));
}

// toggling modal window
document.getElementById('changeLocation-button').addEventListener('click', () => ui.openModal());

document.getElementById('modal').addEventListener('click', () => {
  if(e.target.classList.contains('modal-background') || e.target.classList.contains('modal-close')){
    ui.closeModal();
  }
})