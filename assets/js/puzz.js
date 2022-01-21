//traer h2
let letras = document.getElementById("letras");
let numeros = document.getElementById("numeros");

//Traer Botones del index por id
let a1 = document.getElementById("a1");
let b2 = document.getElementById("b2");
let c3 = document.getElementById("c3");
let d4 = document.getElementById("d4");
let e5 = document.getElementById("e5");
let f6 = document.getElementById("f6");
let g7 = document.getElementById("g7");
let h8 = document.getElementById("h8");
let i9 = document.getElementById("i9");
let j0 = document.getElementById("j0");
let cl = document.getElementById("cl");
let cn = document.getElementById("cn");

//Remplazos
const imprimeA1 = () => {
    if (letras.innerHTML == "") {
        letras.innerHTML = "A";
    } else {
        if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "") {
            numeros.innerHTML = "1";
        }else {
            alert("X");
        }
    }
};
const imprimeB2 = () => {
    if (letras.innerHTML == "A") {
        letras.innerHTML += "B";
    } else {
        if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "1") {
            numeros.innerHTML += "2";
        }else {
            alert("Recuerda seguir el orden de forma ascendente :)");
        }
    }
};
const imprimeC3 = () => {
    if (letras.innerHTML == "AB") {
        letras.innerHTML += "C";
    } else {
        if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "12") {
            numeros.innerHTML += "3";
        }else {
            alert("Recuerda seguir el orden de forma ascendente :)");
        }
    }
};
const imprimeD4 = () => {
    if (letras.innerHTML == "ABC") {
        letras.innerHTML += "D";
    } else {
        if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "123") {
            numeros.innerHTML += "4";
        }else {
            alert("Recuerda seguir el orden de forma ascendente :)");
        }
    }
};
const imprimeE5 = () => {
    if (letras.innerHTML == "ABCD") {
        letras.innerHTML += "E";
    } else {
        if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "1234") {
            numeros.innerHTML += "5";
        }else {
            alert("Recuerda seguir el orden de forma ascendente :)");
        }
    }
};
const imprimeF6 = () => {
    if (letras.innerHTML == "ABCDE") {
        letras.innerHTML += "F";
    } else {
        if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "12345") {
            numeros.innerHTML += "6";
        }else {
            alert("Recuerda seguir el orden de forma ascendente :)");
        }
    }
};
const imprimeG7 = () => {
    if (letras.innerHTML == "ABCDEF") {
        letras.innerHTML += "G";
    } else {
        if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "123456") {
            numeros.innerHTML += "7";
        }else {
            alert("Recuerda seguir el orden de forma ascendente :)");
        }
    }
};
const imprimeH8 = () => {
    if (letras.innerHTML == "ABCDEFG") {
        letras.innerHTML += "H";
    } else {
        if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "1234567") {
            numeros.innerHTML += "8";
        }else {
            alert("Recuerda seguir el orden de forma ascendente :)");
        }
    }
};
const imprimeI9 = () => {
    if (letras.innerHTML == "ABCDEFGH") {
        letras.innerHTML += "I";
    } else {
        if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "12345678") {
            numeros.innerHTML += "9";
        }else {
            alert("Recuerda seguir el orden de forma ascendente :)");
        }
    }
};
const imprimeJ0 = () => {
    if (letras.innerHTML == "ABCDEFGHI") {
        letras.innerHTML += "J";
    } else {
        if (letras.innerHTML == "ABCDEFGHIJ" && numeros.innerHTML == "123456789") {
            numeros.innerHTML += "0";
        }else {
            alert("Faltan letras o ya has completado el ítem.");
        }
    }
};
//
const fnCL = () =>{
    alert("La programadora aún está trabajando en activar este botón.");
};
const fnCN = () =>{
    alert("La programadora aún está trabajando en activar este botón.");
};


//Eventos
a1.onclick = () => {
    imprimeA1();
};
b2.onclick = () => {
    imprimeB2();
};
c3.onclick = () => {
    imprimeC3();
};
d4.onclick = () => {
    imprimeD4();
};
e5.onclick = () => {
    imprimeE5();
};
f6.onclick = () => {
    imprimeF6();
};
g7.onclick = () => {
    imprimeG7();
};
h8.onclick = () => {
    imprimeH8();
};
i9.onclick = () => {
    imprimeI9();
};
j0.onclick = () => {
    imprimeJ0();
};

//
cl.onclick = () => {
    fnCL();
};
cn.onclick = () => {
    fnCL();
};