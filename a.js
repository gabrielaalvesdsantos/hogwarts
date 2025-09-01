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
      setTimeout(() => btn.click(), 300); // sortear novamente
    });
  });

  modal.addEventListener('click', (e) => {
    if(e.target === modal) modal.classList.remove('show');
  });
});
