console.log ("select an operation to continue")
console.log ("1.addition")
console.log ("2.multiplication")
console.log ("3.subtraction")
console.log ("4.division")

let operation= window.promt("operations")

if (operation= "1") {
    num1= window.promt("input your first number?")
    num2= window.promt("input your second number?")
    alert("the sum is " +(num1+num2))
}
else if (operation= "2") {
    num1= window.promt("input your first number?")
    num2= window.promt("input your second number?")
    alert("the sum is " +(num1*num2))
}

else if (operation= "3") {
    num1= window.promt("input your first number?")
    num2=window.prompt("input your second number?")
    alert("the sum is " +(num1-num2))
}

else if (operation= "4") {
    num1= window.promt("input your first number?")
    num2=window.prompt("input your second number?")
    alert("the sum is " +(num1%num2))
}

else{
    alert("invalid entry number")
}
        
