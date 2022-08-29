console.log(5)
window.addEventListener("load", function(){
    let formulario = document.querySelector("form.formulario");

    formulario.addEventListener("submit", function(e){

        let erroresName = [];
        let erroresDescription = [];
        let erroresSKU = [];
        let erroresPrice = [];


        let campoName = document.querySelector("input.name") 
        if(campoName.value == ""){
            erroresName.push("El campo de nombre tiene que estar completo")
        }

        let campoDescription = document.querySelector("textarea.description")
        if(campoDescription.value == ""){
            erroresDescription.push("El campo de descripción tiene que estar completo")
        }

        let campoPrice = document.querySelector("input.price")
        if(campoPrice.value == ""){
            erroresPrice.push("El campo de precio tiene que estar completo")
        }
 
        let campoSKU = document.querySelector("input.sku")
        if(campoSKU.value == ""){
            erroresSKU.push("El campo de SKU tiene que estar completo")
        }


         if (erroresSKU.length > 0 || erroresName.length > 0 || erroresDescription.length > 0 || erroresPrice.length > 0){
            e.preventDefault();

            let ulErroresSKU = document.querySelector("div.erroresSKU ul")
            let ulErroresName = document.querySelector("div.erroresName ul")
            let ulErroresDescription = document.querySelector("div.erroresDescription ul")
            let ulErroresPrice = document.querySelector("div.erroresPrice ul")

            for (let i = 0; i < erroresSKU.length; i++){
                ulErroresSKU.innerHTML = "<li>" + erroresSKU[i] + "</li>"
            }
            for (let i = 0; i < erroresName.length; i++){
                ulErroresName.innerHTML = "<li>" + erroresName[i] + "</li>"
            }
            for (let i = 0; i < erroresDescription.length; i++){
                ulErroresDescription.innerHTML = "<li>" + erroresDescription[i] + "</li>"
            }
            for (let i = 0; i < erroresPrice.length; i++){
                ulErroresPrice.innerHTML = "<li>" + erroresPrice[i] + "</li>"
            }
         }

    })
})