/**
 * Recircuito – JavaScript Principal
 * Sem frameworks/bibliotecas externas — JS puro (ES6+)
 */

'use strict';

/* ============================================================
   1. MENU MOBILE (hamburger)
   ============================================================ */
(function menuMobile() {
  const toggle = document.getElementById('menu-toggle');
  const nav    = document.getElementById('nav-principal');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const aberto = nav.classList.toggle('aberto');
    toggle.setAttribute('aria-expanded', aberto);
    toggle.textContent = aberto ? '✕' : '☰';
  });

  // Fecha ao pressionar Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('aberto')) {
      nav.classList.remove('aberto');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = '☰';
      toggle.focus();
    }
  });
})();

/* ============================================================
   2. ALTO CONTRASTE (preferência salva no localStorage)
   ============================================================ */
(function altoContraste() {
  const btn = document.getElementById('btn-contraste');
  if (!btn) return;

  // Restaura preferência salva
  if (localStorage.getItem('recircuito_contraste') === 'alto') {
    document.body.classList.add('alto-contraste');
    btn.setAttribute('aria-pressed', 'true');
    btn.textContent = '☀ Contraste Normal';
  }

  btn.addEventListener('click', () => {
    const ativo = document.body.classList.toggle('alto-contraste');
    btn.setAttribute('aria-pressed', ativo);
    btn.textContent = ativo ? '☀ Contraste Normal' : '◑ Alto Contraste';
    localStorage.setItem('recircuito_contraste', ativo ? 'alto' : 'normal');
  });
})();

/* ============================================================
   3. VALIDAÇÃO DO FORMULÁRIO DE CONTATO
   ============================================================ */
(function formularioContato() {
  const form = document.getElementById('form-contato');
  if (!form) return;

  // Com JS ativo, as mensagens são exibidas pelo script (as regras HTML5 continuam no HTML
  // e funcionam sozinhas caso o JavaScript esteja desativado).
  form.noValidate = true;

  const campos = {
    nome:      { el: form.querySelector('#nome'),      re: /^[A-Za-zÀ-ú ]{3,}$/,   msg: 'Nome deve ter pelo menos 3 caracteres.' },
    email:     { el: form.querySelector('#email'),     re: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, msg: 'Informe um e-mail válido.' },
    telefone:  { el: form.querySelector('#telefone'),  re: /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, msg: 'Formato: (11) 91234-5678.', opcional: true },
    'data-contato':     { el: form.querySelector('#data-contato'),     re: /^\d{4}-\d{2}-\d{2}$/, msg: 'Informe uma data válida.', opcional: true },
    'qtd-equipamentos': { el: form.querySelector('#qtd-equipamentos'), re: /^([1-9]\d{0,2}|1000)$/, msg: 'Informe um número entre 1 e 1000.', opcional: true },
    assunto:   { el: form.querySelector('#assunto'),   re: /.+/,                      msg: 'Selecione um assunto.' },
    mensagem:  { el: form.querySelector('#mensagem'),  re: /[\s\S]{20,}/,             msg: 'Mensagem deve ter pelo menos 20 caracteres.' },
  };

  // Restaura rascunho do localStorage
  Object.entries(campos).forEach(([key, cfg]) => {
    if (!cfg.el) return;
    const val = localStorage.getItem('recircuito_form_' + key);
    if (val) cfg.el.value = val;
  });

  // Salva rascunho enquanto digita
  Object.entries(campos).forEach(([key, cfg]) => {
    if (!cfg.el) return;
    cfg.el.addEventListener('input', () => {
      localStorage.setItem('recircuito_form_' + key, cfg.el.value);
    });
  });

  // Valida campo individual
  function validarCampo(key, cfg) {
    if (!cfg.el) return true;
    const val     = cfg.el.value.trim();
    const msgEl   = document.getElementById('erro-' + key);
    const valido  = cfg.opcional && val === '' ? true : cfg.re.test(val);

    cfg.el.classList.toggle('erro', !valido);
    cfg.el.classList.toggle('ok',   valido);
    if (msgEl) {
      msgEl.textContent = valido ? '' : cfg.msg;
      msgEl.classList.toggle('visivel', !valido);
    }
    cfg.el.setAttribute('aria-invalid', !valido);
    return valido;
  }

  // Valida ao sair do campo (blur)
  Object.entries(campos).forEach(([key, cfg]) => {
    if (!cfg.el) return;
    cfg.el.addEventListener('blur', () => validarCampo(key, cfg));
  });

  // Submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let tudo_ok = true;
    Object.entries(campos).forEach(([key, cfg]) => {
      if (!validarCampo(key, cfg)) tudo_ok = false;
    });

    if (!tudo_ok) {
      // Foca no primeiro campo inválido
      const primeiro = Object.values(campos).find(c => c.el && c.el.classList.contains('erro'));
      if (primeiro) primeiro.el.focus();
      return;
    }

    // Limpa localStorage após envio
    Object.keys(campos).forEach(key => localStorage.removeItem('recircuito_form_' + key));

    // Exibe mensagem de sucesso
    const sucesso = document.getElementById('form-sucesso');
    if (sucesso) {
      form.style.display = 'none';
      sucesso.style.display = 'block';
      sucesso.setAttribute('role', 'alert');
      sucesso.focus();
    }
  });
})();

