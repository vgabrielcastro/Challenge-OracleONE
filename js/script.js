const result = document.querySelector('.resultado')

function aviso(){
	alert('Primeiro digite algo antes de apertar em algum botão!!')
}


function tiraAcento(){
	texto = document.querySelector("textarea").value.toLowerCase();
	textoAtualizado = texto;
	textoAtualizado = textoAtualizado.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a')
  	textoAtualizado = textoAtualizado.replace(new RegExp('[ÉÈÊ]','gi'), 'e')
  	textoAtualizado = textoAtualizado.replace(new RegExp('[ÍÌÎ]','gi'), 'i')
  	textoAtualizado = textoAtualizado.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o')
  	textoAtualizado = textoAtualizado.replace(new RegExp('[ÚÙÛ]','gi'), 'u')
  	textoAtualizado = textoAtualizado.replace(new RegExp('[Ç]','gi'), 'c')
  return textoAtualizado;                  
}

function encriptar(){

    var txtDigitado = document.getElementById("entrada").value;

    if (txtDigitado != "") {
        var txtCripto = txtDigitado.split(/e/g).join("enter").split(/i/g).join("imes").split(/a/g).join("ai").split(/o/g).join("ober").split(/u/g).join("ufat");
        document.getElementById("saida").value = txtCripto;
        document.getElementById("entrada").value = "";
        document.getElementById("aviso").innerHTML = "&nbsp";
    } else {
        document.getElementById("aviso").innerText = "Digite ou Cole Algo Para Criptografar";
    }
};

function descriptar(){
    
    var txtColado = document.getElementById("entrada").value;
    
    if (txtColado != "") {
        var txtCripto = txtColado.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        document.getElementById("saida").value = txtCripto;
        document.getElementById("entrada").value = "";
        document.getElementById("aviso").innerHTML = "&nbsp";
    } else {
        document.getElementById("aviso").innerText = "Digite ou Cole Algo Para Descriptografar";
    }
};

async function copiaECola() {
	
	let text = document.getElementById("saida").value;
	await navigator.clipboard.writeText(text);
	document.getElementById("saida").value = "";
	document.getElementById("entrada").value = text;
	document.getElementById("aviso").innerHTML = "&nbsp";
	}

function limpeza(){
	document.getElementById("saida").value = "";
	document.getElementById("entrada").value = "";
	document.getElementById("aviso").innerHTML = "&nbsp";
}

function share(){
	if (navigator.share !== undefined) {
		navigator.share({title: "", text: "", url: "",})
	}
};
