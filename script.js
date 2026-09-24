// const totalBolls = document.querySelector("#totalBolls");
// const inserirBolas = document.querySelector("#inserirBolas");
// const btnInsert = document.querySelector("#btn-insert");
// const deletBolas = document.querySelector("#deletBolas");
// const btnLimpar = document.querySelector("#btn-limpar");
// const btnDeletar = document.querySelector("#btn-deletar");
// const pistaDeBolinhas = document.querySelector("#pistaDeBolinhas");
// let larguraPista = pistaDeBolinhas.offsetWidth;
// let alturaPista = pistaDeBolinhas.offsetHeight;
// let bolas = [];
// let numBolas = 0;

// window.addEventListener("resize", (eve) => {
//   larguraPista = pistaDeBolinhas.offsetWidth;
//   alturaPista = pistaDeBolinhas.offsetHeight;
// });

// btnInsert.addEventListener("click", () => {
//   const addBolls = Number(totalBolls.value);
//   for (let i = 0; i < addBolls; i++) {
//     //adiciona bolinhas
//   }
//   console.log("add");
// });

// btnDeletar.addEventListener("click", () => {
//   const decBolls = Number(totalBolls.value);
//   for (let i = 0; i < decBolls; i++) {
//     //diminui bolinhas
//   }
//   console.log("del");
// });

// btnLimpar.addEventListener("click", () => {
//   console.log("limpar");
// });

const totalBolls = document.querySelector("#totalBolls");
const inserirBolas = document.querySelector("#inserirBolas");
const btnInsert = document.querySelector("#btn-insert");
const deletBolas = document.querySelector("#deletBolas");
const btnLimpar = document.querySelector("#btn-limpar");
const btnDeletar = document.querySelector("#btn-deletar");
const pistaDeBolinhas = document.querySelector("#pistaDeBolinhas");

let larguraPista = pistaDeBolinhas.offsetWidth;
let alturaPista = pistaDeBolinhas.offsetHeight;
let bolas = [];
let numBolas = 0;

totalBolls.textContent = numBolas;

window.addEventListener("resize", () => {
  larguraPista = pistaDeBolinhas.offsetWidth;
  alturaPista = pistaDeBolinhas.offsetHeight;
});

// Classe que define cada Bolinha
class Bola {
  constructor(pistaWidth, pistaHeight) {
    this.tamanho = 20; // Diâmetro em pixels
    this.raio = this.tamanho / 2;

    // Posição inicial aleatória dentro da pista
    this.px = Math.random() * (pistaWidth - this.tamanho);
    this.py = Math.random() * (pistaHeight - this.tamanho);

    // Velocidade e direção aleatórias (-3 a 3)
    this.vx = (Math.random() - 0.5) * 6;
    this.vy = (Math.random() - 0.5) * 6;

    // Cor aleatória em HSL
    this.cor = `hsl(${Math.random() * 360}, 100%, 50%)`;

    // Criação do elemento DOM (HTML)
    this.element = document.createElement("div");
    this.element.style.width = `${this.tamanho}px`;
    this.element.style.height = `${this.tamanho}px`;
    this.element.style.backgroundColor = this.cor;
    this.element.style.borderRadius = "50%";
    this.element.style.position = "absolute";

    pistaDeBolinhas.appendChild(this.element);
    this.desenhar();
  }

  // Atualiza a posição no CSS
  desenhar() {
    this.element.style.transform = `translate(${this.px}px, ${this.py}px)`;
  }

  // Atualiza física e trata colisão com as bordas
  mover(limiteX, limiteY) {
    this.px += this.vx;
    this.py += this.vy;

    // Colisão horizontal (esquerda / direita)
    if (this.px <= 0 || this.px + this.tamanho >= limiteX) {
      this.vx *= -1;
      this.px = Math.max(0, Math.min(this.px, limiteX - this.tamanho));
    }

    // Colisão vertical (topo / base)
    if (this.py <= 0 || this.py + this.tamanho >= limiteY) {
      this.vy *= -1;
      this.py = Math.max(0, Math.min(this.py, limiteY - this.tamanho));
    }

    this.desenhar();
  }

  // Remove a bolinha do DOM
  remover() {
    this.element.remove();
  }
}

// Loop de animação contínuo
function animar() {
  for (let i = 0; i < bolas.length; i++) {
    bolas[i].mover(larguraPista, alturaPista);
  }
  requestAnimationFrame(animar);
}

// Inicia a animação
animar();

// Eventos dos Botões
btnInsert.addEventListener("click", () => {
  const addBolls = Number(inserirBolas.value);
  for (let i = 0; i < addBolls; i++) {
    bolas.push(new Bola(larguraPista, alturaPista));
    numBolas++;
  }
  totalBolls.textContent = numBolas;
  inserirBolas.value = "";
});

btnDeletar.addEventListener("click", () => {
  const decBolls = Number(deletBolas.value);
  for (let i = 0; i < decBolls; i++) {
    if (bolas.length > 0) {
      const bolaRemovida = bolas.pop();
      bolaRemovida.remover();
      numBolas--;
    }
  }
  totalBolls.textContent = numBolas;
  deletBolas.value = "";
});

btnLimpar.addEventListener("click", () => {
  bolas.forEach((bola) => bola.remover());
  bolas = [];
  numBolas = 0;
  totalBolls.textContent = numBolas;
  inserirBolas.value = "";
  deletBolas.value = "";
});
