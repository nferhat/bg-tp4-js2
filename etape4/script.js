const persons = [
    { nom: 'Nom', prenom: 'Prénom', points: 10 },
    { nom: 'Nom', prenom: 'Prénom', points: 10 },
    { nom: 'Nom', prenom: 'Prénom', points: 10 },
];
let lignes = 0;
let Totalpoints = 0;
init()

function init() {
    for (let person of persons) {
        doInsert(person.nom, person.prenom, person.points)
    }
}

function consoleTableau() {
    console.log(persons)
}

function doInsert(nom, prenom, points) {
    lignes = lignes + 1;
    Totalpoints = Totalpoints + points
    doInsertRowTable(lignes, nom, prenom, points);
}

let elm1 = document.getElementById('p1');
elm1.innerText = lignes + " ligne(s)";

let elm2 = document.getElementById('p3');
elm2.innerText = "Total points = "+ Totalpoints

function doInsertRowTable(num, nom, prenom, points) {
    const table = document.getElementById('tableau')
    let row = document.createElement('tr')
    row.setAttribute('class', 'row');

    let col1 = document.createElement('td');
    col1.setAttribute('class', 'col_number')
    col1.innerText = num;
    row.appendChild(col1)

    let col2 = document.createElement('td');
    col2.setAttribute('class', 'col_text');
    col2.innerText = nom;
    row.appendChild(col2)

    let col3 = document.createElement('td');
    col3.setAttribute('class', 'col_text');
    col3.innerText = prenom;
    row.appendChild(col3)

    let col4 = document.createElement('td');
    col4.setAttribute('class', 'col_number');
    col4.innerText = points;
    row.appendChild(col4)

    let col5 = document.createElement('td');
    col5.setAttribute('class', 'col_chkbox');
    let chkbox = document.createElement('input');
    chkbox.setAttribute('type', 'checkbox');
    col5.appendChild(chkbox);
    row.appendChild(col5)

    table.appendChild(row);
}
