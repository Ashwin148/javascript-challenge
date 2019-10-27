// from data.js
var tableData = data;
// YOUR CODE HERE!
function showData(tableData){
 var tbody = d3.select("tbody");
 tbody.html("");
 tableData.forEach((ufoInfo) => {
   var row = tbody.append("tr");
   Object.entries(ufoInfo).forEach(([key, value]) => {
     var cell = row.append("td");
     cell.text(value);
   });
 });
};
var button = d3.select("#filter-btn");
button.on("click", function() {
   // Select the input element and get the raw HTML node
   var inputField = d3.select("#datetime");
   var inputValue = inputField.property("value");
   var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
   showData(filteredData);
});
showData(tableData);