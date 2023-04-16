const cadastroPet = new Promise((encontrado, nãoEncontrado) => {
    const nome = 'Bart';

    if(nome === 'Bart') {
        encontrado('O nome do cachorro foi encontrado')
    } else {
        nãoEncontrado('o nome do cachorro não foi encontrado')
    }
    })
    cadastroPet.then((dado) => {
        console.log(dado);

    })
