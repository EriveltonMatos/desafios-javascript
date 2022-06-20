//Acessar a lista de números de telefone das pessoas cadastradas no sistema e impremi-la, verificando se há mais de um número em algum cadastro.

const cliente = {
    nome:"Erivelton",
    idade:25,
    cpf:"05788966373",
    fones:["85987738290","85900887899"]
}

cliente.fones.forEach(fone => console.log(fone))