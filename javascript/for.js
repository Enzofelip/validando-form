const form = document.querySelector("#form");
const inputName  = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputSenha = document.querySelector("#password");
const inputJob = document.querySelector("#job");
const inputText = document.querySelector("#menssage");
const progress = document.querySelector("#progress");
const modal = document.querySelector("#modal");
const close = document.querySelector("#close-button");
const menssage = document.querySelector(".modal-menssage");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    //validação do nome
    if(inputName.value === ""){
        exibiindoModal("Preencher o campo nome");
        return;
    }

    //validação do email
    if(inputEmail.value === "" || !validationEmail(inputEmail.value)){
        exibiindoModal("Preencher o campo email");
        return;
    }

    //Validação da senha
    if(!validationSenha(inputSenha.value, 8)){
        exibiindoModal("Preencha o campo senha");
        return;
    }


    //validação do select
    if(inputJob.value === ""){
        exibiindoModal("Preencher o campo select");
        return;
    }

    //validação do campo menssagem
    if(inputText.value === ""){
        exibiindoModal("Preencher o campo de menssagem");
        return;
    }

    // Se todos os campos estiverem preenchidos enviaremos o formulario
    form.submit();
})

const validationEmail = (email) => {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]{2,}$/
    );

    if(emailRegex.test(email)){
        return true;
    }

    return false;
}

const validationSenha = (senha, minDigitos) => {

  if(senha.length >= minDigitos){
    return true;
  }

  return false;
}

form.addEventListener('input', ()=> {

    const totalInput = form.elements.length - 1;
    console.log(totalInput)

    numerodeInput = 0;

    for(let i = 0; i < totalInput; i++ ){
        if(form.elements[i].value){
            numerodeInput++
        }
    }

    progress.value = (numerodeInput / totalInput) * 100

})

const exibiindoModal = (msg) => {
    menssage.textContent = msg;
    modal.style.display = "block";
}

close.addEventListener('click', ()=> {
    modal.style.display = "none";
})

window.addEventListener('click', (e) => {
    if(e.target === modal){
        modal.style.display = "none";
    }
})