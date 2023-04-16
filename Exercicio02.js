class Tutor{
    constructor(nome, sobrenome, animal) {
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.animal = animal

    }
getFullTutor(){
    console.log(`Meu nome é ${this.nome} ${this.sobrenome} e tenho um  ${this.animal}`);
}
}


let tutor = new Tutor('Eduarda', 'Carpes', 'cachorro');
tutor.getFullTutor();