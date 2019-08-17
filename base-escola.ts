export class Aluno {

    constructor (public nome:string){}

    exibir(){
        console.log("nome: "+ this.nome)
    }

}

export class Pessoa {

    peso:number
    altura:number

    imc(){
        return this.peso/(this.altura*this.altura)
    }

    classificar(){

        if (this.imc() < 18.5) {
            return ( `Abaixo do peso`)
        }
        else if (this.imc() <= 24.9) {
            return ( `Peso normal`)
        }
        else if (this.imc() <= 29.9) {
            return ( `Pré-obesidade`)
        }
        else if (this.imc() <= 34.9) {
            return ( `Obesidade Grau I`)
        }
        else if (this.imc() <= 39.9) {
            return ( `Obesidade Grau II`)
        }
        else {
            return ( `Obesidade Grau III`)
        }

    }

}

export class Viagem {
    tempoGasto: number
    velocidadeMedia: number
    rendimentoVeiculo: number

    obterDistancia(){
        return this.tempoGasto * this.velocidadeMedia
    }

    obterConsumo() {
        return this.obterDistancia() / this.rendimentoVeiculo
    }
}