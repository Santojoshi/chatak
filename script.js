// calculating navbar height*************************************
function adjustStyles() {
    var navbarHeight = document.querySelector('.navbar').offsetHeight;
    document.querySelector('.content_section').style.paddingTop = navbarHeight + 'px';
    document.querySelector('.w3-sidebar').style.marginTop = navbarHeight + 'px';
}

window.addEventListener('load', adjustStyles);
window.addEventListener('resize', adjustStyles);
// calculating navbar height end*******************************************************

// Crousel js start ***********************************
document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');

if (window.innerWidth <= 776) {
  

  let currentIndex = 0;

  nextButton.addEventListener('click', function () {
    if (currentIndex < carousel.children.length - 2) {
      currentIndex ++;
      updateCarousel();
    }
  });

  prevButton.addEventListener('click', function () {
    if (currentIndex > 0) {
      currentIndex --;
      updateCarousel();
    }
  });

  function updateCarousel() {
    const translateXValue = -currentIndex * 50; // Assuming 50% for two cards, adjust as needed
    carousel.style.transform = `translateX(${translateXValue}%)`;
  }

  // Automatic carousel movement every 3 seconds
  setInterval(function () {
    if (currentIndex < carousel.children.length - 2) {
      currentIndex ++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  }, 3000);
}
else{
  let currentIndex = 0;

  nextButton.addEventListener('click', function () {
    if (currentIndex < carousel.children.length - 4) {
      currentIndex ++; // Show 4 cards at a time
      updateCarousel();
    }
  });

  prevButton.addEventListener('click', function () {
    if (currentIndex > 0) {
      currentIndex --; // Show 4 cards at a time
      updateCarousel();
    }
  });

  function updateCarousel() {
    const translateXValue = -currentIndex * 25; // Each card takes 25% width
    carousel.style.transform = `translateX(${translateXValue}%)`;
  }

  // Automatic carousel movement every 3 seconds
  setInterval(function () {
    if (currentIndex < carousel.children.length - 4) {
      currentIndex ++; // Show 4 cards at a time
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  }, 3000);

}
});
// Crousel js End ***********************************
// fetching weather Api start*******************************
fetch_weather();
var weather_search = document.getElementById("weather_search");
function fetch_weather(){
  var city = document.getElementById("weather_city").value;
  if (city == null || city == '') {
    var city = 'delhi,india';
  }
  const apiKey = '2b114f98cfb24831b4f63058231612';
  const apiUrl = `HTTPS://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

  fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Handle the data and update the HTML
    document.getElementById('weather_icon').src=`${data.current.condition.icon}`;
    document.getElementById('weather_condition').innerHTML=`${data.current.condition.text}`;
    document.getElementById('weather_city_heading').innerHTML=`${data.location.name}`;
    document.getElementById('temp_val').innerHTML=`${data.current.temp_c}&#8451;`;
    document.getElementById('humidity').innerHTML=`${data.current.humidity}%`;
    document.getElementById('rain').innerHTML=`${data.current.precip_mm}%`;
    document.getElementById('wind').innerHTML=`${data.current.wind_kph}km/h`;
    console.log(data);
    console.log(typeof(data));
    
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
    document.getElementById('weather_city_heading').innerHTML=`Enter correct city`;

  });
}

weather_search.addEventListener('click',()=>{
    fetch_weather();
});


// fetching weather Api end*******************************