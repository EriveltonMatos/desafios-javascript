//Cria uma classe apartir dos exemplos anteriores

class Cliente{
    constructor(nome,cpf,email,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    }
    depositar(valor){
        this.saldo += valor
    }
    exibirSaldo(){
        console.log(this.saldo)
    }
}

const erivelton = new Cliente("Erivelton","88448822232","eriveltonmatos@hotmail.com", 100)

erivelton.exibirSaldo()

console.table(erivelton)

