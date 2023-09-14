
function creaTombola() {
    let table = document.getElementById("myTable");
    let numero = 1;
    //calcolo precedentemente quante celle e righe mi servono 

    for (let i = 0; i < 8; i++) {
        let row = table.insertRow(i);

        for (let i = 0; i < 10; i++) {
            let cell = row.insertCell(i);
            cell.innerHTML = numero++;
        }
    }
}

creaTombola();