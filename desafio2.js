//Consultar um objeto utilizando uma lista de chaves relativas a informações de clientes gerada pelo sistema e printar o resultado na tela

const cliente = {
    nome:"Erivelton",
    idade:25,
    cpf:"05788966373"
}

const chaves = ["nome", "idade", "cpf"]

chaves.forEach(info => console.log(cliente[info]))