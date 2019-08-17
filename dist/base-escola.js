"use strict";
exports.__esModule = true;
var Aluno = /** @class */ (function () {
    function Aluno(nome) {
        this.nome = nome;
    }
    Aluno.prototype.exibir = function () {
        console.log("nome: " + this.nome);
    };
    return Aluno;
}());
exports.Aluno = Aluno;
var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    Pessoa.prototype.imc = function () {
        return this.peso / (this.altura * this.altura);
    };
    Pessoa.prototype.classificar = function () {
        if (this.imc() < 18.5) {
            return ("Abaixo do peso");
        }
        else if (this.imc() <= 24.9) {
            return ("Peso normal");
        }
        else if (this.imc() <= 29.9) {
            return ("Pr\u00E9-obesidade");
        }
        else if (this.imc() <= 34.9) {
            return ("Obesidade Grau I");
        }
        else if (this.imc() <= 39.9) {
            return ("Obesidade Grau II");
        }
        else {
            return ("Obesidade Grau III");
        }
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
var Viagem = /** @class */ (function () {
    function Viagem() {
    }
    Viagem.prototype.obterDistancia = function () {
        return this.tempoGasto * this.velocidadeMedia;
    };
    Viagem.prototype.obterConsumo = function () {
        return this.obterDistancia() / this.rendimentoVeiculo;
    };
    return Viagem;
}());
exports.Viagem = Viagem;
