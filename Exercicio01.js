class Pessoa{
    constructor(nome, sobrenome, idade) {
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.idade = idade
}
}
 let pessoa = new Pessoa('Eduarda', 'Carpes', '24');
console.log(pessoa);


class Cachorro{
    constructor(raça, apelido, cor) {
    this.raça = raça,
    this.apelido = apelido,
    this.cor = cor
}
}
let cachorro = new Cachorro('Pug', 'Piratinha', 'abricó');
console.log(cachorro);


class Localização{
    constructor(cidade, bairro, CEP) {
    this.cidade = cidade;
    this.bairro = bairro,
    this.CEP = CEP
}
}
let localização = new Localização('Florianópolis', 'Barra da Lagoa', '88000100');
console.log(localização);