let fotos = ["a4.jpeg", "a2.jpeg", "a3.jpeg", "a1.jpeg"]; // Adicionando uma nova foto
let indice = 0;

function trocarFoto(direcao) {
    indice = (indice + direcao + fotos.length) % fotos.length;
    document.getElementById("foto").src = fotos[indice];
}

function atualizarContador() {
    const dataInicial = new Date("2009-06-12T00:00:00"); // Data inicial
    const agora = new Date();
    const diferenca = agora - dataInicial;

    const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25)); // Calcula anos incluindo anos bissextos
    const dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById("anos").textContent = anos;
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

setInterval(atualizarContador, 1000); // Atualiza a cada segundo
function criarConfete() {
    const confete = document.createElement("div");
    confete.classList.add("confete");
    confete.style.left = Math.random() * 100 + "vw";
    confete.style.animationDuration = Math.random() * 2 + 3 + "s"; // Tempo aleatório de queda
    document.body.appendChild(confete);

    setTimeout(() => {
        confete.remove();
    }, 5000);
}

setInterval(criarConfete, 300);
