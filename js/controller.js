function generateTableHead(table, data) {
    console.log("Genererer!");
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }
  
  function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }

  function createATable(){
    let table = document.querySelector("table");
    let data = Object.keys(model.companies[0]);
    generateTable(table, model.companies);
    generateTableHead(table, data);
//       document.getElementById('tables').innerHTML +="</table><table>"
//       generateTableHead(table, model.companies);
   }