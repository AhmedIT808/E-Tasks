
// // // 1-Check The Number Is Even or Odd 

// // let number = prompt("Please enter the number: ");
// // number = Number(number);
// // if (number % 2 === 0) {
// //     console.log("The number is even: " + number);
// // } else {
// //     console.log("The number is odd: " + number);
// // }

// // // 2-Compute Circle Area and Circumference
// // let radius =prompt("pleaes enter Radius  ");
// // radius =Number(radius);
// // if(radius > 0)
// //     {
// //         let area = Math.PI * radius * radius;
// //         let Circumference = 2 * Math.PI * radius;
// //         console.log("circle of area " + area);
// //         console.log("circumference of a circle " +Circumference );
// //     } 
// //     else {
// //         console.log("Enter the correct number, it must be positive")
// //     }

// //     // 3-print the sum of two numbers 
// //     let num1 = prompt("Enter the first number");
// //     num1 = Number(num1);
    
// //     let num2 = prompt("Enter the second number");
// //     num2 = Number(num2);
    
// //     let sum = num1 + num2;
    
// //     console.log("The sum numbers i " + sum);
    

// //     // 4-6- check from two given integers, whether one is positive and another one is negative

// // let n1 = Number(prompt("Enter the first number "));
// // let n2 = Number(prompt("Enter the second number "));

// // if (n1 > 0 && n2 > 0) 
// // {
// //     console.log("the number  positive ");
// // } else {
// //     console.log("the  number  negative.");
// // }




// for(let i = 1; i <= 15; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBizz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Bizz");
//     } else {
//         console.log(i);
//     }
// }


const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3'); 
const btn4=document.querySelector('.btn4');
const h1 = document.querySelector('h1'); 
const body = document.querySelector('body');


function changestyle1() {
  body.style.background = 'linear-gradient(to right, rgb(0, 123, 255), rgb(255, 193, 7))'; 
  body.style.color = 'white';
}

function changestyle2() {
    body.style.background = 'linear-gradient(to right, rgb(255, 239, 213), rgb(54, 151, 161))'; 
  body.style.color = 'black';
}

btn1.addEventListener('click', changestyle1);
btn2.addEventListener('click', changestyle2);





function changestyle3() {
  h1.style.color = 'white';
  body.style.background = '#0866FF';
  h1.style.position = 'absolute';
  h1.style.top = '50%';
  h1.style.left = '50%';
  h1.style.transform = 'translate(-50%, -50%)';
  h1.style.boxShadow = 'inset 0 0 50px crimson';

}

btn3.addEventListener('click', changestyle3);



