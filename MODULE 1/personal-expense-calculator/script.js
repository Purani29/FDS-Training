// Store all expenses
let expenses = [];


// Function to add an expense
function addExpense() {

    // Get income
    let income = Number(
        document.getElementById("income").value
    );

    // Get expense details
    let expenseName = document.getElementById("expenseName").value;

    let expenseAmount = Number(
        document.getElementById("expenseAmount").value
    );

    let category = document.getElementById("category").value;


    // Validate input
    if (income <= 0) {
        alert("Please enter a valid income");
        return;
    }

    if (expenseName === "" || expenseAmount <= 0) {
        alert("Please enter valid expense details");
        return;
    }


    // Create expense object
    let expense = {
        name: expenseName,
        amount: expenseAmount,
        category: category
    };


    // Add expense to array
    expenses.push(expense);


    // Display expense
    displayExpenses();


    // Calculate summary
    calculateSummary();


    // Clear input fields
    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
}


// Function to display expenses
function displayExpenses() {

    let expenseList =
        document.getElementById("expenseList");

    expenseList.innerHTML = "";


    // Loop through expenses
    for (let i = 0; i < expenses.length; i++) {

        let expense = expenses[i];

        let li = document.createElement("li");

        li.innerHTML =
            expense.name +
            " - ₹" +
            expense.amount +
            " (" +
            expense.category +
            ")";

        expenseList.appendChild(li);
    }
}


// Function to calculate summary
function calculateSummary() {

    let income = Number(
        document.getElementById("income").value
    );


    // Calculate total expenses
    let totalExpenses = 0;


    // Loop through expenses
    for (let i = 0; i < expenses.length; i++) {

        totalExpenses =
            totalExpenses + expenses[i].amount;
    }


    // Calculate savings
    let savings = income - totalExpenses;


    // Display values
    document.getElementById("totalIncome").innerText =
        income;

    document.getElementById("totalExpenses").innerText =
        totalExpenses;

    document.getElementById("savings").innerText =
        savings;


    // Find highest expense category
    let categoryTotals = {};


    for (let i = 0; i < expenses.length; i++) {

        let category = expenses[i].category;
        let amount = expenses[i].amount;


        if (categoryTotals[category]) {

            categoryTotals[category] =
                categoryTotals[category] + amount;

        } else {

            categoryTotals[category] = amount;
        }
    }


    let highestCategory = "-";
    let highestAmount = 0;


    // Find highest category
    for (let category in categoryTotals) {

        if (categoryTotals[category] > highestAmount) {

            highestAmount =
                categoryTotals[category];

            highestCategory = category;
        }
    }


    document.getElementById("highestCategory").innerText =
        highestCategory;
}