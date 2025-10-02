// nome do usuário no topo direito
    const usuario = localStorage.getItem('usuario_nome') || 'Usuário';
    document.getElementById('usuario-nome-texto').textContent = usuario;
    // Ao clicar vai para a página de perfil
    document.getElementById('usuario-nome').onclick = function() {
      window.location.href = 'perfil.html';
    };

    // Pega categoria e quiz da URL
    const params = new URLSearchParams(window.location.search);
    const categoria = params.get('categoria') || 'filmes';
    const quizId = params.get('quiz') || 'harrypotter';
    const key = `ranking_${categoria}_${quizId}`;
    let ranking = [];
    try {
      ranking = JSON.parse(localStorage.getItem(key)) || [];
    } catch {}

    // Preenche a tabela de ranking
    const table = document.getElementById('ranking-table');
    ranking.forEach((item, idx) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${idx + 1}</td>
                      <td>${item.nome}</td>
                      <td>${item.pontos} / ${item.total}</td>
                      <td>${new Date(item.data).toLocaleDateString()}</td>`;
      table.appendChild(tr);
    });

    // Função para voltar para a página de categorias
    function voltarParaQuizzes() {
      window.location.href = `categorias.html`;
    }
