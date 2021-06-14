// from data.js
var tableData = data;

// YOUR CODE HERE!

//Select button and input 
var button = d3.select("#filter-btn");
var inputField = d3.select("datetime")

//Function to filter by input date
function filterByDate(date) {
    return date.datetime === intput;
};

// List of sightings to display
var currentList = tableData.filter(filterByDate);

// Use D3 to select table to input data
var table = d3.select("#ufo-table");

//Loop through each sighting using forEach and Object.entries
tableData.forEach(function(ufo){
    console.log(ufo);
    table.append('tr');
    Object.entries(ufo).forEach(function([key,value]){
        var cells = table.appen('td');
        cells.text(value);
    });
});