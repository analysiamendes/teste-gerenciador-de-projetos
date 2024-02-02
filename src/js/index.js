// MODO CLARO E ESCURO
const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

  body.classList.toggle("modo-escuro");

  if (modoEscuroEstaAtivo) {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/images/sun.png");
  } else {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/images/moon.png");
  }
});

// FUNCIONALIDADE POST-ITS

const notes = document.querySelectorAll('.note');

notes.forEach(note => {
  note.addEventListener('input', function () {
    // salvar nota no armazenamento
    localStorage.setItem('note_' + note.parentNode.classList[1], note.value);
  });

  const carregarNota = localStorage.getItem('note_' + note.parentNode.classList[1]);

  if (carregarNota) {
    note.value = carregarNota;
  }

});



