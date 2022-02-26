let buttons = document.querySelectorAll("button");

// console.log(buttons);

let zero = document.querySelector("#number0Id");
let one = document.querySelector("#number1Id");
let two = document.querySelector("#number2Id");
let three = document.querySelector("#number3Id");
let four = document.querySelector("#number4Id");
let five = document.querySelector("#number5Id");
let six = document.querySelector("#number6Id");
let seven = document.querySelector("#number7Id");
let eight = document.querySelector("#number8Id");
let nine = document.querySelector("#number9Id");

let point = document.querySelector("#pointId");
let equel = document.querySelector("#resultId");
let plus = document.querySelector("#plusId");
let mines = document.querySelector("#minesId");
let multiplication = document.querySelector("#multiplicationId");
let division = document.querySelector("#divisionId");
let percent = document.querySelector("#percentId");
let mines_plus = document.querySelector("#mines_plusId");
let ac = document.querySelector("#acId");

let display1 = document.querySelector("#firstDisplay");
let display2 = document.querySelector("#secondDisplay");


function calculate (number1,process,number2){
    switch(process){
        case "+":
            return number1+number2;
        case "-":
            return number1-number2;
        case "*":
            return ((number1*number2)*10)%10==0 ? (number1*number2) : (number1*number2).toFixed(2);
        case "/":
            
            return (number1%number2 !=0) ? (number1/number2).toFixed(2) : (number1/number2);
        case "%":
            return ((number1*number2)/100);

    }
}



let numb = "";
let number1 ;
let number2 ;
let process ="";

zero.addEventListener("click", ()=>{
    if(numb!="0"){
        numb +="0";
        display2.innerText = numb;
}})
one.addEventListener("click", ()=>{
    numb +="1";
    display2.innerText = numb;
})
two.addEventListener("click", ()=>{
    numb +="2";
    display2.innerText = numb;
})
three.addEventListener("click", ()=>{
    numb +="3";
    display2.innerText = numb;
})
four.addEventListener("click", ()=>{
    numb +="4";
    display2.innerText = numb;
})
five.addEventListener("click", ()=>{
    numb +="5";
    display2.innerText = numb;
})
six.addEventListener("click", ()=>{
    numb +="6";
    display2.innerText = numb;
})
seven.addEventListener("click", ()=>{
    numb +="7";
    display2.innerText = numb;
})
eight.addEventListener("click", ()=>{
    numb +="8";
    display2.innerText = numb;
})
nine.addEventListener("click", ()=>{
    numb +="9";
    display2.innerText = numb;
})


point.addEventListener("click", ()=>{
    if(numb.indexOf(".") == -1){
        numb +=".";
        display2.innerText = numb;
         
    }
    
})
plus.addEventListener("click", ()=>{
    if(numb!=0){
        process="+";
        number1 = Number(numb);
        numb = "";
        display1.innerText=(number1+" "+process);
    }
})
mines.addEventListener("click", ()=>{
    if(numb!=0){
        process="-";
        number1 = Number(numb);
        numb = "";
        display1.innerText=(number1+" "+process);
    }
})
multiplication.addEventListener("click", ()=>{
    if(numb!=0){
        process="*";
        number1 = Number(numb);
        numb = "";
        display1.innerText=(number1+" "+process);
    }
})
division.addEventListener("click", ()=>{
    if(numb!=0){
        process="/";
        number1 = Number(numb);
        numb = "";
        display1.innerText=(number1+" "+process);
    }
})

percent.addEventListener("click", ()=>{
    if(numb!=0){
        process ="%";
        number1 = Number(numb);
        numb = "";
        display1.innerText=(number1+" "+process);
    };
    
})
mines_plus.addEventListener("click", ()=>{
    if((numb!=0)&&(numb.indexOf("-") == -1)){
        numb = "-"+numb;
        display2.innerText = numb;
 }   
})
ac.addEventListener("click", ()=>{
    location.reload();
})

equel.addEventListener("click", ()=>{
    if(numb!=0){
        number2 =Number(numb);
   
        display2.innerText = calculate(number1,process,number2);
        display1.innerText = "";

        numb = String(calculate(number1,process,number2));
        number2 ;
        

        
    }
})

console.log(numb);



