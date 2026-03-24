function ler(){
    var req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var divConteudo = document.getElementById("conteudo");
            divConteudo.textContent = this.responseText; 
        }
    }

    req.open("GET", "informacoes.txt", true);
    req.send();
}

function gerar() {
    var valor = document.getElementById("txtNumero").value;
    var div = document.getElementById("divNumero"); 
    div.innerHTML = "Carregando...";
    var req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            var div = document.getElementById("divNumero"); 
            div.innerHTML = this.responseText;
        }
    }

    req.open("GET", "servidor.php?numero=" + valor, true); 
    req.send(); 
}