/* ============================================================
   4. FILTRO DE NOTÍCIAS
   ============================================================ */
(function filtroNoticias() {
  const btns = document.querySelectorAll('.filtro-noticias button');
  const artigos = document.querySelectorAll('article.noticia');
  if (!btns.length) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.cat;

      btns.forEach(b => { b.classList.remove('ativo'); b.setAttribute('aria-pressed', 'false'); });
      btn.classList.add('ativo');
      btn.setAttribute('aria-pressed', 'true');

      artigos.forEach(art => {
        const mostrar = cat === 'todos' || art.dataset.categoria === cat;
        art.classList.toggle('oculta', !mostrar);
      });
    });
  });
})();

/* ============================================================
   5. CICLOBOT – FAQ simples (assistente no site)
   ============================================================ */
(function ciclobot() {
  const btn        = document.getElementById('ciclobot-toggle');
  const painel     = document.getElementById('ciclobot-painel');
  const inputEl    = document.getElementById('ciclobot-input');
  const enviarBtn  = document.getElementById('ciclobot-enviar');
  const chatEl     = document.getElementById('ciclobot-chat');
  if (!btn || !painel) return;

  const respostas = [
    { gatilhos: ['bateria','pilha'],
      resp: '🔋 Pilhas e baterias têm descarte obrigatório separado. Supermercados e lojas de eletrônicos geralmente têm coletores.' },
    { gatilhos: ['celular','smartphone','tablet'],
      resp: '📱 Celulares devem ser levados a lojas da operadora ou fabricante. Muitas têm programas de reciclagem gratuitos.' },
    { gatilhos: ['ponto de coleta','onde descartar','onde levar'],
      resp: '📍 Você pode usar o mapa da página Mídia ou buscar "ecopontos" na sua cidade na Secretaria do Meio Ambiente.' },
    { gatilhos: ['ods','objetivo'],
      resp: '🌍 O Recircuito se alinha aos ODS 12 (Consumo Responsável) e ODS 13 (Ação Climática) da ONU.' },
    { gatilhos: ['voluntário','voluntariar','ajudar'],
      resp: '🤝 Ficamos felizes! Preencha o formulário de contato com o assunto "Voluntariado" e entraremos em contato.' },
    { gatilhos: ['doação','doar','apoio'],
      resp: '💚 Para apoiar, acesse nossa página de Projetos e clique em "Apoie" no projeto que quiser ajudar.' },
    { gatilhos: ['lixo eletrônico','e-waste','eletrônico'],
      resp: '🌱 Lixo eletrônico deve ser levado a pontos de coleta específicos. Nunca jogue no lixo comum — metais pesados contaminam o solo!' },
  ];

  btn.addEventListener('click', () => {
    const aberto = painel.hidden;
    painel.hidden = !aberto;
    btn.setAttribute('aria-expanded', aberto);
    if (aberto) inputEl.focus();
  });

  function responder() {
    const texto = (inputEl.value || '').toLowerCase().trim();
    if (!texto) return;

    // Adiciona mensagem do usuário
    const msgUser = document.createElement('p');
    msgUser.className = 'ciclobot-user';
    msgUser.textContent = '👤 ' + inputEl.value.trim();
    chatEl.appendChild(msgUser);

    // Encontra resposta
    let resp = '🤖 Não entendi bem. Tente perguntar sobre: "lixo eletrônico", "pilhas", "ponto de coleta" ou "voluntário".';
    for (const r of respostas) {
      if (r.gatilhos.some(g => texto.includes(g))) { resp = r.resp; break; }
    }

    const msgBot = document.createElement('p');
    msgBot.className = 'ciclobot-bot';
    msgBot.textContent = resp;
    chatEl.appendChild(msgBot);

    inputEl.value = '';
    chatEl.scrollTop = chatEl.scrollHeight;
  }

  enviarBtn.addEventListener('click', responder);
  inputEl.addEventListener('keydown', (e) => { if (e.key === 'Enter') responder(); });
})();

