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
    // For Date
    var inputElementDate = d3.select("#datetime");
    var dateInput = inputElementDate.property("value").toLowerCase();
    // For City
    var inputElementCity = d3.select("#city");
    var cityInput = inputElementCity.property("value").toLowerCase();
    // For State
    var inputElementState = d3.select("#state");
    var stateInput = inputElementState.property("value").toLowerCase();

    inputList = [dateInput, cityInput, stateInput]
    
    inputDict = {
        dateInput : datetime,
        cityInput : city,
        stateInput : state
    };
    // Function to go through list of inputs and filter only by values given

    function filterInputList(tableData){
        // Create a list of inputs given by user
        newInputList = [];
        inputList.forEach((input) => {
            if (input !== null || input !== ""){
                newInputList.push(input);
            };
        });
        // Compare list of given inputs to keys of dictionary to gain value if key is present and push value to new list
        inputDictValue = [];
        inputDictKeys = Object.keys(inputDict);
        newInputList.forEach((input) => {
            if (inputDictKeys.includes(input)){
                inputDictValue.push(inputDict[value])
            };
        });
        // Create list for tableData with dictionary value
        tableDataWithValues = []
        inputDictValue.forEach((input) => {
            tableDataWithValues.push(tableData.input)
        });
        return tableDataWithValues
    };

    // List of sightings to display
    var currentList = tableData.filter(filterInputList);

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




