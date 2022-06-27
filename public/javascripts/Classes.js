class Aluno {
    constructor(nome, data, genero, email) {
        this.nome = nome;
        this.data = data;
        this.genero = genero;
        this.email = email;
    }

    get getNome() {
        return this.nome;
    }

    set setNome(nome) {
        this.nome = nome;
    }

    get getData() {
        this.data = data;
    }

    set setData(data) {
        this.data = data;
    }

    get getGenero() {
        return genero;
    }

    set setGenero(genero) {
        this.genero = genero;
    }

    get getEmail() {
        return this.email;
    }

    set setEmail(email) {
        this.email = email;
    }
}

class Disciplina {
    constructor(nome, docente) {
        this.nome = nome;
        this.docente = docente;
    }

    get getNome() {
        return this.nome;
    }

    set setNome(nome) {
        this.nome = nome;
    }

    get getDocente() {
        return this.docente;
    }

    set setDocente(docente) {
        this.docente = docente;
    } 
}

class Turma {
    constructor(nome, ano, responsavel, emailResponsavel, curso ) {
        this.nome = nome;
        this.ano = ano;
        this.responsavel = responsavel;
        this.emailRes = emailResponsavel;
        this.curso = curso;
    }

    get getNome() {
        return this.nome;
    }

    set setNome(nome) {
        this.nome = nome;
    }

    get getAno() {
        return this.ano;
    }

    set setAno(ano) {
        this.ano = ano;
    }

    get getResponsavel() {
        return this.responsavel;
    }

    set setResponsavel(responsavel) {
        this.responsavel = responsavel;
    }

    get getEmailRes() {
        return this.emailRes;
    }

    set setEmailRes(emailResponsavel) {
        this.emailRes = emailResponsavel;
    }

    get getCurso() {
        return this.curso;
    }

    set setCurso(curso) {
        this.curso = curso;
    }

}