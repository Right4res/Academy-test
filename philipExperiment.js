const toggleClick = document.getElementById("pauseClick");
const toggleEnter = document.getElementById("pauseEnter");
// const theYearIs = document.getElementById("theYearIs");

let pauseChart = false
updateInterval = 1000;


function renderChartAfterKeypress(event) {
	if (event.keyCode === 13 | event.keyCode === 32) {
        pauseChart = !pauseChart;
        if (pauseChart === false) {
            idSetInterval = setInterval(function(){updateChart()}, updateInterval);
            idSetIntervalShowYear = setInterval(function(){findYear()}, updateInterval);
        } else {
            clearInterval(idSetInterval);
            clearInterval(idSetIntervalShowYear);
        }
        console.log("event happened " + pauseChart);
	}
}

function renderChartAfterToggle() {
    pauseChart = !pauseChart;
    if (pauseChart === false) {
        idSetInterval = setInterval(function(){updateChart()}, updateInterval);
        idSetIntervalShowYear = setInterval(function(){findYear()}, updateInterval);
    } else {
        clearInterval(idSetInterval);
        clearInterval(idSetIntervalShowYear);
    }
    console.log(pauseChart)
}

function findYear() {
    document.getElementById('yearShow').innerHTML = year;
    console.log(year);
    sessionStorage.setItem("YearStored", "year");
} 

toggleClick.addEventListener("click", renderChartAfterToggle);

window.addEventListener("keypress", renderChartAfterKeypress);

// theYearIs.addEventListener("click", findYear);


