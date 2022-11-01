//write a program to check whether a character is alphabet or not
character = (character)=>{
    if(character>="a" && character<="z"){
        console.log(`you have entered an alphabet ${character}`);
    }else if(character>="A" && character<="Z"){
        console.log(`you have entered an alphabet ${character}`);
    }else{
        console.log(`kindly enter an alphabet`);
    }
}
character("U");

//Write a program to input any alphabet and check whether it is vowel or consonant.
vowels = (letters)=>{
    if(letters==="a" || letters==="e" || letters==="i" ||letters==="o" ||letters==="u"){
        console.log(`entered ${letters} is owel`);
    }else if(letters>="a" && letters<="z" || letters>="A" && letters<="Z"){
        console.log(`entered ${letters} is consonant`);
    }else{
        console.log(`kindly enter an alphabet to know whether it is an owel or a consonant`);
    }
}
vowels("o");
//Write a program to input any character and check whether it is alphabet, digit or special character.
charOrNot = (ch)=>{
    if(ch>="a" && ch<="z" || ch>="A" && ch<="Z"){
        console.log(`enterd ${ch} is an alphabet`);
    }else if(ch>=0 || ch<=0){
        console.log(`enterd ${ch} is a number`);       
    }else{
        console.log(`enterd ${ch} is a symbol`);  
    }
}
charOrNot("7")

//Write a C program to check whether a character is uppercase or lowercase alphabet.
upperLower = (ch)=>{
    if(ch>="a" && ch<="z"){
        console.log(`entered ${ch} is in lower case`);
    }else if(ch>="A" && ch<="Z"){
        console.log(`entered ${ch} is in Upper case`);
    }
}
upperLower("N")