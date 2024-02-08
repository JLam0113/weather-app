async function getWeather(location){
    const response = await fetch('http://api.weatherapi.com/v1/current.json?key=161e0dd957b84e9eadd03818240802&q=' + location, {mode: 'cors'});
    
    if(!response.ok) alert(`${response.status}, Error has occured`);
    const data = await response.json();
    return data;
}

const locationForm = document.getElementById("locationForm");

locationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let location = document.getElementById("location");

    getWeather(location.value).then( (value) => {
        let temp = value.current.temp_c;
        let humidity = value.current.humidity;
        let city = value.location.name;

        document.getElementById("temp").innerHTML = temp;
        document.getElementById("humidity").innerHTML = humidity;
        document.getElementById("city").innerHTML = city;

        document.getElementsByClassName("weatherDataContainer")[0].style.display = "block";
    })
});

document.getElementsByClassName("weatherDataContainer")[0].style.display = "none";
