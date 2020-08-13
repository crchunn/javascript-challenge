// Use D3 to select the table body

var table = d3.select("table");
var tbody = d3.select("tbody");
table.attr("class", "table table-striped");

// Use D3 to select the table

// Use D3 to set the table class to `table table-striped`

// BONUS: Dynamic table
// Loop through an array of grades and build the entire table body from scratch
var incidents = data;

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("date");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(incidents);

    var filteredData = incidents.filter(incident => incident.datetime === inputValue);

    console.log(filteredData);



    incidents.forEach(([datetime, city, state, country, shape, durationMinutes, comments]) => {
        var row = tbody.append("tr");
        row.append("td").text(datetime);
        row.append("td").text(city);
        row.append("td").text(state);
        row.append("td").text(country);
        row.append("td").text(shape);
        row.append("td").text(durationMinutes);
        row.append("td").text(comments);
    });
}