/* ============================================================
   6. CONTADOR ANIMADO (impacto.html)
   ============================================================ */
(function contadorAnimado() {
  const contadores = document.querySelectorAll('[data-contador]');
  if (!contadores.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el  = entry.target;
      const alvo = parseFloat(el.dataset.contador);
      const casas = parseInt(el.dataset.decimais || '0', 10);
      const fmt = (n) => n.toLocaleString('pt-BR', { minimumFractionDigits: casas, maximumFractionDigits: casas });
      const dur  = 1800;
      const ini  = performance.now();

      function animar(agora) {
        const prog = Math.min((agora - ini) / dur, 1);
        el.textContent = fmt(prog * alvo);
        if (prog < 1) requestAnimationFrame(animar);
        else el.textContent = fmt(alvo);
      }
      requestAnimationFrame(animar);
      observer.unobserve(el);
    });
  }, { threshold: 0.4 });

  contadores.forEach(el => observer.observe(el));
})();

/* ============================================================
   7. LIGHTBOX DA GALERIA (galeria.html)
   ============================================================ */
(function lightbox() {
  const botoes = document.querySelectorAll('.galeria-abrir');
  if (!botoes.length) return;

  // Cria o overlay uma única vez
  const overlay = document.createElement('div');
  overlay.className = 'lightbox';
  overlay.hidden = true;
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Imagem ampliada');
  overlay.innerHTML =
    '<figure class="lightbox-conteudo">' +
      '<img class="lightbox-img" src="" alt="">' +
      '<figcaption class="lightbox-legenda"></figcaption>' +
    '</figure>' +
    '<button type="button" class="lightbox-fechar" aria-label="Fechar imagem ampliada">✕ Fechar</button>';
  document.body.appendChild(overlay);

  const img      = overlay.querySelector('.lightbox-img');
  const legenda  = overlay.querySelector('.lightbox-legenda');
  const fechar   = overlay.querySelector('.lightbox-fechar');
  let origem = null; // botão que abriu (para devolver o foco)

  function abrir(btn) {
    const miniatura = btn.querySelector('img');
    const fig = btn.closest('figure');
    img.src = btn.dataset.grande || miniatura.src;
    img.alt = miniatura.alt;
    legenda.textContent = fig ? fig.querySelector('figcaption').textContent : '';
    overlay.hidden = false;
    origem = btn;
    fechar.focus();
  }

  function fecharLightbox() {
    overlay.hidden = true;
    if (origem) origem.focus();
  }

  botoes.forEach(btn => btn.addEventListener('click', () => abrir(btn)));
  fechar.addEventListener('click', fecharLightbox);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) fecharLightbox(); });
  document.addEventListener('keydown', (e) => {
    if (overlay.hidden) return;
    if (e.key === 'Escape') fecharLightbox();
    if (e.key === 'Tab') { e.preventDefault(); fechar.focus(); } // mantém o foco no diálogo
  });
})();
