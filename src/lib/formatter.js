import katex from "katex";

var expresionRegular = /`([^`]+)`/g;
var id_element_sel = "";

function animateCode(id_element) {
    id_element_sel = id_element;
    let codeElement = document.getElementById(id_element).firstElementChild;
    let codeText = codeElement.textContent.trim();
    let codeLines = codeText.split('\n');

    // Clear the code container
    codeElement.setAttribute("hidden", true);

    let divPadre = document.createElement("div");
    codeElement.parentElement.appendChild(divPadre);
    // Iterate through each line
    codeLines.forEach(function (line, index) {
        let lineElement = document.createElement('pre');

        // Iterate through each character
        for (let i = 0; i < line.length; i++) {
            let charElement = document.createElement('span');
            charElement.textContent = line[i];
            lineElement.appendChild(charElement);
        }

        // Add line to code container with delay
        setTimeout(function () {
            divPadre.appendChild(lineElement);
            highlightKeywords(lineElement);
        }, index * 200); // Ajustamos la velocidad de la animación aquí
    });
}

export function cleanAnimateCode(id_element) {
    let codeElement = document.getElementById(id_element);
    //codeElement.firstElementChild.setAttribute("hidden", false);
    codeElement.lastChild.remove();
}

// Función para resaltar palabras clave
function highlightKeywords(lineElement) {
    let keywords = ['public', 'private', 'if', 'else', 'new', 'this', 'int', 'double', 'float', 'byte', 'short', 'Integer', 'String',
        'Double', 'Float', 'ExceptionUFPS', 'try', 'catch', 'System', 'void', 'T', 'return', 'null', 'Object', 'for', 'while',
        'switch', 'Iterable'];
    
    let keycostos = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let keycomentarios = ['//Mejor de los casos','//Peor de los casos'];

    let text = lineElement.textContent;
    keywords.forEach(function (keyword) {
        let regex = new RegExp('\\b' + keyword + '\\b', 'g');
        text = text.replace(regex, '<span class="keyword">' + keyword + '</span>');
    });
    keycostos.forEach(function (keycosto) {
        let regex = new RegExp('\\b' + keycosto + '\\b', 'g');
        text = text.replace(regex, '<span class="keycosto">' + keycosto + '</span>');
    });
    keycomentarios.forEach(function (keycomentario) {
        let regex = new RegExp('\\b' + keycomentario + '\\b', 'g');
        text = text.replace(regex, '<span class="keycomentario">' + keycomentario + '</span>');
    });
    lineElement.innerHTML = text.replace(expresionRegular, reemplazarPalabras);
    document.querySelectorAll(".element_a_scroll").forEach((element) => {
        if(element.getAttribute("click_action")=="false"){
            element.addEventListener("click",function (e) {handleClickLink(e);},false);
            element.setAttribute("click_action","true")
        }
    });
}

// Función para reemplazar palabras entre `` con una nueva palabra
function reemplazarPalabras(match, palabra) {
    palabra = palabra.replace('<span class="keyword">',"");
    palabra = palabra.replace('<span class="keycosto">',"");
    palabra = palabra.replace('</span>',"");

    let array = palabra.split("¬");
    let id_element = id_element_sel.split("_")[0] + "_" + (parseInt(array[0])-1) + "_div_padre";

    return (
        "<button class='element_a_scroll' id_div='"+id_element+"' click_action='false' >"+array[1]+"</button>"
    );
}

function handleClickLink(e){
    console.log(e.target)
    let id = e.target.getAttribute("id_div");
    let id_button_action = id.split("_")[0] + "_" + id.split("_")[1] + "_button_action";
    let element_div = document.getElementById(e.target.getAttribute("id_div"));
    let element_h2 = element_div.previousElementSibling;

    let posicionInicial = e.target.getBoundingClientRect().top + window.scrollY;
    let posicionFinal = element_h2.getBoundingClientRect().top + window.scrollY;
    // Calcular la cantidad de desplazamiento necesario
    let desplazamiento = posicionFinal - posicionInicial;

    // Hacer desplazamiento suave hacia la nueva posición
    window.scrollBy({
        top: desplazamiento,
        behavior: 'instant'
    });
    element_div.className = "bg-sky-300";
    element_h2.className = "bg-sky-300";
    setTimeout(() => {
        element_div.classList.remove("bg-sky-300");
        element_h2.classList.remove("bg-sky-300");
    }, 500);

    setTimeout(()=>{
        let ele_button_action = document.getElementById(id_button_action);
        if(ele_button_action.textContent == "Mostrar Análisis"){
            ele_button_action.click();
        }
    },1000);
}

function handleClickAction(id_button) {
    let button = document.getElementById(id_button);
    
    let id_element = id_button.split("_")[0] + "_" + id_button.split("_")[1];
    let analisis_container = document.getElementById(id_element + "_analisis_container");
    let calculo_container = document.getElementById(id_element + "_calculo_container");

    // Calcular posición del botón antes y después de mostrar el contenido
    let posicionInicial = button.getBoundingClientRect().top + window.scrollY;

    if(calculo_container.parentElement.getAttribute("formateado") === "false") {
        formatearCostoComplejidad(id_element + "_calculo_container");
    }

    if (button.textContent == "Mostrar Análisis") {
        analisis_container.hidden = false;
        calculo_container.hidden = false;
        button.textContent = "Ocultar Análisis";
        animateCode(id_element + "_analisis_container");
    } else {
        analisis_container.hidden = true;
        calculo_container.hidden = true;
        button.textContent = "Mostrar Análisis";
        cleanAnimateCode(id_element + "_analisis_container");
    }
    let posicionFinal = button.getBoundingClientRect().top + window.scrollY;
    // Calcular la cantidad de desplazamiento necesario
    let desplazamiento = posicionFinal - posicionInicial;
    
    // Hacer desplazamiento suave hacia la nueva posición del botón
    window.scrollBy({
        top: desplazamiento,
        behavior: 'smooth'
    });
}

export function formatearMd(id_contenedor) {
    const id = id_contenedor.charAt(0);
    let contenedor_analisis = document.getElementById(id_contenedor);
    let elementsDiv = contenedor_analisis.querySelectorAll('.code-container');
    if (elementsDiv.length == 0) {
        contenedor_analisis.hidden = false;
        let pres = contenedor_analisis.querySelectorAll('pre');
        let uls = contenedor_analisis.querySelectorAll("ul");
        for (let i = 0; i < pres.length; i++) {
            let divPrincipal = document.createElement('div');
            divPrincipal.setAttribute("id", id + "_" + i + "_div_padre");
            divPrincipal.setAttribute("class", "div_padre");
            divPrincipal.setAttribute("formateado","false");

            let divChildAnalisis = document.createElement('div');
            divChildAnalisis.setAttribute("class", "code-container");
            divChildAnalisis.setAttribute("id", id + "_" + i + "_analisis_container");

            let elementParent = pres[i].cloneNode(true);
            elementParent.setAttribute("class", "code");
            divChildAnalisis.appendChild(elementParent);
            divChildAnalisis.hidden = true;
            divPrincipal.appendChild(divChildAnalisis);

            let divCalculo = document.createElement('div');
            divCalculo.appendChild(uls[i].cloneNode(true));
            divCalculo.setAttribute("id", id + "_" + i + "_calculo_container");

            uls[i].remove();
            divCalculo.hidden = true;

            divPrincipal.appendChild(divCalculo);

            let buttonAction = document.createElement('button');
            buttonAction.setAttribute("class", "btn_action button_color");
            buttonAction.setAttribute("id", id + "_" + i + "_button_action");
            buttonAction.onclick = function () { handleClickAction(id + "_" + i + "_button_action") }
            buttonAction.textContent = "Mostrar Análisis";
            divPrincipal.appendChild(buttonAction);

            pres[i].parentNode.replaceChild(divPrincipal, pres[i]);
        }
    }
}

function formatearCostoComplejidad(id_calculo_container) {
    let calculo_container = document.getElementById(id_calculo_container);

    calculo_container.querySelectorAll("ul li").forEach(li_element => {
        let div_padre = document.createElement("div");
        div_padre.className = "overflow-x-auto";
        li_element.appendChild(div_padre);

        li_element.querySelectorAll('p').forEach(p_element => {
            let viewer_math = document.createElement('div');
            viewer_math.className = "mathexpresion";
            viewer_math.innerHTML = katex.renderToString(String.raw`` + p_element.textContent.replaceAll("$", "") + ``, {
                throwOnError: false,
                output: "mathml",
                displayMode: false
            });
            div_padre.appendChild(viewer_math);
            p_element.parentNode.replaceChild(div_padre, p_element);
        });
    });
    calculo_container.parentElement.setAttribute("formateado", "true");
}