function isEmpty(value) {
    return value === "";
}

function clean(id) {
    document.getElementById(id).value = "";
}

function isValid(value) {

    if (isEmpty(value) || isNaN(value)) {
        alert(`${value} não é um valor válido`);

        clean("inputValue");
        multiplicationTable.inputValue.focus();
        return false;
    }

    return true;

}

function resetFields() {
    var element = document.querySelector("div");
        
        let child = element.lastElementChild; 
        while (child) {
            element.removeChild(child);
            child = element.lastElementChild;
        }
    }

function calculateMultiplicationTable() {
    resetFields();
    
    let inputValue = multiplicationTable.inputValue.value;
    var resultList = document.getElementById("resultList");
    if (isValid(inputValue)) {

        let p = document.createElement("p");
        let ul = document.createElement("ul");
        p.innerText = "Resultado:"
        resultList.appendChild(p);
        resultList.appendChild(ul);
        for (let i = 1; i <= 10; i++) {
            let li = document.createElement("li");
            let br = document.createElement("br");
            
            li.className = "result"
            li.innerText = `${i} X ${inputValue} = ${i * inputValue}`;
            ul.appendChild(li);
            ul.appendChild(br);
        }    
        clean("inputValue");
        multiplicationTable.inputValue.focus();   
    }
}