var calculatorHistory = new Array();

function insert(value) {
    let displayValue = document.getElementById("display").innerHTML;


    

    if (checkPoint(value, displayValue)){
        return;
    }

    if (checkPercent(value, displayValue)){
        return;
    }



    if (value.toString().includes("+")) {
        if (displayValue.toString().includes("+") || displayValue.toString().length < 1) {
            return;
        }

        if (displayValue.toString().includes("-") || displayValue.toString().includes("*") || displayValue.toString().includes("/")) {
            return;
        }
    }

    if (value.toString().includes("-")) {
        if (displayValue.toString().includes("-") || displayValue.toString().length < 1) {
            return;
        }

        if (displayValue.toString().includes("+") || displayValue.toString().includes("*") || displayValue.toString().includes("/")) {
            return;
        }

    }

    if (value.toString().includes("*")) {
        if (displayValue.toString().includes("*") || displayValue.toString().length < 1) {
            return;
        }

        if (displayValue.toString().includes("-") || displayValue.toString().includes("+") || displayValue.toString().includes("/")) {
            return;
        }

    }

    if (value.toString().includes("/")) {
        if (displayValue.toString().includes("/") || displayValue.toString().length < 1) {
            return;
        }

        if (displayValue.toString().includes("-") || displayValue.toString().includes("+") || displayValue.toString().includes("*")) {
            return;
        }

    }

   

    if (value.toString().includes("=")) {
        executeCalculate(displayValue);
        save();
        return;
    }


    if (displayValue.toString().length > 18) {
        return;
    }



    displayValue += value;
    document.getElementById("display").innerHTML = displayValue;
}

function clean() {
    document.getElementById("display").innerHTML = "";
}

function backspace() {
    let text = document.getElementById("display").innerHTML;
    console.log(text);

    document.getElementById("display").innerHTML = text.toString().slice(0, -1);
}

function executeCalculate(value) {

    if (value.toString().includes("+")) {
        let result = getResult(value, "+")
        document.getElementById("display").innerHTML = result;
        return;
    }

    if (value.toString().includes("-")) {
        let result = getResult(value, "-")
        document.getElementById("display").innerHTML = result;
        return;
    }

    if (value.toString().includes("*")) {
        let result = getResult(value, "*")
        document.getElementById("display").innerHTML = result;
        return;
    }

    if (value.toString().includes("/")) {
        let result = getResult(value, "/")
        document.getElementById("display").innerHTML = result;
        return;
    }

    if (value.toString().includes("%")) {
        let result = getResult(value, "%")
        document.getElementById("display").innerHTML = result;
        return;
    }


}

function getResult(value, operation) {

    let operationIndex = value.toString().indexOf(operation);
    let value01;
    let value02;
    if (value.substring(operationIndex + 1, operationIndex + 2) == '%') {
        return "Formatação inválida";
    }

    if (value.substring(0, operationIndex).includes("%")) {
        let values = value.split(operation);

        if (values[0].toString().indexOf('%') == values[0].length - 1) {
            value01 = parseFloat(values[0].toString().slice(0, -1)) / 100;
        } else {

            let values = value.split(operation)[0].split('%');

            value01 = parseFloat(percent(values));

        }

    } else {
        value01 = parseFloat(value.split(operation)[0]);
    }

    if (value.substring(operationIndex + 1, value.length).includes("%")) {
        let values = value.split(operation);

        if (values[1].toString().indexOf('%') == values[01].length - 1) {
            value02 = parseFloat(values[1].toString().slice(0, -1)) / 100;
        } else {

            let values = value.split(operation)[1].split('%');
            value02 = parseFloat(percent(values))
        }

    } else {
        value02 = parseFloat(value.split(operation)[1]);
    }

    let result = calcultate(value01, value02, operation)

    calculatorHistory.push(`${value} = ${result}`);
    
    return result;
}

function percent(values) {

    if (values.length > 1) {
        return values[0] * (values[1] / 100);
    } else {
        return values[0] / 100;
    }
}

function calcultate(value01, value02, operation) {
    switch (operation) {
        case '+':
            return value01 + value02;
            break;

        case '-':
            return value01 - value02;
            break;

        case '/':
            return value01 / value02;
            break;

        case '*':
            return value01 * value02;
            break;

        case '%':
            let values = [value01, value02];
            return percent(values);
            break;
    }

}

function checkPoint(value, displayValue){

    if (value.toString().includes(".")) {
        if (displayValue.toString().split(".").length - 1 > 0 && (!displayValue.toString().includes("+") && 
            !displayValue.toString().includes("-") && !displayValue.toString().includes("*") && !displayValue.toString().includes("/"))) {
            return true;
        }
        if (displayValue.toString().split(".").length - 1 > 1 && (displayValue.toString().includes("+") ||
        displayValue.toString().includes("-") || displayValue.toString().includes("*") || displayValue.toString().includes("/"))) {
            return true;
        }
    }
}

function checkPercent(value, displayValue){

    if (value.toString().includes("%")) {
        if (displayValue.toString().split("%").length - 1 > 0 && (!displayValue.toString().includes("+") && 
            !displayValue.toString().includes("-") && !displayValue.toString().includes("*") && !displayValue.toString().includes("/")) || displayValue.toString().length < 1) {
            return true;
        }
        if (displayValue.toString().split("%").length - 1 > 1 && (displayValue.toString().includes("+") ||
        displayValue.toString().includes("-") || displayValue.toString().includes("*") || displayValue.toString().includes("/"))) {
            return true;
        }
    }

}

function showCalculatorHistory(text) {
    alert(text);
}

function save() {

    let title = "calculatorHistory"

    let blob = new Blob([calculatorHistory], {
        type: "text/plain;charset=utf-8"

    });
    saveAs(blob, title + ".txt");
}


async function loadFile(file){
    let text =await file.text();
    showCalculatorHistory(text);
}