window.onload = async () => {
    let alunos = await fetch("/api/aluno", {
        method: "GET"
    
    });


    let alunos_array = await alunos.json();
   
    let container = document.getElementById("alunos-table");

    for(let i = 0; i < alunos_array.length; i++) {
        let tr = document.createElement("tr");
        let tdNome = document.createElement("td");
        let tdData = document.createElement("td");
        let tdGenero = document.createElement("td");
        let tdEmail = document.createElement("td");
        let tdEdit = document.createElement("td");
        let tdDelete = document.createElement("td");
//"<tr><td>"+1+"</td></tr>"
        tdNome.innerText = alunos_array[i].nome_aluno;
        tdData.innerText = new Date (alunos_array[i].dtnsc_aluno).toLocaleDateString() ;
        tdGenero.innerText = alunos_array[i].genero_aluno;
        tdEmail.innerText = alunos_array[i].email_aluno; 
        tdEdit.innerHTML = '<a onclick="idgetteredita('+alunos_array[i].id_aluno+')" class="button">Editar</a>';
        tdDelete.innerHTML = '<a id="'+alunos_array[i].id_aluno+'" onclick="idgetterelimina('+alunos_array[i].id_aluno+')" class="button">Eliminar</a>';
        tr.appendChild(tdNome);
        tr.appendChild(tdData);
        tr.appendChild(tdGenero);
        tr.appendChild(tdEmail);
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
