
async function searchPsalm() {


    let psalm = document.getElementById("get-psalm").value;
    if (psalm == null || psalm == "") {
        alert("Você precisa digita o numero do salmo");
        return;
    }

    if (isNaN(psalm)) {8
        alert("Você Precisa digitar um numero");
        return;
    }
    let url = `https://www.abibliadigital.com.br/api/verses/nvi/sl/${psalm}`;

    fetch(url).then(response => response.json())
        .then(obj => {

            if(obj === undefined || obj === null || obj.length <= 0 || obj.msg === 'Chapter not found'){
               alert("Salmo não encontrado, existem salmo do 1 ao 150");
                cleanSeach();
            }
          
            let name = document.getElementById("set-name");
            let authors = document.getElementById("set-authors");
            let group = document.getElementById("set-group");

            name.value = obj.book.name;
            authors.value = obj.book.author;
            group.value = obj.book.group;

            let verses = obj.verses;
            verses.forEach(v => {
                let ol = document.getElementById("get-ol");
                let li = document.createElement("li");

                li.innerText = v.text;
                ol.appendChild(li);
            })

        });
}

function cleanSeach() {

    let psalm = document.getElementById("get-psalm");
    let name = document.getElementById("set-name");
    let authors = document.getElementById("set-authors");
    let group = document.getElementById("set-group");


    psalm.value="";
    name.value = "";
    authors.value = "";
    group.value = "";

    let element = document.getElementById("get-ol")

    let child = element.lastElementChild;
    while (child) {
        element.removeChild(child);
        child = element.lastElementChild;
    }
    document.getElementById("get-psalm").focus();
}