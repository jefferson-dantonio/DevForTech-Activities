class CalculoMedia {
    constructor(aluno, disciplina_aluno, nota1, nota2){
        this._aluno = aluno,
        this._disciplina_aluno = disciplina_aluno,
        this._nota1 = nota1,
        this._nota2 = nota2,
        this._media
    }

    get media(){
        return this._media;
    }

    calculaMedia(){
        this._media = (this._nota1 +this._nota2) / 2
    }

    mostrarAlunoMedia(){
        this.calculaMedia()
        console.log(`aluno: ${this._aluno}, media: ${this._media}`)
    }

    mostrarAlunoNotas(){
        console.log(`aluno: ${this._aluno}, nota 1: ${this._nota1}, nota 2: ${this._nota2}`)
    }

    mostrarMedia(){
        this.calculaMedia()
        console.log(`media: ${this._media}`)
    }
}


const calculo = new CalculoMedia("João", "Matematica", 9, 9.5);
calculo.mostrarAlunoMedia()
calculo.mostrarAlunoNotas()
calculo.mostrarMedia();