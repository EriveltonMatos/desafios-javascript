// Adicionar uma propriedade que permita "ações", para que os clientes que estão cadastrados consigam fazer operações bancárias

const cliente = {
    nome:"Erivelton",
    idade:25,
    cpf:"05788966373",
    fones:["85987738290","85900887899"],
    dependentes: [{
        nome: "Davi",
        parentesco: "Filho",
        dataNasc: "11/11/2013"
    },
    {
        nome: "Samia Maria",
        parentesco: "Filha",
        dataNasc: "01/29/2011"
    }],
    saldo: 100,
    depositar:function(valor){
    this.saldo += valor
    }
    }


console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)
