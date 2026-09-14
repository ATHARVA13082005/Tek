// Mock weather data
const weatherData = {
    Sydney: 28,
    London: 15,
    Mumbai: 30,
    Delhi: 32,
    Paris: 18
};


// Mock API function
function fetchWeather(city) {

    return new Promise((resolve, reject) => {

        // Check for missing city name
        if (!city || city.trim() === "") {
            reject("City name is missing");
            return;
        }

        // Check whether city exists
        if (weatherData[city]) {
            resolve(weatherData[city]);
        } else {
            reject("City not found");
        }
    });
}


// Async function to get weather
async function getWeather(city) {

    try {

        let temperature = await fetchWeather(city);

        console.log(`Temperature in ${city} is ${temperature}°C`);

    } catch (error) {

        console.log(`Failed to fetch weather: ${error}`);

    } finally {

        console.log("Weather check completed");

    }
}