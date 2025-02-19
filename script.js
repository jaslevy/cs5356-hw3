document.addEventListener("DOMContentLoaded", () => {
    // Fetch and display Eggo's friends
    const friendsContainer = document.getElementById("friends-container");

    fetch("https://dog.ceo/api/breeds/image/random/6")
        .then(response => response.json())
        .then(data => {
            data.message.forEach(imageUrl => {
                const imgElement = document.createElement("img");
                imgElement.src = imageUrl;
                imgElement.alt = "Eggo's friend";
                imgElement.className = "w-full h-48 object-cover rounded-lg shadow-md";
                friendsContainer.appendChild(imgElement);
            });
        })
        .catch(error => console.error("Error fetching friends images:", error));

    // Fetch New York weather data using Open-Meteo
    const weatherUrl = "https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&current=temperature_2m";

    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            const temp = data.current.temperature_2m;
            const weatherActivity = document.getElementById("weather-activity");
            let activityMessage = '';
            let activityImage = '';

            if (temp < 32) {
                activityMessage = "It's below freezing! Perfect weather for fun in the snow. ❄️";
                activityImage = 'snow.jpg';
            } else if (temp >= 32 && temp <= 72) {
                activityMessage = "The weather is moderate. Let's head to the dog park! 🐾";
                activityImage = 'park.jpg';
            } else {
                activityMessage = "It's hot outside! Time for a pool day. 🏊‍♂️";
                activityImage = 'pool.jpg';
            }

            weatherActivity.innerHTML = `
                <h2 class="text-2xl font-semibold mb-4">Weather Update NYC 🌤️</h2>
                <p class="text-lg mb-4">${activityMessage}</p>
                <img src="${activityImage}" alt="Weather activity image" class="w-full h-64 object-cover rounded-lg shadow-md">
            `;
        })
        .catch(error => console.error("Error fetching weather data:", error));
});
