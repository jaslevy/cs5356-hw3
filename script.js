document.addEventListener("DOMContentLoaded", () => {
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

    const weatherUrl = "https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&current=temperature_2m";

    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            const temp = data.current.temperature_2m;
            const weatherActivity = document.getElementById("weather-activity");
            let activityMessage = '';
            let activityImage = '';

            if (temp < 0) {
                activityMessage = "It's below freezing! Perfect weather for fun in the snow. ❄️";
                activityImage = 'images/snow.jpg';
            } else if (temp >= 0 && temp <= 22.22) {
                activityMessage = "The weather is moderate. Let's head to the dog park! 🐾";
                activityImage = 'images/park.jpg';
            } else {
                activityMessage = "It's hot outside! Time for a beach day. 🏊‍♂️";
                activityImage = 'images/beach.jpg';
            }

            weatherActivity.innerHTML = `
                <h2 class="text-2xl font-semibold mb-4">Weather Update NYC 🌤️</h2>
                <p class="text-lg mb-4">${activityMessage}</p>
                <img src="${activityImage}" alt="Weather activity image" class="w-full h-64 object-cover rounded-lg shadow-md">
            `;
        })
        .catch(error => console.error("Error fetching weather data:", error));
});

document.addEventListener("click", () => {
    const barkSound = new Audio("sounds/dog-bark.mp3");
    barkSound.play();
});