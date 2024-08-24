function encriptar() {
    let text = document.getElementById("container__text").value;
    let container_text = document.getElementById("container__text__copy");
    let image = document.getElementById("img__main");

    let textCrifrado = text
        .replace(/a/gi, "alt")
        .replace(/e/gi, "err")
        .replace(/i/gi, "inst")
        .replace(/o/gi, "lol")
        .replace(/u/gi, "usma");

    if (text.length != 0) {
        container_text.textContent = textCrifrado;
        document.getElementById("text_hidden").style.opacity = "1";
        image.src = "./images/undraw_convert_re_l0y1.svg";
        document.getElementById("container__text").value = "";
    } else {
        image.src = "./images/undraw_exams_re_4ios.svg";
        document.getElementById("text_hidden").style.opacity = "0";
        document.getElementById("danger__text").innerHTML = "Debes ingresar algun texto";
    }
}

function desencriptar() {
    let text = document.getElementById("container__text").value;
    let container_text = document.getElementById("container__text__copy");
    let image = document.getElementById("img__main");

    let textCrifrado = text
        .replace(/alt/gi, "a")
        .replace(/err/gi, "e")
        .replace(/inst/gi, "i")
        .replace(/lol/gi, "o")
        .replace(/usma/gi, "u");

    if (text.length != 0) {
        container_text.textContent = textCrifrado;
        document.getElementById("text_hidden").style.opacity = "1";
        document.getElementById("desencriptado").innerHTML = "El texto se desencripto correctamente.";
        image.src = "./images/undraw_convert_re_l0y1.svg";
        document.getElementById("container__text").value = "";
    } else {
        image.src = "./images/undraw_exams_re_4ios.svg";
        document.getElementById("danger__text").innerHTML = "Debes ingresar algun texto";
        document.getElementById("text_hidden").style.opacity = "0";
    }
}

function copiar() {
    let text = document.getElementById("container__text__copy").value;
    let image = document.getElementById("img__main");

    if (text.length != 0) {
        navigator.clipboard.writeText(text);
        console.log('Contenido copiado al portapapeles');
        document.getElementById("text_hidden").style.opacity = "0";
        image.src = "./images/undraw_exams_re_4ios.svg";
        document.getElementById("danger__text").innerHTML = "El texto no tiene que contener números.";
    } else {
        console.error('Error al copiar: ', err);
        image.src = "./images/undraw_exams_re_4ios.svg";
        document.getElementById("danger__text").innerHTML = "Debes ingresar algun texto";
    }
}