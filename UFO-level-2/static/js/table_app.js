// Use D3 to select the table body

var table = d3.select("table");
var tbody = d3.select("tbody");
table.attr("class", "table table-striped");
// console.log(data)


var incident = data

function dumpTable(data) {
    tbody.html("");



    // Select the button
    var button = d3.select("#filter-btn");

    // Select the form
    var form = d3.select("#form");

    // Create event handlers 
    d3.selectAll(".filter").on("change", runEnter);
    // button.on("click", runEnter);
    // form.on("submit", runEnter);

    data.forEach((incident) => {
        var row = tbody.append("tr");
        Object.entries(incident).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}
dumpTable(incident);
// console.log(incident)


// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select(this).select("input");

    // var inputState = d3.select("#state");
    console.log(inputElement)
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    // var inputStateValue = inputState.property('value');

    console.log(inputValue);
    var filters = {}
    var filterid = inputElement.attr("id")
    Object.entries(filters)
    if (inputElement) {
        filters[filterid] = inputValue
    };
    var filteredData = incident

    // var filteredData = filteredData.filter(incident => incident.datetime === inputValue);
    Object.entries(filters).forEach(([key, value]) => {
        filteredData = filteredData.filter(row => row[key] == value)
    });

    console.log(filteredData);
    dumpTable(filteredData);

}
