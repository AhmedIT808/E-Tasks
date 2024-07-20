
// 1-Check The Number Is Even or Odd 

let number = prompt("Please enter the number: ");
number = Number(number);
if (number % 2 === 0) {
    console.log("The number is even: " + number);
} else {
    console.log("The number is odd: " + number);
}

// 2-Compute Circle Area and Circumference
let radius =prompt("pleaes enter Radius  ");
radius =Number(radius);
if(radius > 0)
    {
        let area = Math.PI * radius * radius;
        let Circumference = 2 * Math.PI * radius;
        console.log("circle of area " + area);
        console.log("circumference of a circle " +Circumference );
    } 
    else {
        console.log("Enter the correct number, it must be positive")
    }

    // 3-print the sum of two numbers 
    let num1 = prompt("Enter the first number");
    num1 = Number(num1);
    
    let num2 = prompt("Enter the second number");
    num2 = Number(num2);
    
    let sum = num1 + num2;
    
    console.log("The sum numbers i " + sum);
    

    // 4-6- check from two given integers, whether one is positive and another one is negative

let n1 = Number(prompt("Enter the first number "));
let n2 = Number(prompt("Enter the second number "));

if (n1 > 0 && n2 > 0) 
{
    console.log("the number  positive ");
} else {
    console.log("the  number  negative.");
}

