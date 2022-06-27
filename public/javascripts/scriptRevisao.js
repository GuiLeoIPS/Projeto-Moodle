window.onload = async () => {
    let revisoes = await fetch("/api/revisao", {
        method: "GET"
    
    });


    let revisoes_array = await revisoes.json();
   
    let container = document.getElementById("revisoes-table");

    for(let i= 0; i < revisoes_array.length; i++) {
   // for(let revisao of revisoes_array) {
    let tr = document.createElement("tr");
        let tdNome = document.createElement("td");
        let tdDocente = document.createElement("td");

        tdNome.innerText = revisoes_array[i].nome_disciplina;
        tdDocente.innerText = revisoes_array[i].docente_disciplina;

        //<td><a onclick="document.getElementById('id02').style.display='block'" class="button">Editar</a></td>

        tr.appendChild(tdNome);
        tr.appendChild(tdDocente);
        tr.appendChild(<td><a onclick="document.getElementById('id02').style.display='block'" class="button">Editar</a></td>);
        container.appendChild(tr);
    }
}