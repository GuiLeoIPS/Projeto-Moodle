window.onload = async () => {
    let alunos = await fetch("/api/pesquisarDisciplina", {
        method: "GET"
    
    });

    let disciplina = await fetch("/api/disciplina/", {
        method: "GET"
    
    });

    let aluDis = await fetch("/api/pesquisarDisciplina/", {
        method: "GET"
    
    });

    let alunos_array = await alunos.json();

    let aluDis_array = await aluDis.json();

    let discplina_array = await disciplina.json();
   
    let table_container = document.getElementById("corpo_tabela");

    let dis_container = document.getElementById("disciplina_list");

    for(let disciplina of discplina_array){
        
        //Criar Botão disciplina
        let dis = document.createElement("a");
        dis.innerText = disciplina.nome_disciplina;
        dis.classList.add("loginbutton");
        //dis.addEventListener("click",changeTable(disciplina.nome_disciplina));

        (function(disciplina){
            dis.onclick = function() {
                const alldivs = document.getElementsByClassName("disciplina_div");
                for(let div of alldivs){
                    div.style.display = "none";
                }
                if(document.getElementById(disciplina) != null){
                    document.getElementById(disciplina).style.display="block";
                }
            }
        })(disciplina.nome_disciplina);

        dis_container.appendChild(dis);
        
        
        //Criar Div Disciplina
        let div_disciplina = document.createElement("div");
        div_disciplina.id = disciplina.nome_disciplina;
        div_disciplina.classList.add("disciplina_div");

        //Criar Tabela Disciplina
        let table_disciplina = document.createElement("table");
        table_disciplina.classList.add("w3-table-all");

        //Criar o cabecalho da Tabela
        let cabecalho_disciplina = document.createElement("tr");
        cabecalho_disciplina.id = "cabecalhotabela";
        let thNome = document.createElement("th");
        thNome.innerText = "Nome";
        let thDisciplina = document.createElement("th");
        thDisciplina.innerText = "Disciplina";
        let thNota = document.createElement("th");
        thNota.innerText = "Nota";
        cabecalho_disciplina.appendChild(thNome);
        cabecalho_disciplina.appendChild(thDisciplina);
        cabecalho_disciplina.appendChild(thNota);

        //Adicionar à Tabela o Cabecalho
        table_disciplina.appendChild(cabecalho_disciplina);

        //Construir o TBody da Tabela
        let tbody_disciplina = document.createElement("tbody");
        tbody_disciplina.id = disciplina.nome_disciplina;
        for(let aludis of aluDis_array){
            if(aludis.nome_disciplina == disciplina.nome_disciplina){
                //Popular o TBody
                let tr = document.createElement("tr");
                let tdNome = document.createElement("td");
                let tdDisciplina = document.createElement("td");
                let tdNota = document.createElement("td");
                tdNome.innerText = aludis.nome_aluno;
                tdDisciplina.innerText = aludis.nome_disciplina;
                tdNota.innerText = aludis.nota;
                tr.appendChild(tdNome);
                tr.appendChild(tdDisciplina);
                tr.appendChild(tdNota);
                tbody_disciplina.appendChild(tr);
            }
        }

        //Adicionar o TBody à tabela
        table_disciplina.appendChild(tbody_disciplina);
        //Adicionar a Tabela ao Div Disciplina
        div_disciplina.appendChild(table_disciplina);
        //Adicionar a div disciplina ao Container Tabela
        table_container.appendChild(div_disciplina);
    }
 
}


