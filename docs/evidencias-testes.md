# Evidências de Testes — EcoConecta

Plano de testes da entrega final. A coluna **Resultado obtido** registra o que foi executado em **07/11/2026** (servidor local `python3 -m http.server` + Google Chrome). Itens marcados como **Pendente** devem ser executados pela equipe no site publicado, com print anexado na pasta `docs/prints/`.

Legenda de status: ✅ Aprovado · ⏳ Pendente (executar e registrar) · ❌ Reprovado

## Resumo

| ID | Tipo | Descrição | Resultado esperado | Resultado obtido | Status |
|---|---|---|---|---|---|
| T01 | Navegação | Links do menu e do rodapé nas 10 páginas | Todos os links locais abrem páginas existentes | Script verificou todos os `href`/`src` locais das 10 páginas: 0 quebrados | ✅ |
| T02 | Navegação | Página ativa destacada | Cada página tem exatamente 1 `aria-current="page"` no link certo | 10/10 páginas com o link correto marcado | ✅ |
| T03 | Formulário | Enviar com todos os campos vazios | Mensagens em nome, e-mail, assunto e mensagem; foco no 1.º erro | 4 mensagens exibidas; envio bloqueado | ✅ |
| T04 | Formulário | E-mail inválido (`invalido`) | "Informe um e-mail válido." e borda vermelha | Mensagem exibida | ✅ |
| T05 | Formulário | Quantidade fora do limite (5000) | "Informe um número entre 1 e 1000." | Mensagem exibida | ✅ |
| T06 | Formulário | Envio correto | Formulário some e aparece "Mensagem enviada!" com foco | Mensagem de sucesso exibida e focada | ✅ |
| T07 | localStorage | Rascunho do formulário | Texto digitado continua após recarregar; é apagado após envio | Rascunho salvo (`ecoconecta_form_nome`) e removido após envio | ✅ |
| T08 | localStorage | Preferência de alto contraste | Modo continua ativo após recarregar | Após recarregar, `body.alto-contraste` ativo e botão "Contraste Normal" | ✅ |
| T09 | Acessibilidade | Navegação só com teclado (Tab/Shift+Tab/Enter/Esc) | Todos os elementos alcançáveis com foco visível | — | ⏳ |
| T10 | Acessibilidade | Lightbox da galeria | Abre com Enter, foco vai para "Fechar", Esc fecha e foco volta à imagem | Abriu, foco em "Fechar"; Esc fechou e foco voltou ao botão da imagem | ✅ |
| T11 | Acessibilidade | Leitor de tela (NVDA) no formulário | Rótulos e erros anunciados | — | ⏳ |
| T12 | Responsivo | Desktop 1920 px | Layout em grade, menu horizontal | — | ⏳ |
| T13 | Responsivo | Tablet 768 px | Menu hambúrguer, cards em 2 colunas | — | ⏳ |
| T14 | Responsivo | Celular 375 px | Menu hambúrguer, 1 coluna, sem rolagem horizontal | — | ⏳ |
| T15 | Validação | W3C Markup Validator nas 10 páginas | 0 erros | API do validador (validator.w3.org/nu): **0 erros** nas 10 páginas | ✅ |
| T16 | Desempenho/A11y | Lighthouse (Acessibilidade ≥ 90) | Nota ≥ 90 em Acessibilidade | — | ⏳ |
| T17 | Alto contraste | Botão alterna tema preto/amarelo | Textos, títulos, menu e botões legíveis | Corrigido: títulos e cabeçalhos estavam invisíveis (preto no preto); após ajuste do CSS, todos legíveis | ✅ |
| T18 | Multimídia | `<video>` local com pôster | Pôster aparece; vídeo de 3 s toca | Arquivo `assets/ewaste-video.mp4` gerado (3,0 s, H.264) | ⏳ (conferir no navegador) |
| T19 | Multimídia | `<audio>` local | Player aparece e toca | Arquivo `assets/podcast-ewaste.mp3` gerado (3 s) | ⏳ (conferir no navegador) |
| T20 | Multimídia | Iframes YouTube e OpenStreetMap | Vídeo e mapa carregam | Vídeo `VYLLhCnPnVc` confirmado como existente; mapa OSM exibido em contato.html | ✅ |
| T21 | Interação | Filtro de notícias | "Educação" mostra 2 notícias; "Todas" mostra 6 | Educação = 2; Todas = 6 | ✅ |
| T22 | EcoBot | 5 perguntas frequentes | Resposta coerente com o tema da pergunta | 5/5 corretas após corrigir a ordem dos gatilhos (ver abaixo) | ✅ |

