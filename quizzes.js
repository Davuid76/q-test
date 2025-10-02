// Exibe nome do usuário
       const usuario = localStorage.getItem('usuario_nome') || 'Usuário';
    document.getElementById('usuario-nome-texto').textContent = usuario;
    // Ao clicar, vai para a página de perfil
    document.getElementById('usuario-nome').onclick = function() {
      window.location.href = 'perfil.html';
    };

    // Quizzes por categoria
    const quizzesPorCategoria = {
      filmes: [
        { titulo: "O que você sabe sobre Harry Potter?", desc: "Teste seus conhecimentos sobre a saga!", id: "harrypotter" },
        { titulo: "Clássicos do Cinema", desc: "Você conhece os maiores clássicos?", id: "classicos" }
      ],
      celebridades: [
        { titulo: "Famosos do Brasil", desc: "Quão bem você conhece as celebridades brasileiras?", id: "brasil" }
      ],
      paises: [
        { titulo: "Conhecimentos Gerais dos países", desc: "Quanto você sabe sobre os países?", id: "gerais" }
      ],
      musicas: [
        { titulo: "Você conhece a história da música?", desc: "O quanto você conhece as origens das músicas?", id: "anos2000" }
      ],
      futebol: [
        { titulo: "Copa do Mundo", desc: "Teste seus conhecimentos sobre a Copa!", id: "copa" }
      ],
      series: [
        { titulo: "Tela e Pipoca: Quiz para Amantes de Séries", desc: "Você é um verdadeiro fã de Séries?", id: "got" }
      ]
    };

    // Pega a categoria da URL
    const params = new URLSearchParams(window.location.search);
    const categoria = params.get('categoria') || 'filmes';

    document.getElementById('banner').textContent = `Quizzes de ${categoria.charAt(0).toUpperCase() + categoria.slice(1)}`;

    const quizzes = quizzesPorCategoria[categoria] || [];
    const container = document.getElementById('quizzes');

    if (quizzes.length === 0) {
      container.innerHTML = "<div style='font-size:1.3rem;color:#fff;'>Nenhum quiz disponível para esta categoria ainda.</div>";
    } else {
      quizzes.forEach(q => {
        const card = document.createElement('div');
        card.className = 'quiz-card';
        card.onclick = () => window.location.href = `quiz.html?categoria=${categoria}&quiz=${q.id}`;
        card.innerHTML = `<div>${q.titulo}</div><div class="quiz-desc">${q.desc}</div>`;
        container.appendChild(card);
      });
    }
