const searchBar = document.querySelector(".searchbar"); 
const submitform = document.querySelector(".searchform"); 
let searchValue;
//event listeners
searchBar.addEventListener( "input", () => {
searchValue = searchBar.value;
});
submitform.addEventListener("submit", (e) =>{
e.preventDefault();
    fetchWeather(searchValue);
});

async function fetchApi (url){
const apiData = await fetch(url);
const data = await apiData.json();
return data;
};

async function fetchWeather(query){
    link=`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=966faab9f1fd9889506ce166ffe535ba&units=metric`
const data = await fetchApi(link);
getWeather(data);
}
function getWeather (data){
const result = document.querySelector(".result");
const detail = document.querySelector(".details")
detail.innerHTML = `<div class = "data-info">
<div class="c-temp">
<h3 class="cityname"> ${data.name}, ${data.sys.country}</h3>
<p>${data.main.temp}°C</p>
</div></br>
<div class ="high"><p>High<p/>
<p>${data.main.temp_max}°C</p>
</div></br>
<div class="low"><p>Low<p/>
<p>${data.main.temp_min}°C</p>
</div></br>
<div class= "Humidity"><p>Humidity<p/>
<p class = "p-hum">${data.main.humidity}</p>
</div></br>
</div>`

console.log(data);



}