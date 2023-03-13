function trocaSwitch() {
    /*alert("Vamos trocar switch");*/

    /*vamos recuperar a pagina html aqui no JS*/
    /*a variavel html vai representar todo o dicumento*/
    let html = document.documentElement
    /*vamos verificar se o documento html tem a classe light
    sera q a lista de classes contem light*/
    if (html.classList.contains("light")) {
        /*contem a classe laght, vamos retirar*/
        html.classList.remove("light");
    }
    else{
        /*como n contem a classe light, vamos add*/
        html.classList.add("light");
    }
}