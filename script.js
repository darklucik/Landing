let firstNum = Number(prompt("Выберите первое число"))
let symbol = prompt("Выберите действие(+ - * /)")
let secondNum = Number(prompt("Выберите второе число"))

if (symbol=="+") {
        alert(firstNum + secondNum)
    }
    if (symbol=="-") {
        alert(firstNum - secondNum)
    }
    if (symbol=="*") {
        alert(firstNum * secondNum)
    }
    if (symbol=="/") {
        alert(firstNum / secondNum)
    }
