var triangle = (a,b,c)=>{
    let sum = a+b+c;
    if(sum===180 && a>0 && b>0 && c>0){
       console.log(`is a valid triangle`)
    }else{
        console.log(`is not a valid triangle`);
    }
}
triangle(90,60,30);

//Write a program to input all sides of a triangle and check whether triangle is valid or not.
var triangleSide = (a,b,c)=>{
if(a+b>c && a+c>b && b+c>a){
    console.log(`is a valid triangle`);
}else{
    console.log(`is not a valid triangle`);
}
}
triangleSide(7,4,10);
//write a program to check whether triangle is equilateral, scalene or isosceles?

var triangleType = (a,b,c)=>{
if(a===b && b===c){
    console.log(`is a equilateral triangle`);
}else if(a===b ||a==c || b ==c){
    console.log(`is a scalene triangle`);
}else{
    console.log(`is a isosceles triangle`);
}
}
triangleType(4,4,4)












