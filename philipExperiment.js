const toggleClick = document.getElementById("pauseClick");
const toggleEnter = document.getElementById("pauseEnter");
const theYearIs = document.getElementById("theYearIs");

let pauseChart = false

function renderChartAfterKeypress(event) {
	if (event.keyCode === 13) {
        pauseChart = !pauseChart;
        console.log("event happened " + pauseChart);
	}
}

function renderChartAfterToggle() {
    pauseChart = !pauseChart;
    console.log(pauseChart)
}

function findYear() {
    console.log(year);
    document.getElementById('year').innerHTML = year-1
}

toggleClick.addEventListener("click", renderChartAfterToggle);

toggleEnter.addEventListener("keypress", renderChartAfterKeypress);

theYearIs.addEventListener("click", findYear);


