
document.addEventListener("DOMContentLoaded", ()=> {

    fetch("../header.html")
        .then((response)=>response.text())
        .then((data)=>{
            document.getElementById("header").innerHTML=data
        })
        .catch((error) => console.error("Erro ao carregar o header", error))

    fetch("../footer.html")
        .then((response)=>response.text())
        .then((data)=>{
            document.getElementById("footer").innerHTML=data
        })
        .catch((error) => console.error("Erro ao carregar o footer", error))

})