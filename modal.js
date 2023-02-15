const exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('hidden.bs.modal', event => {
    console.log("ok")
})

const save = document.getElementById('save')
save.addEventListener('click', event => {
    console.log("save")

    // adicionar aqui o js a ser executado antes de fechar o modal
    // ...

    document.getElementById('close').click()
})