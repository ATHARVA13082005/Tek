// Global array to store customer information
let customers = [
    {
        name: "John Doe",
        email: "john@example.com",
        age: 35,
        height: 160,
        weight: 65
    },
    {
        name: "Krishnan",
        email: "krishnan@example.com",
        age: 30,
        height: 170,
        weight: 73
    }
];


// Function to add customer
function addCustomer() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    // Check whether all fields are filled
    if (name === "" || email === "" || age === "" ||
        height === "" || weight === "") {

        alert("Please enter all details");
        return;
    }

    // Create customer object
    let customer = {
        name: name,
        email: email,
        age: Number(age),
        height: Number(height),
        weight: Number(weight)
    };

    // Add object to global array
    customers.push(customer);

    // Display customers
    displayCustomers();

    // Clear form
    clearForm();
}


// Function to display customers
function displayCustomers() {

    // Get table body
    let tableBody = document.getElementById("customerBody");

    // Clear previous table data
    tableBody.innerHTML = "";

    // Iterate through customer objects
    customers.forEach(function(customer) {

        // Create table row
        let row = document.createElement("tr");

        // Create table cells
        let nameCell = document.createElement("td");
        let ageCell = document.createElement("td");
        let heightCell = document.createElement("td");
        let weightCell = document.createElement("td");

        // Add customer data
        nameCell.textContent = customer.name;
        ageCell.textContent = customer.age;
        heightCell.textContent = customer.height;
        weightCell.textContent = customer.weight;

        // Add cells to row
        row.appendChild(nameCell);
        row.appendChild(ageCell);
        row.appendChild(heightCell);
        row.appendChild(weightCell);

        // Add row to table body
        tableBody.appendChild(row);
    });
}


// Function to clear form
function clearForm() {

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("age").value = "";
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
}


// Submit button event
document.getElementById("customerForm").addEventListener("submit", function(event) {

    event.preventDefault();
    addCustomer();

});


// Clear button event
document.getElementById("clearButton").addEventListener("click", function() {

    clearForm();

});


// Display existing customers when page loads
displayCustomers();