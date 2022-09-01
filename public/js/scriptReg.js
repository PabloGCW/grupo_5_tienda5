window.addEventListener("load", function(){
    let formulario = document.querySelector("form.registerFormulario");

    formulario.addEventListener("submit", function(e){

        let erroresAddress = [];
        let erroresName = [];
        let erroresLastName = [];
        let erroresMobile = [];
        let erroresCP = [];
        let erroresDNI = [];
        let erroresEmail = [];
        // let erroresAvatar = [];
        let erroresPassword = [];

        let campoAddress = document.querySelector("input.address")

        if(campoAddress.value == ""){
            var mensErrorDomicilio = document.getElementById('mensErrorDomicilio');
            mensErrorDomicilio.style.color = 'rgb(241, 16, 16)', 
            mensErrorDomicilio.style.listStyle = 'none',
            mensErrorDomicilio.style.fontSize = '12px';
            erroresAddress.push("El campo de domicilio tiene que estar completo")
        } else {(campoAddress.value != "")
             erroresAddress = []    
        }


        // let forAddress=[
        //     {val:campoAddress.value !== "", msg:"No puede estar vacía"},
        //     {val:campoAddress.value.length > 3,msg:"Debe ser mayor a 3 letras"}
        //   ]
        //   let results = forAddress.filter( (e) => e.val === false)
        //   let errorsAddress = results.map( result => result.msg)


        let campoName = document.querySelector("input.name") 
        if(campoName.value == ""){
            var mensErrorNombre = document.getElementById('mensErrorNombre');
            mensErrorNombre.style.listStyle = 'none',
            mensErrorNombre.style.color = 'rgb(241, 16, 16)', 
            mensErrorNombre.style.fontSize = '12px';
            erroresName.push("El campo de nombre tiene que estar completo")
        }

        let campoLastName = document.querySelector("input.lastname")
        if(campoLastName.value == ""){
            var mensErrorApellido = document.getElementById('mensErrorApellido');
            mensErrorApellido.style.listStyle = 'none',
            mensErrorApellido.style.color = 'rgb(241, 16, 16)', 
            mensErrorApellido.style.fontSize = '12px';
            erroresLastName.push("El campo de apellido tiene que estar completo")
        }

        let campoMobile = document.querySelector("input.mobile")
        if(campoMobile.value == ""){
            var mensErrorTelefono = document.getElementById('mensErrorTelefono');
            mensErrorTelefono.style.listStyle = 'none',
            mensErrorTelefono.style.color = 'rgb(241, 16, 16)', 
            mensErrorTelefono.style.fontSize = '12px';
            erroresMobile.push("El campo de teléfono tiene que estar completo")
        }
        // let campoAvatar = document.querySelector("input.avatar")
        // if(campoAvatar.value == ""){
        //     erroresAvatar.push("El campo de imagen tiene que estar completo")
        // }
        let campoPassword = document.querySelector("input.password")
        if(campoPassword.value == ""){
            var mensErrorPassword = document.getElementById('mensErrorPassword');
            mensErrorPassword.style.listStyle = 'none',
            mensErrorPassword.style.color = 'rgb(241, 16, 16)', 
            mensErrorPassword.style.fontSize = '12px';
            erroresPassword.push("El campo de contraseña tiene que estar completo")
        }
        let campoCP = document.querySelector("input.cp")
        if(campoCP.value == ""){
            var mensErrorCP = document.getElementById('mensErrorCP');
            mensErrorCP.style.listStyle = 'none',
            mensErrorCP.style.color = 'rgb(241, 16, 16)', 
            mensErrorCP.style.fontSize = '12px';
            erroresCP.push("El campo de Códito Postal tiene que estar completo")
        }
        let campoDNI = document.querySelector("input.dni")
        if(campoDNI.value == ""){
            var mensErrorDNI = document.getElementById('mensErrorDNI');
            mensErrorDNI.style.listStyle = 'none',
            mensErrorDNI.style.color = 'rgb(241, 16, 16)', 
            mensErrorDNI.style.fontSize = '12px';
            erroresDNI.push("El campo de DNI tiene que estar completo")
        }
        let campoEmail = document.querySelector("input.email")
        if(campoEmail.value == ""){
            var mensErrorEmail = document.getElementById('mensErrorEmail');
            mensErrorEmail.style.listStyle = 'none',
            mensErrorEmail.style.color = 'rgb(241, 16, 16)', 
            mensErrorEmail.style.fontSize = '12px';
            erroresEmail.push("El campo de email tiene que estar completo")
        }


         if (erroresAddress.length > 0 || erroresName.length > 0 || erroresLastName.length > 0 || erroresEmail.length > 0 || erroresMobile.length > 0 || erroresPassword.length > 0 || erroresDNI.length > 0 || erroresCP.length > 0){
            e.preventDefault();

            let ulErroresAddress = document.querySelector("div.erroresAddress ul")
            let ulErroresName = document.querySelector("div.erroresName ul")
            let ulErroresLastName = document.querySelector("div.erroresLastName ul")
            let ulErroresDNI = document.querySelector("div.erroresDNI ul")
            let ulErroresCP = document.querySelector("div.erroresCP ul")
            let ulErroresMobile = document.querySelector("div.erroresMobile ul")
            let ulErroresPassword = document.querySelector("div.erroresPassword ul")
            // let ulErroresAvatar = document.querySelector("div.erroresAvatar ul")
            let ulErroresEmail = document.querySelector("div.erroresEmail ul")

            for (let i = 0; i < erroresAddress.length; i++){
                ulErroresAddress.innerHTML = "<li>" + erroresAddress[i] + "</li>"
            }
            for (let i = 0; i < erroresName.length; i++){
                ulErroresName.innerHTML = "<li>" + erroresName[i] + "</li>"
            }
            for (let i = 0; i < erroresLastName.length; i++){
                ulErroresLastName.innerHTML = "<li>" + erroresLastName[i] + "</li>"
            }
            for (let i = 0; i < erroresMobile.length; i++){
                ulErroresMobile.innerHTML = "<li>" + erroresMobile[i] + "</li>"
            }
            for (let i = 0; i < erroresCP.length; i++){
                ulErroresCP.innerHTML = "<li>" + erroresCP[i] + "</li>"
            }
            for (let i = 0; i < erroresEmail.length; i++){
                ulErroresEmail.innerHTML = "<li>" + erroresEmail[i] + "</li>"
            }
            for (let i = 0; i < erroresDNI.length; i++){
                ulErroresDNI.innerHTML = "<li>" + erroresDNI[i] + "</li>"
            }
            for (let i = 0; i < erroresPassword.length; i++){
                ulErroresPassword.innerHTML = "<li>" + erroresPassword[i] + "</li>"
            }
         }

    })
})