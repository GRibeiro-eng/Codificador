let entradaTexto = document.getElementById("entradaTexto");
let saidaTexto = document.getElementById("saidaTexto");

function criptografar(){ 
    let texto = entradaTexto.value; 
    texto = texto.toLowerCase();

    let resultadoCriptografia = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    if (texto != ''){ 
        //document.getElementById("saidaTexto").style.display = "none"; 
        document.getElementById("saidaTexto").innerHTML = "" + resultadoCriptografia; 
        document.getElementById("saidaTexto").style.fontSize = "24px";
        document.getElementById("saidaTexto").style.justifyContent = "flex-start"; 
        // document.getElementById("saidaTexto").style.gap = "30%";
        console.log(resultadoCriptografia); 
    } else { alert("Insira um texto!"); }
}

function descriptografar(){
    let texto = entradaTexto.value;
    texto = texto.toLowerCase();

    let resultadoDescriptografia = texto.replace(/enter/g, "e").replace(/imes/, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    if (texto != ''){
        //document.getElementById("saidaTexto").style.display = "none";
        document.getElementById("saidaTexto").innerHTML = "" + resultadoDescriptografia;
        document.getElementById("saidaTexto").style.fontSize = "24px";  
        document.getElementById("saidaTexto").style.justifyContent = "flex-start";
        // document.getElementById("saidaTexto").style.gap = "30%";
        console.log(resultadoDescriptografia);
    } else {
        document.getElementById("saidaTexto").innerHTML= ' <img src="High quality products 1 1.svg" alt="Pessoa procurando algo"> <p class="saidaTexto__primeiro">Nenhuma mensagem encontrada <br></p> <p class="saidaTexto__segundo">Digite um texto que vocÃª deseja criptografar ou descriptografar</p>'; 
        //alert("Insira um texto!"); 
        }
    }