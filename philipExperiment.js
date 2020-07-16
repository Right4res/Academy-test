const toggleClick = document.getElementById("pauseClick");
const toggleEnter = document.getElementById("pauseEnter");
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


toggleClick.addEventListener("click", renderChartAfterToggle);

toggleEnter.addEventListener("keypress", renderChartAfterKeypress);