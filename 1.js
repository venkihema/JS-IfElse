//program to find maximum between two numbers
function greater(num1,num2){
    if(num1>num2){
        console.log(`${num1} is greater than ${num2}`);
    }else if(num1===num2){
        console.log(`${num1} and ${num2} are equal values`);
    }else{
        console.log(`${num2} is greater than ${num1}`);
    }
}
greater(3,6);

//Write a program to find maximum between three numbers.

large = (a,b,c)=>{
    if(a>b && a>c){
        console.log(`${a} is larger than ${b} and ${c}`);
    }else if(b>a && b>c){
        console.log(`${b} is larger than ${a} and ${c}`);

    }else if(a==b && b==c){
        console.log(`${c} , ${a} and ${b} are equal values`);
    }else{
        console.log(`${c} is larger than ${a} and ${b}`);
    }
}
large(18,9,9);

//Write a program to check whether a number is negative, positive or zero.
positiveNegative = (num)=>{
    if(num>0){
        console.log(`${num} is a positive number`);
    }else if(num<0){
        console.log(`${num} is a negative number`);

    }else{
        console.log(` you have entered a number ${num}`);

    }
}
positiveNegative(8);
// do some simple calculations using switch case

let calculate = (num1,num2 , operator)=>{
    switch(true){
        case operator === "+" : console.log(num1+num2);
        break;
        case operator === "-" : console.log(num1-num2);
        break;
        case operator === "*" : console.log(num1*num2);
        break;
        case operator === "/" : console.log(num1/num2);
        break;
    }
}
calculate(16,8,"/");