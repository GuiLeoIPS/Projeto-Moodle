window.onload = async () => {
    let disciplinas = await fetch("/api/disciplina", {
        method: "GET"
    
    });


    let disciplinas_array = await disciplinas.json();
   
    let container = document.getElementById("disciplinas-table");

    for(let disciplina of disciplinas_array) {
        let tr = document.createElement("tr");
        let tdNome = document.createElement("td");
        let tdDocente = document.createElement("td");
        let tdEdit = document.createElement("td");
        let tdDelete = document.createElement("td");
        tdNome.innerText = disciplina.nome_disciplina;
        tdDocente.innerText = disciplina.docente_disciplina;
        tdEdit.innerHTML = '<a onclick="idgetteredita('+disciplina.id_disciplina+')" class="button">Editar</a>';
        tdDelete.innerHTML = '<a id="'+disciplina.id_disciplina+'" onclick="idgetterelimina('+disciplina.id_disciplina+')" class="button">Eliminar</a>';
        tr.appendChild(tdNome);
        tr.appendChild(tdDocente);
        tr.appendChild(tdEdit);
        tr.appendChild(tdDelete);
        container.appendChild(tr);
    }
}


function idgetterelimina (id){
    document.getElementById('id04').style.display = "block";
   document.getElementById('IDElimina').value = id;
}

function idgetteredita (id){
    document.getElementById('id02').style.display = "block";
   document.getElementById('IDEdita').value = id;
}