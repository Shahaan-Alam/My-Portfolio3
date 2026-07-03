const toggleImg = document.getElementById("toggle");
const rootElement = document.documentElement; // This grabs the <html> tag
const toggleButton = document.getElementById("toggleButton");
const logo = document.getElementById("Logo")

function changeColor() {
    // 1. Toggle the 'dark' class on the HTML tag
    rootElement.classList.toggle("dark");
    
    // 2. Bonus: Swap the toggle image asset when clicked!
    if (rootElement.classList.contains("dark")) {
        toggleImg.src = "Images/toggleOn.png";
        logo.src = "Images/Logos/8.png"
    } else {
        toggleImg.src = "Images/toggleOff.png";
        logo.src = "Images/logo.png"
    }
}

toggleButton.addEventListener("click", changeColor)