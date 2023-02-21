const toastLiveExample = document.getElementById('liveToast')

// Fetch all the forms we want to apply custom Bootstrap validation styles to
const formCadastroEmail = document.querySelector('.formCadastroEmail')

// Loop over them and prevent submission
formCadastroEmail.addEventListener('submit', event => {
    event.preventDefault()

    let emailTag = event.target.email
    let email = emailTag.value

    let isEmailValido = validaEmailServerSide(email)

    
    if (!isEmailValido) {
        console.log("E-mail invalido")
        emailTag.classList.add("is-invalid")
    } else {
        emailTag.classList.remove("is-invalid")
        console.log("E-mail valido")
        const toast = new bootstrap.Toast(toastLiveExample)
        toast.show()
    }
})

function validaEmailServerSide(email) {
    return email.includes("@")
}



