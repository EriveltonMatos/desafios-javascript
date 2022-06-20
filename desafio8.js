// Percorrer um objeto e extrair informações básicas de um cliente em um formato mais legível e de forma automatizada para fornecer a outros departamentos do banco.

const cliente = {
    nome: "Erivelton",
    idade: 25,
    cpf: "05788966373",
    fones: ["85987738290", "85900887899"],
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
    depositar:function (valor) {
        this.saldo += valor
    }
}

let relatorio = "";

for (let info in cliente){
    if (typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        continue
    }
    else {
        relatorio += `${info} ==> ${cliente[info]}
        `
    }
    
}

console.log(relatorio)


