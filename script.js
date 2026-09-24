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

class Bola {
  constructor(arrayBolas, pistaDeBolinhas) {
    this.tam = Math.floor(Math.random() * 55) + 10;
    this.corR = Math.floor(Math.random() * 255);
    this.corG = Math.floor(Math.random() * 255);
    this.corB = Math.floor(Math.random() * 255);
    this.pX = Math.floor(Math.random() * (larguraPista - this.tam));
    this.pY = Math.floor(Math.random() * (alturaPista - this.tam));
    this.vX = Math.floor(Math.random() * 5) + 0.5;
    this.vY = Math.floor(Math.random() * 5) + 0.5;
    this.dirX = Math.floor(Math.random() * 10) > 5 ? 1 : -1;
    this.dirY = Math.floor(Math.random() * 10) < 5 ? 1 : -1;
    this.arrayBolas = arrayBolas;
    this.pistaDeBolinhas = pistaDeBolinhas;
    this.id = Date.now() + "_" + Math.floor(Math.random() * 100000000000000000);
    this.desenhar();
    this.controle = setInterval(this.controlar, 10);
    this.eu = document.getElementById(this.id);
    numBolas++;
    totalBolls.innerHTML = numBolas;
  }
  minhaPosicao = () => {
    return this.arrayBolas.indexOf(this);
  };

  desenhar = () => {
    const div = document.createElement("div");
    div.setAttribute("id", this.id);
    div.setAttribute("class", "bola");
    div.setAttribute(
      "style",
      `left:${this.pX}px;top:${this.pY}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.corR},${this.corG},${this.corB})`,
    );
    this.pistaDeBolinhas.appendChild(div);
  };

  remover = () => {
    clearInterval(this.controle);
    bolas = bolas.filter((b) => {
      if (b.id != this.id) {
        return b;
      }
    });
    this.eu.remove();
    numBolas--;
    totalBolls.innerHTML = numBolas;
  };

  colisao_bordas = () => {
    if (this.pX + this.tam >= larguraPista) {
      this.dirX = -1;
    } else if (this.pX <= 0) {
      this.dirX = 1;
    }
    if (this.pY + this.tam >= alturaPista) {
      this.dirY = -1;
    } else if (this.pY <= 0) {
      this.dirY = 1;
    }
  };

  controlar = () => {
    this.colisao_bordas();
    this.pX += this.dirX * this.vX;
    this.pY += this.dirY * this.vY;
    this.eu.setAttribute(
      "style",
      `left:${this.pX}px;top:${this.pY}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.corR},${this.corG},${this.corB})`,
    );
    if (this.pX > larguraPista || this.pY > alturaPista) {
      this.remover();
    }
  };
}

window.addEventListener("resize", (eve) => {
  larguraPista = pistaDeBolinhas.offsetWidth;
  alturaPista = pistaDeBolinhas.offsetHeight;
});

btnInsert.addEventListener("click", () => {
  const addBolls = Number(inserirBolas.value);
  for (let i = 0; i < addBolls; i++) {
    bolas.push(new Bola(bolas, pistaDeBolinhas));
  }
});

btnDeletar.addEventListener("click", () => {
  const decBolls = Number(deletBolas.value);
  for (let i = 0; i < decBolls; i++) {
    if (bolas.length > 0) {
      bolas[0].remover();
    }
  }
});

btnLimpar.addEventListener("click", () => {
  [...bolas].forEach((b) => b.remover());
});
