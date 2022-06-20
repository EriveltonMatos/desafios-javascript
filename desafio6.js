// Verificar a melhor forma de agregar a informação de um novo dependente ao objeto Cliente
const cliente = {
    nome:"Erivelton",
    idade:25,
    cpf:"05788966373",
    fones:["85987738290","85900887899"],
    dependentes: [{
        nome: "Davi",
        parentesco: "Filho",
        dataNasc: "11/11/2013"
    }]
}

cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: "Filha",
    dataNasc: "01/29/2011"
})

console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="01/29/2011")

console.log(filhaMaisNova[0].nome)
