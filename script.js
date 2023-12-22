function conversaoVel() {

    let velocidade = Number(document.getElementById('velocidade').value);
    let espirito = Number.parseFloat(document.getElementById('espirito').value);

    while (velocidade>=0 && velocidade < 10 && espirito >= 1) {
        espirito = espirito - 1;
        velocidade = velocidade + 1;
    }

    while (velocidade>=10 && velocidade < 20 && espirito >= 2) {
        espirito = espirito - 2;
        velocidade = velocidade + 1;
    }

    while (velocidade>=20 && velocidade < 30 && espirito >= 3) {
        espirito = espirito - 3;
        velocidade = velocidade + 1;
    }

    while (velocidade>=30 && velocidade < 40 && espirito >= 4) {
        espirito = espirito - 4;
        velocidade = velocidade + 1;
    }

    while (velocidade>=40 && velocidade < 50 && espirito >= 5) {
        espirito = espirito - 5;
        velocidade = velocidade + 1;
    }

    while (velocidade>=50 && velocidade < 60 && espirito >= 6) {
        espirito = espirito - 6;
        velocidade = velocidade + 1;
    }

    while (velocidade>=60 && velocidade < 70 && espirito >= 8) {
        espirito = espirito - 8;
        velocidade = velocidade + 1;
    }

    while (velocidade>=70 && velocidade < 80 && espirito >= 10) {
        espirito = espirito - 10;
        velocidade = velocidade + 1;
    }

    while (velocidade>=80 && velocidade < 90 && espirito >= 12) {
        espirito = espirito - 12;
        velocidade = velocidade + 1;
    }

    while (velocidade>=90 && velocidade < 100 && espirito >= 15) {
        espirito = espirito - 15;
        velocidade = velocidade + 1;
    }


    document.getElementById('resultado').innerHTML = velocidade;
    document.getElementById('resultadoEsp').innerHTML = espirito;

}

function taiRef() {

    let reflexo = Number(document.getElementById('reflexo').value);
    let taijutsu = Number(document.getElementById('taijutsu').value);

    if (taijutsu == 6){
        reflexo = reflexo + 5;
    } else if (taijutsu == 7){
        reflexo = reflexo +10;
    } else if (taijutsu == 8){
        reflexo = reflexo +15;
    } else if (taijutsu == 9){
        reflexo = reflexo +20;
    } else if (taijutsu == 10){
        reflexo = reflexo +25;
    }

    document.getElementById('resultadoRef').innerHTML = reflexo;

}