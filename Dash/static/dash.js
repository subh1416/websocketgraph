const ctx = document.getElementById("myChart").getContext("2d");

const graphData = {
  type: "line",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "Temperature",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: ["rgba(143, 198, 230, 0.1)"],
        tension: 0.6,
      },
      {
        label: "Gyro",
        data: [19, 19, 3, 5, 2, 3],
        backgroundColor: ["rgba(73, 18, 230, 0.2)"],
        tension: 0.6,
      },
      {
        label: "Current",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: ["rgba(173, 98, 230, 0.5)"],
        tension: 0.6,
      },
      {
        label: "Battery",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: ["rgba(23, 198, 230, 0.7)"],
        tension: 0.6,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
  },
};
const myChart = new Chart(ctx, graphData);

function insertRow(value, value2, value3, value4) {
  var tr = document.createElement("tr"),
    tdvalue = document.createElement("td"),
    tdvalue1 = document.createElement("td"),
    tdvalue2 = document.createElement("td"),
    tdvalue3 = document.createElement("td"),
    docFrag = new DocumentFragment();

  tdvalue.textContent = `${Number(value)}`;
  tdvalue1.textContent = `${Number(value2)}`;
  tdvalue2.textContent = `${Number(value3)}`;
  tdvalue3.textContent = `${Number(value4)}`;

  tr.appendChild(tdvalue);
  tr.appendChild(tdvalue1);
  tr.appendChild(tdvalue2);
  tr.appendChild(tdvalue3);
  docFrag.appendChild(tr);
  return docFrag;
}

var socket = new WebSocket("ws://localhost:8000/ws/Dash/");

socket.onopen = function (e) {
  alert("Connection established");
};

socket.onmessage = function (e) {
  // table starts
  var table = document.getElementById("content");

  var djangoData = JSON.parse(e.data);
  console.log(djangoData);
  table.appendChild(
    insertRow(
      djangoData.value,
      djangoData.value2,
      djangoData.value3,
      djangoData.value4
    )
  )
  table.scrollBotton = table.scrollHeight;

  //Graph Script starts
  //For 1st graph
  var newGraphData = graphData.data.datasets[0].data;
  newGraphData.shift();
  newGraphData.push(djangoData.value);
  graphData.data.datasets[0].data = newGraphData;

  //For 2nd graph
  var newGraphData = graphData.data.datasets[1].data;
  newGraphData.shift();
  newGraphData.push(djangoData.value2);
  graphData.data.datasets[1].data = newGraphData;

  //For 3rd graph
  var newGraphData = graphData.data.datasets[2].data;
  newGraphData.shift();
  newGraphData.push(djangoData.value3);
  graphData.data.datasets[2].data = newGraphData;

  //For 4th graph
  var newGraphData = graphData.data.datasets[3].data;
  newGraphData.shift();
  newGraphData.push(djangoData.value4);
  graphData.data.datasets[3].data = newGraphData;

  myChart.update();

  

};

socket.onclose = function (e) {
  alert("Connection closed");
};
