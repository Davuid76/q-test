// Banco de dados dos quizzes (mesmo formato do quizzes.js)
const quizzesDB = {
  filmes: [
    { titulo: "O que você sabe sobre Harry Potter?", id: "harrypotter", categoria: "Filmes", desc: "Teste seus conhecimentos sobre a saga!", icone: "🎬" },
    { titulo: "Clássicos do Cinema", id: "classicos", categoria: "Filmes", desc: "Você conhece os maiores clássicos?", icone: "🎬" }
  ],
  celebridades: [
    { titulo: "Famosos do Brasil", id: "brasil", categoria: "Celebridades", desc: "Quão bem você conhece as celebridades brasileiras?", icone: "🌟" }
  ],
  paises: [
    { titulo: "Conhecimentos Gerais dos países", id: "gerais", categoria: "Países", desc: "Quanto você sabe sobre os países?", icone: "🌍" }
  ],
  musicas: [
    { titulo: "Você conhece a história da música?", id: "anos2000", categoria: "Músicas", desc: "O quanto você conhece as origens das músicas?", icone: "🎵" }
  ],
  futebol: [
    { titulo: "Copa do Mundo", id: "copa", categoria: "Futebol", desc: "Teste seus conhecimentos sobre a Copa!", icone: "⚽" }
  ],
  series: [
    { titulo: "Tela e Pipoca: Quiz para Amantes de Séries", id: "got", categoria: "Séries", desc: "Você é um verdadeiro fã de Séries?", icone: "📺" }
  ]
};

document.addEventListener('DOMContentLoaded', function() {
  const grid = document.getElementById('curtidos-grid');
  let curtidos = [];
  try {
    curtidos = JSON.parse(localStorage.getItem('quizzes_curtidos')) || [];
  } catch (e) {
    curtidos = [];
  }

  if (!Array.isArray(curtidos) || curtidos.length === 0) {
    grid.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color:#a49fd1;">Nenhum quiz curtido ainda.</p>';
    return;
  }

  grid.innerHTML = '';
  curtidos.forEach(item => {
    let info = null;
    if (quizzesDB[item.categoria]) {
      info = quizzesDB[item.categoria].find(q => q.id === item.quiz);
    }
    const nome = info ? info.titulo : (item.quiz || 'Quiz');
    const categoria = info ? info.categoria : (item.categoria || '');
    const desc = info ? info.desc : '';
    const icone = info ? info.icone : '';
    const data = item.data ? new Date(item.data).toLocaleDateString('pt-BR') : '';
    const card = document.createElement('div');
    card.className = 'curtido-card';
    card.innerHTML = `
      <button class="curtir-btn" title="Descurtir" style="background:none;border:none;position:absolute;top:10px;right:10px;cursor:pointer;font-size:1.7rem;line-height:1;">❤️</button>
      <div class="curtido-nome">${nome}</div>
      <div class="curtido-categoria">${categoria}</div>
      <div class="curtido-desc" style="font-size:1.05rem;color:#7a6fc2;margin-bottom:10px;">${desc}</div>
      <div class="curtido-data">${data ? 'Curtido em: ' + data : ''}</div>
    `;
    // Evento para descurtir
    card.querySelector('.curtir-btn').onclick = function(e) {
      e.stopPropagation();
      // Remove o quiz curtido do localStorage
      const quizzesCurtidos = JSON.parse(localStorage.getItem('quizzes_curtidos')) || [];
      const novoArray = quizzesCurtidos.filter(q => !(q.categoria === item.categoria && q.quiz === item.quiz));
      localStorage.setItem('quizzes_curtidos', JSON.stringify(novoArray));
      card.remove();
    };
    grid.appendChild(card);
  });
});
const usuario = localStorage.getItem('usuario_nome') || 'Usuário';
    // Exibe o nome do usuário no elemento correspondente
    document.getElementById('usuario-nome-texto').textContent = usuario;