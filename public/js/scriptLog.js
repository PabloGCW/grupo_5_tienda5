window.addEventListener("load", function(){
    let formulario = document.querySelector("form.formInicioSesion");

    formulario.addEventListener("submit", function(e){

        let erroresEmail = [];
        let erroresPassword = [];

      
        let campoPassword = document.querySelector("input.password")
        if(campoPassword.value == ""){
            erroresPassword.push("El campo de contraseña tiene que estar completo")
        }
        let campoEmail = document.querySelector("input.email")
        if(campoEmail.value == ""){
            erroresEmail.push("El campo de email tiene que estar completo")
        }


         if (erroresEmail.length > 0 || erroresPassword.length > 0){
            e.preventDefault();

            let ulErroresPassword = document.querySelector("div.erroresPassword ul")
            let ulErroresEmail = document.querySelector("div.erroresEmail ul")

            for (let i = 0; i < erroresEmail.length; i++){
                ulErroresEmail.innerHTML = "<li>" + erroresEmail[i] + "</li>"
            }

            for (let i = 0; i < erroresPassword.length; i++){
                ulErroresPassword.innerHTML = "<li>" + erroresPassword[i] + "</li>"
            }
         }

    })
})