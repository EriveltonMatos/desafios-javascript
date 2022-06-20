//Gerar uma função que permita a criação de novos clientes a partir de um modelo

function Cliente (nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        depositar += valor
    }
}

const erivelton = new Cliente ("Erivelton", "8484993894", "erivelton_", 100)
console.log(erivelton)