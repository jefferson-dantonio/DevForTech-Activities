
async function processFields() {

    let url = `https://api.tvmaze.com/shows`;
    
    fetch(url).then(response =>  response.json())
    .then(obj => {
        let element = document.getElementById("canvas")
        let table =  document.createElement("table")
        let th_name =  document.createElement("th")
        let th_rate =  document.createElement("th")
        let th_site =  document.createElement("th")
        
        th_name.innerHTML = 'Nome';
        table.appendChild(th_name);
        th_site.innerHTML ='Site Oficial';
        table.appendChild(th_site);
        th_rate.innerHTML ='Avaliação';
        table.appendChild(th_rate);

        element.appendChild(table);
        obj.forEach(attribute =>{

            let tr = document.createElement("tr")
            table.appendChild(tr);
            let td_name = document.createElement("td")
            let td_rate = document.createElement("td")
            let td_site = document.createElement("td")
            td_name.innerText = attribute.name;
            td_site.innerText = attribute.officialSite;
            td_rate.innerText = attribute.rating.average;
            tr.appendChild(td_name);
            tr.appendChild(td_site);
            tr.appendChild(td_rate);
            
           ;
       })

    }) 
}   

function clearFields(){
    let element = document.getElementById("canvas")
        
        let child = element.lastElementChild; 
        while (child) {
            element.removeChild(child);
            child = element.lastElementChild;
        }
    }

  
  