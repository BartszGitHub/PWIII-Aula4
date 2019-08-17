import {Aluno, Pessoa, Viagem} from "./base-escola"


let ronqui = new Aluno("Rafael Ronqui")
let classi = new Pessoa()
let via = new Viagem()

classi.peso = 68
classi.altura = 1.74

via.tempoGasto = 2
via.velocidadeMedia = 100
via.rendimentoVeiculo = 10


console.log(`IMC:${classi.imc()}, Situação:${classi.classificar()}`)
console.log(`Distancia:${via.obterDistancia()}, Consumo:${via.obterConsumo()}`)