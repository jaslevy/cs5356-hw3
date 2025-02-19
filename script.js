document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "Toggle Dark Mode";
    toggleButton.className = "mt-4 px-4 py-2 bg-gray-800 text-white rounded-md shadow-md";
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("bg-gray-900");
        document.body.classList.toggle("text-white");
    });
});