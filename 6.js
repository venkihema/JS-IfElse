//write a code to find profit and loss
var profitOrLoss = (ap, sp)=>{
    
    if(ap>sp){
        var amount = ap-sp;
        console.log(`loss, ${amount}`);
    }
    else{
        amount = sp-ap;
        console.log(`profit, ${amount}`);
    }
}
profitOrLoss(1300, 3000)

//write a program to input marks of five subjects and calculate percentage and grade

var grade = (marks)=>{
let total = 100;
let percentage=marks/total*100
switch(true){
    case percentage>=90 : console.log("A Grade");
    break;
    case percentage>=80 : console.log("B Grade");
    break;
    case percentage>=70 : console.log("C Grade");
    break;
    case percentage>=60 : console.log("D Grade");
    break;
    case percentage>=40 : console.log("E Grade");
    break;
    default : console.log("FAIL");

}
}
grade(34);

//write a program to input basic salary of an employee and calculate its gross salary according to following
//conditions

var gross = (basic)=>{
if(basic<=10000){
    let hra = basic*20/100;
    let da = basic*80/100;
    let grosssalary = basic+hra+da
    console.log(grosssalary);
}else if(basic<=20000){
    let hra = basic*25/100;
    let da = basic*90/100;
    let grosssalary = basic+hra+da;
    console.log(grosssalary);
}else if(basic>20000){
    let hra = basic*30/100;
    let da = basic*95/100;
    let grosssalary = basic+hra+da;
    console.log(grosssalary);
}
}
gross(30000)

//write a program to input electricity unit charges and calculate total electricity bill 
//according to given condition
let ebill = (units)=>{
    if(units<=50){
        let amount = units+units*0.50;
        console.log(amount);
    }else if(units<=100){
        let amount = units+units*0.75;
        console.log(amount);
    }else if(units<=250){
        let amount = units+units*1.20;
        console.log(amount);
    }else{
        let amount = units+units*2;
        console.log(amount);
    }
}
ebill(251)
