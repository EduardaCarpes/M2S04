class Animal{
   constructor(tipo, raça){
      this.tipo = tipo;
      this.raça = raça;
    }

    static CadastrarAnimal() {
        console.log("Cachorro cadastrado");
    }
    
}

let animal = new Animal("Cachorro", "pug");
console.log(animal);
Animal.CadastrarAnimal();