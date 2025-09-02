document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btnSort');
  const modal = document.getElementById('modal-casa');
  const modalContent = document.getElementById('modal-content');

  const casas = [
    { nome: "Grifinória", url: "grifinoria.html", cor: "#b3282d" },
    { nome: "Sonserina",  url: "sonserina.html",  cor: "#1a8c47" },
    { nome: "Corvinal",   url: "corvinal.html",   cor: "#2a5fa0" },
    { nome: "Lufa-Lufa",  url: "lufalufa.html",   cor: "#d2b100" }
  ];

  btn.addEventListener('click', () => {
    const casa = casas[Math.floor(Math.random() * casas.length)];
    modalContent.innerHTML = `
      <h2>${casa.nome}</h2>
      <a href="${casa.url}" class="btn" style="background-color:${casa.cor}">Ir para página</a>
      <button id="again" class="btn secondary">Sortear de novo</button>
    `;
    modal.classList.add('show');

    document.getElementById('again').addEventListener('click', () => {
      modal.classList.remove('show');
      setTimeout(() => btn.click(), 300); 
    });
  });

  modal.addEventListener('click', (e) => {
    if(e.target === modal) modal.classList.remove('show');
  });
});


   const secretBtn = document.getElementById('secretBtn');
   const magicDiary = document.getElementById('magicDiary');
   const diaryText = document.getElementById('diaryText');

   const diaryPages = [
  "As paredes da escola guardam segredos... alguns são só para os escolhidos.",
  "Uma pena invisível escreveu seu destino, mas sóo Chapéu Seletor poderá lê-lo.",
  "Você clicou no diário e liberou um feitiço secreto: alert('Expecto Patronum!').",
  "O JavaScript do Chapéu gosta de surpresas… tipo Sonserina ganhando Grifinória.",
  "O Chapéu olhou seu código e disse: 'Você pertence a Sonserina... mas só se passar no commit!'"
];

   let currentPage = 0;

   secretBtn.addEventListener('click', () => {
  magicDiary.style.display = 'block';
  diaryText.textContent = diaryPages[currentPage];
  currentPage++;
  if(currentPage >= diaryPages.length) currentPage = 0;
});

magicDiary.addEventListener('click', () => {
  magicDiary.style.display = 'none';
});