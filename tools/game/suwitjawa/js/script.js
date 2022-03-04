// Panggil imgKomputer untuk mengganti gambar
const imgKomputer = document.querySelector(".img-komputer");

// Panggil hasil dan skor untuk mengisi isi tag
const s_player = document.querySelector(".skor-player");
const hasil = document.querySelector(".hasil");
const s_comp = document.querySelector(".skor-komputer");
const sp = document.querySelector(".sp");
const sk = document.querySelector(".sk");

// Tentukan fungsi pilihan komputer
function getpilihanKomputer() {
    const comp = Math.random() * 10;

    if (comp < 3.33) return "semut";
    if (comp > 3.33 && comp < 6.67) return "orang";
    return "gajah";
}

// Tentukan rules
function getHasil(comp, player) {
    if (player == comp) return "SERI!";
    if (player == "semut") return comp == "gajah" ? "MENANG!" : "KALAH!";
    if (player == "orang") return comp == "semut" ? "MENANG!" : "KALAH!";
    if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";
}

// Tentukan fungsi load pilihan komputer
function load() {
    const gambar = ["gajah", "orang", "semut"];
    let i = 0;
    const mulai = new Date().getTime();

    setInterval(function () {
        if (new Date().getTime() - mulai > 1000) {
            clearInterval;
            return;
        }
        imgKomputer.setAttribute("src", "img/" + gambar[i++] + ".png");
        if (i == gambar.length) i = 0;
    }, 100);
}

// Tentukan fungsi penambah skor pada setiap permainan
function getSkorPlayer(inner_player) {
    let player = parseInt(inner_player);
    return ++player;
}

function getSkorKomputer(inner_komputer) {
    let komputer = parseInt(inner_komputer);
    return ++komputer;
}

const pilihanPlayer = document.querySelectorAll("li img");

pilihanPlayer.forEach(function (pilihan) {
    pilihan.addEventListener("click", function () {
        const comp = getpilihanKomputer();
        const player = pilihan.className;
        const hasil_game = getHasil(comp, player);

        load();

        setTimeout(function () {
            imgKomputer.setAttribute("src", "img/" + comp + ".png");
            hasil.innerHTML = hasil_game;
            if (hasil_game == "MENANG!") {
                let skor_player = sp.innerHTML;
                sp.innerHTML = getSkorPlayer(skor_player);
            } else if (hasil_game == "KALAH!") {
                let skor_komputer = sk.innerHTML;
                sk.innerHTML = getSkorKomputer(skor_komputer);
            }
        }, 1000);

        setTimeout(function () {
            if (sp.innerHTML == "3") {
                const main_lagi = confirm("Selamat, Player. Kamu berhasil mengalahkan komputer.\n\nApakah masih mau bermain??");
                if (main_lagi) {
                    sp.innerHTML = 0;
                    sk.innerHTML = 0;
                    hasil.innerHTML = "";
                } else {
                    alert("Oke, player.\n\nTerima kasih sudah bermain game kami.\nSemoga harimu menyenangkan");
                    window.close();
                }
            } else if (sk.innerHTML == "3") {
                const main_lagi = confirm("Sayang sekali, Player. Kamu gagal mengalahkan komputer.\n\nMasih mau lanjut??");
                if (main_lagi) {
                    sp.innerHTML = 0;
                    sk.innerHTML = 0;
                    hasil.innerHTML = "";
                } else {
                    alert("Oke, player.\n\nTerima kasih sudah bermain game kami.\nSemoga harimu menyenangkan");
                    window.close();
                }
            }
        }, 1500);
    });
});
