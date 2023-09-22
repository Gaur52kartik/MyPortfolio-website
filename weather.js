let form = document.getElementById(`weatherForm`);
let weatherArticle1 = document.getElementById(`weatherArticle1`);
let weatherArticle2 = document.getElementById(`weatherArticle2`);
form.addEventListener(`submit`, (e) => {
  e.preventDefault();
  let dropletSideDetails = document.getElementById(`dropletSideDetails`);
  let windSideDetails = document.getElementById(`windSideDetails`);
  let weatherType = document.getElementById(`weatherType`);
  let weatherPlace = document.getElementById(`weatherPlace`);
  let weatherDegree = document.getElementById(`weatherDegree`);
  let weatherFormInput = document.getElementById(`weatherFormInput`).value;
  let weatherImages = document.getElementById(`weatherImages`);
  let weatherFormInputValue = weatherFormInput.split(` `).join(``);
  let key = `38ac0743278a76c61fb5960a2cfc46c7`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherFormInput}&appid=${key}`;
  weatherArticle1.style.display = `none`;
  weatherArticle2.style.display = `flex`;
  fetch(url)
    .then((resp) => resp.json())
    .then((resp) => {
      console.log(resp.name);
      weatherPlace.textContent = `${resp.name}`;
      weatherDegree.innerHTML = `${Math.round(
        resp.main.temp - 273.15
      )}<sup>o </sup>C`;
      weatherType.textContent = `${resp.weather[0].main}`;
      windSideDetails.textContent = `${resp.wind.speed} Km/hr`;
      dropletSideDetails.textContent = `${resp.main.humidity} %`;
      let xyz = resp.weather[0].main;
      if (`Clear` == xyz) {
        weatherImages.src = `clear.png`;
      } else if (`Clouds` == xyz) {
        weatherImages.src = `clouds.png`;
      } else if (`Mist` == xyz) {
        weatherImages.src = `mist.png`;
      } else if (`Rain` == xyz) {
        weatherImages.src = `rain.png`;
      } else if (`Snow` == xyz) {
        weatherImages.src = `snow.png`;
      } else if (`Sun` == xyz) {
        weatherImages.src = `sun.jpg`;
      } else if (`Haze` == xyz) {
        weatherImages.src = `haze.png`;
      }
      return resp;
    });
});
function resetWeatherData() {
  weatherFormInput.value = ``;
  weatherArticle1.style.display = `flex`;
  weatherArticle2.style.display = `none`;
}
