// Criar uma função com arrow Function
const galeria = () => {

    //selecionar todas as imagens miniaturas
    var miniaturas = document.querySelectorAll(".galeria_miniaturas img")

    // Iterar sobre miniaturas 
    miniaturas.forEach(function (miniatura) {
        // console.log(miniatura)

        miniatura.addEventListener("click", function () {
            // console.log(this.src)

            //substituir o caminho e nome da imagem em destaque
            document.getElementById("foto_grande").src = this.src
        })


    })
    // console.log(miniaturas)

}

galeria()