// fetch("data/test.csv")
//   .then(response => response.text())
//   .then(text => {
//     console.log(text)
//   });


// d3.csv("/data/test.csv").then(function(data) {
//  console.log(data); 
// });


// let data2 = text.toObjects(text);

// console.log(data2)

chartIt()

async function chartIt() {
const data = await fetchData();
const ctx = document.getElementById('chart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: data.date,
        datasets: [{
            label: 'Cash performance',
            data: data.cash,
            fill: false,
            backgroundColor: 'rgba(99, 132, 255, 0.2)',
            borderColor: 'rgba(99, 132, 255, 1)',
            borderWidth: 1
        },
        {
          label: 'Stock performance',
          data: data.stocks,
          fill: false,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
      }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    callback: function(value, index, values) {
                        return value + '%';
                    }
                    // beginAtZero: true
                }
            }]
        }
    }
});

}



async function fetchData() {
  const date = [];
  const cash = [];
  const stocks = [];

  const response = await fetch("data/test.csv")
  const data = await response.text()

  // console.log(data)

  const table = data.split("\n").slice(1); // line break from row 2 to end
  table.forEach(row => {
      const column = row.split(',');
      date.push(column[0]);
      cash.push(parseFloat(column[1]));
      stocks.push(parseFloat(column[2]));
      console.log(date, cash, stocks);
  });
  return { date, cash, stocks }

}