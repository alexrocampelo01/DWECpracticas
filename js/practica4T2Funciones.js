
alert (calc (2,5,"^"))
function calc (num1 , num2, operador){
    let result;
    switch(operador){
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "%":
            result = num1 % num2;
            break;
        case "^":
            result = num1 ** num2;
            break;
    }
    return result;
}