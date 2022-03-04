const tanah = document.querySelectorAll('.tanah');
const pompom = document.querySelectorAll('.pompom');
const papanSkor = document.querySelector('.papan-skor');
const titleGame = document.querySelector('#title-game');
const btnPlay = document.querySelector('#play');
const finalScore = document.querySelector('#final-score');
const id = document.getElementById("count");
const cd = document.getElementById("countdown");

let tanahSebelumnya;
let selesai;
let skor;
let counter = 10;
var myVar = null;

function randomTanah(tanah) {
    const t = Math.floor(Math.random() * tanah.length);
    const tRandom = tanah[t];
    if (tRandom == tanahSebelumnya) {
        randomTanah(tanah);
    }
    tanahSebelumnya = tRandom;
    return tRandom;
}

function randomWaktu(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function munculkanPompom() {
    const tRandom = randomTanah(tanah);
    const wRandom = randomWaktu(500, 1000);
    tRandom.classList.add('muncul');

    setTimeout(() => {
        tRandom.classList.remove('muncul');
        if (!selesai) {
            reset_pompom();
            munculkanPompom();
        }
    }, wRandom)
}

function reset_pompom() {
    document.getElementById("pompom_1").className = "pompom";
    document.getElementById("pompom_2").className = "pompom";
    document.getElementById("pompom_3").className = "pompom";
    document.getElementById("pompom_4").className = "pompom";
    document.getElementById("pompom_5").className = "pompom";
    document.getElementById("pompom_6").className = "pompom";
}

function pukul(id) {
    if (!selesai) {
        skor++;
        papanSkor.textContent = skor;
        document.getElementById("pompom_" + id).className = "pompom pompom-punch";
        setTimeout(function () {
            var mcl = document.getElementById("id_" + id);
            mcl.classList.remove("muncul");
        }, 2000);

        //this.parentNode.classList.remove('muncul');
    }
}

function play() {
    selesai = false;
    finalScore.textContent = "";
    papanSkor.textContent = 0;
    titleGame.textContent = "Sedang Bermain";
    skor = 0;
    cd.style.display = "block";
    munculkanPompom();

    myVar = setInterval(myTimer, 1000);

    setTimeout(function () {
        titleGame.innerHTML = "Permainan telah Selesai. Score Anda : <span class='final-score'>" + skor + " Point</span>";
        btnPlay.textContent = "Play Again!";
        papanSkor.textContent = "";
        selesai = true;
        id.textContent = "10";
        cd.style.display = "none";
        counter = 10;
        myStopFunction(myVar);
    }, 10000);
}

function myTimer() {
    counter--;
    if (counter >= 0) {
        id.innerHTML = counter;
    }
    if (counter === 0) {
        id.innerHTML;
    }
}

function myStopFunction(set_value) {
    clearInterval(set_value);
}

/*
pompom.forEach(t => {
    t.addEventListener('click', pukul);
});
*/