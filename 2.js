//Write a program to check whether a number is divisible by 5 and 11 or not.
division = (num)=>{
    if(num%5===0 && num%11===0){
        console.log(`${num} is divisible by  both 5 and 11`);
    }else if(num%5===0 && num%11!=0){
        console.log(`${num} is  divisible by 5 only`);
   
    }else if(num%5!=0 && num%11===0){
        console.log(`${num} is  divisible by 11 only`);

    }else{
        console.log(`${num} is  not divisible by both 5 and 11`);
    }
}
division(56);

//Write a program to check whether a number is even or odd.
evenOdd = (num)=>{
    if(num===0){
        console.log(`${num} is neither even nor odd number`);
    }else if(num%2===0){
        console.log(`${num} is an even number`);
    }else{
        console.log(`${num} is an odd number`);
    }
}
evenOdd(0);

//Write a program to check whether a year is leap year or not.
leapYear = (year)=>{
if(year%4===0 & year%100!=0){
    console.log(`${year} is a leap year`);
}else if(year%400===0){
    console.log(`${year} is not a leap year`);
}
}
leapYear(1996);

