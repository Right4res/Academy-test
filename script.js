let text1 = document.getElementById("sliderText1");

let slider1 = document.getElementById("slider1");

text1.textContent = slider1.value + "%";

slider1.addEventListener("mousemove",function(){
  text1.textContent = slider1.value + "%"
})

let text2 = document.getElementById("sliderText2");

let slider2 = document.getElementById("slider2");

text2.textContent = slider2.value + "%";

slider2.addEventListener("mousemove",function(){
  text2.textContent = slider2.value + "%"
});


async function csvToDataObj(filename){
  const response = await fetch(filename);
  const data = await response.text();
  const rows = data.split('\n').slice(1);
  const dataObj = $.csv.toObjects(data);
  
  return dataObj;
}

function formatDataObj(dataObj){
  dataPoints=dataObj.map(obj=>{
    let date = moment(obj.date,"DD-MM-YYYY");
    timeStamp = date.valueOf()
    let value = parseFloat(obj.Schroder)
    let dataPoint={
      x:timeStamp,
      y:value
    }
   return dataPoint
  })
  return dataPoints
}

function plotData(formattedDataObj){

  var chart = new CanvasJS.Chart("chartContainer",
  {
    zoomEnabled: true,      
      
    title:{
      text: "Chart With Date-Time Stamps Inputs"       
    },

    data: [
    {        
    type: "line",
    xValueType: "dateTime",
    dataPoints: formattedDataObj
    }
    ]
  });
  chart.render();
 
}

let Data = new Promise(function(resolve,reject){
  resolve(csvToDataObj("stockdata.csv"))})
.then(dataObj=>formatDataObj(dataObj))
.then(formattedDataObj=>plotData(formattedDataObj))



// window.onload = function () {
//   var chart = new CanvasJS.Chart("chartContainer",
//   {
//     zoomEnabled: true,      
    
//     title:{
//      text: "Chart With Date-Time Stamps Inputs"       
//    },

//    data: [
//    {        
//     type: "area",
//     xValueType: "dateTime",
//     dataPoints: [                  
//             { x: 1088620200000, y :71},
//             { x: 1104517800000, y : 55 },
//             { x: 1112293800000, y:  50 },
//             { x: 1136053800000, y : 65 },
//             { x: 1157049000000, y : 95 },
//             { x: 1162319400000, y : 68 },
//             { x: 1180636200000, y : 28 },
//             { x: 1193855400000, y : 34 },
//             { x: 1209580200000, y : 14 },
//             { x: 1230748200000, y : 34 },
//             { x: 1241116200000, y : 44 },
//             { x: 1262284200000, y : 84 },
//             { x: 1272652200000, y : 4  },
//             { x: 1291141800000, y : 44 },
//             { x: 1304188200000, y : 11 }
//     ]
//   }
//   ]
// });

//   chart.render();
// }












