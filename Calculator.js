let num1
let num2 
let output

    add.onclick = function add(){
    num1 = document.getElementById("number1").value;
    num2 = document.getElementById("number2").value;
    output = document.getElementById("result");
    result.innerHTML = num1*1+num2*1;
}

minus.onclick = function minus(){
    num1 = document.getElementById("number1").value;
    num2 = document.getElementById("number2").value;
    output = document.getElementById("result");
    result.innerHTML = num1*1-num2*1;
}

multiply.onclick = function multiply(){
    num1 = document.getElementById("number1").value;
    num2 = document.getElementById("number2").value;
    output = document.getElementById("result");
    result.innerHTML = num1*1 * num2*1;
}

divide.onclick = function divide(){
    num1 = document.getElementById("number1").value;
    num2 = document.getElementById("number2").value;
    output = document.getElementById("result");
    result.innerHTML = num1*1 / num2*1;
}

repeat.onlick = function repeat() {
    number1.innerHTML = document.getElementById("result").value;
    console.log(number1.innerHTML);
}
