function Pet(){
    return new Promise((resolve) => {
        setTimeout(()=> {
            console.log('carregando')
            resolve()
        }, 5000)

    })
}

async function cadastrarPet(){
    console.log('Cadastrando Pet no sistema')

    await Pet((resolve) => {})

    console.log('Pet cadastrado')

}

cadastrarPet()