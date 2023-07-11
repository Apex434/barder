// // console.log("apexexcoba");

// var fullName = 'Prosper'; 

// let myAge = 25;


// const isAMale = true;

// console.log(
//     `
//     My name is ${fullName}
//     I am ${myAge}
//     I am ${isAMale}
//     `
// );


function myFunction() {
    var firstNum, secondNum, operation;

    firstNum = Number(prompt("Enter the first number: "))
    operation = prompt("Enter the operation (+,-,*,/): ")
    secondNum = Number(prompt("Enter the second number: "))


    if (operation == "+") {
        result = firstNum + secondNum;

        alert("Your answer is : " + result);
    } else if (operation == "-") {
        result = firstNum - secondNum;
        alert("Your answer is : " + result);
    } if (operation == "*") {
        result = firstNum * secondNum;
        alert("Your answer is : " + result);
    } else if (operation == "/") {
    result = firstNum / secondNum;
    alert("Your answer is : " + result);
    }
}

myFunction()