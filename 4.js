//Write a program to input week number and print week day.
week = (w)=>{
    if(w===1){
        console.log("sunday")
    }else if(w===2){
        console.log("monday")
    }else if(w===3){
        console.log("tuesday")
    }else if(w===4){
        console.log("wednesday")
    }else if(w===5){
        console.log("thursday")
    }else if(w===6){
        console.log("friday")
    }else if(w===7){
        console.log("saturday")
    }else{
        console.log(`enter a valid week number`)
    }
}
week(7)

//Write a program to input month number and print number of days in that month.
month = (num)=>{
    switch(true){
        case num===1 : return `january and it has 31 days`;
        break;
        case num===2 : return `february and it has 28 days`;
        break;
        case num===3 : return `march and it has 31 days`;
        break;
        case num===4 : return `april and it has 30 days`;
        break;
        case num===5 : return `may and it has 31 days`;
        break;
        case num===6 : return `june and it has 30 days`;
        break;
        case num===7 : return `july and it has 31 days`;
        break;
        case num===8 : return `august and it has 31 days`;
        break;
        case num===9 : return `september and it has 30days`;
        break;
        case num===10 : return `october and it has 31 days`;
        break;
        case num===11 : return `november and it has 30 days`;
        break;
        case num===12 : return `december and it has 31 days`;
        break;
        default : `enterd a valid number`;
    }
}
console.log(month(2));
