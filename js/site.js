//displays a message to the user
function getNumbers() {
    let startValue = 0;
    let endValue = 100;

    //get the numbers from ui
    startValue = document.getElementById("startValue").value;
    endValue = document.getElementById("endValue").value;

    //covert the input into integers 
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    //check to see if input is numbers
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {

        //if true, get the numbers from the start value to the end value
        let numbers = generateNumbers(startValue, endValue);

        //display the numbers on the page
        displayNumbers(numbers)

    } else {

    }

    //alter user
}
//generate numbers from startvalue to end value
function generateNumbers(startValue, endValue) {

    //generate the array
    let numbers = [];
    for (let index = startValue; index <= endValue; index++) {

        numbers.push(index);
    }
    return numbers;
}

function displayNumbers(numbers) {

    let startValue = numbers[0];
    let endIndex = numbers.length;
    let tableBody = document.getElementById("results");
    tableBody.innerHTML = "";

    for (let index = 0; index < endIndex; index++) {
        let number = numbers[index];

        if (number % 2 == 0) {

            tableRow = `<tr><td class="evenDisplay">${number}</td> </tr>`;

        } else {
            tableRow = `<tr><td>${number}</td></tr>`;
        }
            tableBody.innerHTML += tableRow;
    }

}