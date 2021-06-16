// from data.js
var tableData = data;

//Select button and execute event handler
var button = d3.select("#filter-btn");
button.on("click", buttonClick);

//Code to execute on the button click
function buttonClick(){

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and value
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    //Function to filter by input date
    function filterByDate(tableData) {
        return tableData.datetime === inputValue;
    };

    // List of sightings to display
    var currentList = tableData.filter(filterByDate);

    // Use D3 to select table to input data
    var table = d3.select("#ufo-table");

    //Loop through each sighting using forEach and Object.entries
    currentList.forEach(function(ufo){
    console.log(ufo);
    table.append('tr');
    Object.entries(ufo).forEach(function([key,value]){
        var cells = table.append('td');
        cells.text(value);
        });
    });
};