## Detalhes e instruções de execução

### T01–T02 — Navegação
1. Abra `index.html`.
2. Clique em cada item do menu e confira se a página abre e se o item fica amarelo (página atual).
3. Repita com os links do rodapé.

### T03–T07 — Formulário e localStorage
1. Abra `contato.html` e clique em **Enviar mensagem** sem preencher nada → devem aparecer as mensagens em vermelho.
2. Digite `invalido` no e-mail e saia do campo → mensagem de e-mail inválido.
3. Digite um nome, recarregue a página (F5) → o nome continua preenchido.
4. Preencha tudo corretamente (mensagem com 20+ caracteres) e envie → aparece "Mensagem enviada! Obrigado pelo contato. 🌿".
5. DevTools (F12) → **Application → Local Storage**: as chaves `ecoconecta_form_*` somem após o envio.

### T08 / T17 — Alto contraste
1. Clique em **◑ Alto Contraste** no topo.
2. Navegue por 3 páginas e recarregue: o modo deve continuar ativo (chave `ecoconecta_contraste = alto`).
3. Confira se títulos, menu, botões e tabelas estão legíveis.

### T09 — Teclado
1. Clique na barra de endereço e pressione **Tab**: o primeiro foco é "Pular para o conteúdo principal".
2. Use **Tab/Shift+Tab** para percorrer menu, botões e formulário; **Enter** para acionar.
3. Na galeria, pressione **Enter** sobre uma imagem e **Esc** para fechar.
4. No celular (DevTools), abra o menu com **Enter** e feche com **Esc**.

### T12–T14 — Responsividade
1. F12 → ícone de dispositivo (**Ctrl+Shift+M**).
2. Teste as larguras 1920, 768 e 375 px em `index.html`, `impacto.html` e `contato.html`.
3. Tire prints da Home no desktop e no celular (exigidos na entrega).

### T15 — W3C Validator
1. Acesse https://validator.w3.org/nu/.
2. Para o site publicado: **Check by address** com a URL de cada página. Para arquivos locais: **File upload**.
3. Registrar "Document checking completed. No errors or warnings to show." (print).

### T16 — Lighthouse
1. Abra a página no Chrome → F12 → aba **Lighthouse**.
2. Marque **Accessibility**, **Best Practices**, **SEO** e **Performance**; modo **Navigation**; dispositivo **Mobile** e depois **Desktop**.
3. Clique em **Analyze page load** e registre as notas.

### T18–T20 — Multimídia
1. Abra `midia.html`; dê play no vídeo e no áudio.
2. Confira se o vídeo do YouTube e o mapa do OpenStreetMap carregam (exige internet).

### T21 — Filtro de notícias
1. Abra `noticias.html` e clique em cada categoria; apenas as notícias da categoria devem aparecer.

### T22 — EcoBot

| Pergunta | Resposta esperada (início) |
|---|---|
| O que é lixo eletrônico? | 🌱 Lixo eletrônico deve ser levado a pontos de coleta… |
| Onde descartar pilhas? | 🔋 Pilhas e baterias têm descarte obrigatório… |
| Ponto de coleta perto | 📍 Você pode usar o mapa da página Mídia… |
| Como descartar celular velho | 📱 Celulares devem ser levados a lojas… |
| Quero ser voluntário | 🤝 Ficamos felizes! Preencha o formulário… |

## Defeitos encontrados e corrigidos durante os testes

| Defeito | Causa | Correção |
|---|---|---|
| "Onde descartar pilhas?" respondia sobre pontos de coleta | O gatilho genérico "onde descartar" vinha antes de "pilha" | Gatilhos específicos (pilha, celular) passaram para o início da lista |
| Alto contraste deixava títulos e cabeçalhos invisíveis | Variáveis `--branco` e `--verde-*` viravam preto e eram usadas como cor de texto | Cores explícitas para textos no bloco `body.alto-contraste` |
| Erro W3C de hierarquia de títulos | Título do EcoBot em `h4` logo após `h2` | Trocado por `h2` |
| Contador mostrava "2" em vez de "2,1" | Uso de `parseInt` | `parseFloat` + atributo `data-decimais` |
