
let cifrado = document.getElementById("cifrar");
let descifrado = document.getElementById("descifrar");

cifrado.addEventListener("click",encode);
descifrado.addEventListener("click",decode);


function encode() {


    let sinMay = document.getElementById("text-input").value;
    let offset = document.getElementById("number-input").value;
    let string= sinMay.toUpperCase()
    let output = cipher.encode(offset,string);


document.getElementById("result").innerHTML = output;

}


function decode() {


    let sinMay = document.getElementById("text-input").value;
    let offset = document.getElementById("number-input").value;
    let string= sinMay.toUpperCase()
    let output = cipher.decode (offset,string);

document.getElementById("result").innerHTML = output;

}
