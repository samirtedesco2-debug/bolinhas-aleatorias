# 🎯 Pista de Bolinhas

Projeto simples em JavaScript para criar uma pista onde bolinhas se movem aleatoriamente, podem ser inseridas, removidas e limpas através de uma interface web.

## ✨ Visão geral

A aplicação possui:

- 🔢 um contador de bolinhas na pista;
- ➕ campos para inserir ou remover bolinhas;
- 🧹 botão para limpar tudo;
- 🟣 uma área central onde as bolinhas são renderizadas;
- 🎲 movimentação aleatória com colisão nas bordas da pista.

## 🖼️ Ilustração da interface

```text
┌─────────────────────────────────────────────────────────────────────┐
│ 🧮 TOTAL DE BOLAS: 0                                               │
├─────────────────────┬─────────────────────┬────────────────────────┤
│ ➕ Inserir Bolas     │ ➖ Deletar Bolas     │ 🎛️ Controles           │
│ [____campo____]     │ [____campo____]     │ [Inserir] [Deletar]   │
│                     │                     │ [Limpar]              │
├─────────────────────┴─────────────────────┴────────────────────────┤
│                                                                     │
│                    🏟️ PISTA DE BOLINHAS                            │
│                                                                     │
│  ●   ●         ●                       ●                          │
│             ●                 ●                                    │
│            ●      ●                                                │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

## 🧱 Estrutura do projeto

```text
bolinhas aleatorias/
├── index.html
├── style.css
├── script.js
└── README.md
```

### Arquivos

- `index.html`: estrutura da interface da página.
- `style.css`: estilos do layout e dos elementos visuais.
- `script.js`: lógica de criação, movimento e controle das bolinhas.
- `README.md`: documentação do projeto.

## ▶️ Como executar

1. 📁 Abra a pasta do projeto no navegador.
2. 🔎 Localize o arquivo `index.html`.
3. 🌐 Abra-o em qualquer navegador moderno (Chrome, Edge, Firefox).

Você também pode usar um servidor local simples, por exemplo:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

## 🕹️ Como usar

### ➕ Inserir bolinhas

- Digite a quantidade no campo **Inserir Bolas**.
- Clique no botão **Inserir**.
- A quantidade informada será adicionada à pista.

### ➖ Remover bolinhas

- Digite a quantidade no campo **Deletar Bolas**.
- Clique no botão **Deletar**.
- A quantidade será removida da pista, começando pela primeira bolinha criada.

### 🧹 Limpar pista

- Clique no botão **Limpar**.
- Todas as bolinhas são removidas da área da pista.

## ⚙️ Comportamento da lógica

O arquivo `script.js` realiza as seguintes funções:

- captura os elementos da página;
- cria instâncias da classe `Bola`;
- gera tamanho, cor e direção aleatória para cada bolinha;
- calcula posição inicial dentro da pista;
- atualiza a posição em intervalos regulares;
- inverte a direção quando atinge as bordas;
- atualiza o total de bolinhas visualmente na tela.

## 📝 Observações

- 💡 O projeto foi desenvolvido como uma aplicação front-end simples, sem uso de frameworks.
- 🧩 O código depende diretamente do DOM para renderizar e movimentar os elementos.
- 🔄 O contador de bolinhas é atualizado dinamicamente conforme a lista da pista muda.

## 🛠️ Tecnologias utilizadas

- HTML
- CSS
- JavaScript

## 🚀 Futuras melhorias

Algumas melhorias possíveis para o projeto incluem:

- ✅ validação de entradas numéricas;
- 🚫 prevenção de valores negativos ou inválidos;
- 📐 ajuste de movimentação ao redimensionar a janela;
- 💥 colisão entre bolinhas;
- 🎨 seleção aleatória de estilos visuais adicionais.
