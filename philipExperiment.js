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
    sessionStorage.setItem("yearStored", year);
} 

// const data = await fetchData();

async function fetchData() {
    
    try {
        const date = [];
        const cash = [];
        const stocks = [];
    
        const response = await fetch("data/test.csv");
        const data = await response.text();
    
        // console.log(data)
    
        const table = data.split("\n").slice(1); // line break from row 2 to end
        table.forEach(row => {
            const column = row.split(',');
            date.push(column[0]);
            cash.push(parseFloat(column[1]));
            stocks.push(parseFloat(column[2]));
            console.log(date, cash, stocks);
        });
        return { date, cash, stocks };
    } catch (e) {
        console.error(e);
    }
}

toggleClick.addEventListener("click", renderChartAfterToggle);

window.addEventListener("keypress", renderChartAfterKeypress);

// theYearIs.addEventListener("click", findYear);


