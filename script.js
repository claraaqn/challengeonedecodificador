const input = document.querySelectorAll(".input-padrao")[0];
const output = document.querySelectorAll(".txtlt")[0];

function btncrip() {
    const textcrip = criptografar(input.value);
    output.value = textcrip;
    input.value = "";
}

function criptografar(stringcrip) {
    let troca = [['a', '4'], ['b', '8'], ["e", "57"], ['i', '1'], ["o", "9"], ['u', '0']];
    stringcrip = stringcrip.toLowerCase();
    
    for (let i = 0; i < troca.length; i++) {
        if (stringcrip.includes(troca[i][0])) {
            stringcrip = stringcrip.replaceAll(troca[i][0], troca[i][1])
        }
    }
    return stringcrip;
}

function btndes() {
    const textdes = descriptografar(input.value);
    output.value = textdes;
    input.value = "";
}

function descriptografar(stringdes) {
    let troca = [['a', '4'], ['b', '8'], ["e", "57"], ['i', '1'], ["o", "9"], ['u', '0']];
    stringdes = stringdes.toLowerCase();

    for (let i = 0; i < troca.length; i++) {
        if (stringdes.includes(troca[i][1])) {
            stringdes = stringdes.replaceAll(troca[i][1], troca[i][0]);
        }
    }
    return stringdes;
}
function copiar() {
    output.select();
    document.execCommand("copy");
}
