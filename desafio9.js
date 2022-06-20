// Percorrer um objeto, verificar se existe a chave `dependentes` e, caso exista, enviar uma mensagem de oferta de seguro 

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
    depositar: function (valor) {
        this.saldo += valor
    }
}


function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes")){
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
}

oferecerSeguro(cliente)