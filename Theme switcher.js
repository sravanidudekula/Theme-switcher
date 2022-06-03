let bgContainerEl = document.getElementById("bgContainer");
let headingEl = document.getElementById("heading");
let themeUserInputEl = document.getElementById("themeUserInput");
let lightThemeUrl = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
let darkThemeUrl = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";

function changeBackground(event) {

    if (event.key === "Enter") {
        let themeUserInputVal = themeUserInputEl.value;
        if (themeUserInputVal === "Light") {
            themeUserInputEl.style.backgroundImage = lightThemeUrl;
        } else if (themeUserInputVal === "Dark") {
            themeUserInputEl.style.backgroundImage = darkThemeUrl;
        } else {
            alert("Enter the valid theme");
        }
    }
}
themeUserInputEl.addEventListener("keydown", changeBackground);