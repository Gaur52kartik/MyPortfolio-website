let slideIndex = 0;
let slides = document.getElementsByClassName("portfolioProjectArea");
display();
function display() {
  slides[slideIndex].style.display = "flex";
}
function portfolioScroller(n) {
  slideIndex += n;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  display();
}

let techCoveredBar = document.querySelectorAll(".techCoveredBar");
let techCoveredBarPercent = document.querySelectorAll(".techCoveredBarPercent");
for (let i = 0; i < techCoveredBar.length; i++) {
  techCoveredBar[
    i
  ].style.width = `${techCoveredBar[i].children[0].textContent}`;
  techCoveredBarPercent[
    i
  ].style.borderColor = `${techCoveredBar[i].style.backgroundColor}`;
}
// ==================================================
let homeSection = document.getElementById("Home");
let aboutSection = document.getElementById("About");
let educationSection = document.getElementById("Education");
let skillsSection = document.getElementById("Skills");
let contactSection = document.getElementById("Contact");
let allSectionsArray = [
  homeSection,
  aboutSection,
  educationSection,
  skillsSection,
  contactSection,
];
// ==================================================
function closePortfolioAllProjectsArticle() {
  let portfolioAllProjectsArticle = document.getElementById(
    "portfolioAllProjectsArticle"
  );
  resetGithubData();
  resetWeatherData();
  resetQrCodeData();
  portfolioAllProjectsArticle.style.display = "none";
  for (let i = 0; i < allSectionsArray.length; i++) {
    allSectionsArray[i].style.display = "flex";
  }
}
function openPortfolioAllProjectsArticle(n) {
  let portfolioAllProjectsArticle = document.getElementById(
    "portfolioAllProjectsArticle"
  );
  portfolioAllProjectsArticle.style.display = "flex";
  let weatherAppSection = document.getElementById("weatherAppSection");
  let githubAppSection = document.getElementById("githubAppSection");
  let qrCodeGeneratorAppSection = document.getElementById(
    "qrCodeGeneratorAppSection"
  );
  let arr = [weatherAppSection, githubAppSection, qrCodeGeneratorAppSection];
  for (let i = 0; i < arr.length; i++) {
    arr[i].style.display = "none";
    if (i == n) {
      arr[i].style.display = "flex";
    }
  }
  for (let i = 0; i < allSectionsArray.length; i++) {
    allSectionsArray[i].style.display = "none";
  }
}

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
      } else if (`Thunderstorm` == xyz) {
        weatherImages.src = `thunderstrom.png`;
      }
      return resp;
    });
});
function resetWeatherData() {
  weatherFormInput.value = ``;
  weatherArticle1.style.display = `flex`;
  weatherArticle2.style.display = `none`;
}

let githubProfileBcimage = document.getElementById(`githubProfileBcimage`);
let githubProfileFrontimage = document.getElementById(
  `githubProfileFrontimage`
);
let githubUserProfileInfoName = document.getElementById(
  `githubUserProfileInfoName`
);
let githubUserProfileInfoUserid = document.getElementById(
  `githubUserProfileInfoUserid`
);
let githubUserProfileInfoBio = document.getElementById(
  `githubUserProfileInfoBio`
);
let githubUserFollowers = document.getElementById(`githubUserFollowers`);
let githubUserFollowing = document.getElementById(`githubUserFollowing`);
let githubUserViewProfileLink = document.getElementById(
  `githubUserViewProfileLink`
);
let githubAppDetailForm = document.getElementById(`githubAppDetailForm`);
let githubAppSection = document.getElementById(`githubAppSection`);
let githubArticles = document.getElementsByClassName(`githubArticles`);

githubAppDetailForm.addEventListener(`submit`, (e) => {
  e.preventDefault();
  let githubAppDetailFormInput = document.getElementById(
    `githubAppDetailFormInput`
  ).value;
  let value = githubAppDetailFormInput.split(` `).join(``);
  let url = `https://api.github.com/users/${value}`;
  fetch(url)
    .then((resp) => resp.json())
    .then((resp) => {
      githubAppSection.style.backgroundColor = "black";
      githubProfileBcimage.style.backgroundImage = `url(${resp.avatar_url})`;
      githubProfileFrontimage.style.backgroundImage = `url(${resp.avatar_url})`;
      githubUserProfileInfoName.textContent = `${resp.name}`;
      githubUserProfileInfoUserid.textContent = `${resp.login}`;
      githubUserProfileInfoBio.textContent = `${resp.bio}`;
      githubUserFollowers.textContent = `${resp.followers}`;
      githubUserFollowing.textContent = `${resp.following}`;
      githubUserViewProfileLink.href = `${resp.html_url}`;

      for (let a = 0; a < githubArticles.length; a++) {
        githubArticles[a].style.display = `flex`;
      }
      githubAppDetailForm.style.display = `none`;
      return resp;
    });
});
function resetGithubData() {
  for (let a = 0; a < githubArticles.length; a++) {
    githubArticles[a].style.display = `none`;
  }
  githubAppDetailForm.style.display = `flex`;
  githubAppSection.style.background = `none`;
  document.getElementById(`githubAppDetailFormInput`).value = ``;
}

let qrCodeImageArea = document.getElementById("qrCodeImageArea");
let qrCodeDownloadAndResetBtn = document.getElementById(
  "qrCodeDownloadAndResetBtn"
);
let qrCodeGeneratorForm = document.getElementById("qrCodeGeneratorForm");
qrCodeGeneratorForm.addEventListener(`submit`, (e) => {
  let qrCodeGeneratorFormInput = document.getElementById(
    "qrCodeGeneratorFormInput"
  ).value;
  let url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeGeneratorFormInput}`;
  let qrCodeImage = document.getElementById("qrCodeImage");
  qrCodeImage.src = url;
  qrCodeImageArea.style.display = "block";
  qrCodeDownloadAndResetBtn.style.display = "flex";
  let qrCodeDownloadBtn = document.getElementById("qrCodeDownloadBtn");
  qrCodeDownloadBtn.href = `#${url}`;
});
function resetQrCodeData() {
  qrCodeImageArea.style.display = "none";
  qrCodeDownloadAndResetBtn.style.display = "none";
  let qrCodeGeneratorFormInput = document.getElementById(
    "qrCodeGeneratorFormInput"
  );
  qrCodeGeneratorFormInput.value = ``;
}
