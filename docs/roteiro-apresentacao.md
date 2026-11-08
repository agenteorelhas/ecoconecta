# Roteiro da Apresentação — Recircuito (AV A1)

**Tempo total: 20 min** — 10 min de slides (1 a 13), 5 min de demonstração ao vivo (slide 14) e 5 min de perguntas. Todos os integrantes falam. Texto dos slides com **20 pt ou mais**; prefira prints e tabelas.

| Bloco | Slides | Quem apresenta | Tempo |
|---|---|---|---|
| Problema e proposta | 1–4 | Gabriel Franco | 2 min 30 s |
| Arquitetura, MVP e JavaScript | 5–7 | Joaquim Martins | 3 min |
| Acessibilidade, GitHub e IA | 8–10 | Gabriel Cabrera | 2 min 30 s |
| Deploy, resultados e aprendizados | 11–13 | Guilherme Reis | 2 min |
| Demonstração ao vivo | 14 | Joaquim (pilota) + Guilherme (narra) | 5 min |

---

## Slide 1 — Capa
- **Recircuito** — Site de conscientização sobre lixo eletrônico
- Equipe: Joaquim Martins Ferreira Neto · Gabriel Cabrera Conceição · Guilherme Reis · Gabriel Franco
- DEV. Front-End — UNICID — Prof. Paulo Fratta — 2026
- URL: `https://agenteorelhas.github.io/recircuito/` + **QR code** da URL
- *Evidência:* QR code gerado a partir da URL publicada.

## Slide 2 — Problema e público
- **62 milhões de toneladas** de e-waste no mundo em 2022; só **22,3%** reciclados (Global E-waste Monitor 2024).
- Brasil: **5.º maior gerador**, ≈ 2,1 Mt/ano (GEM 2020).
- Público: moradores urbanos de 14 a 60 anos; **pessoas com deficiência como público prioritário**.
- ODS **12**, **13** e **10** (ícones).

## Slide 3 — Objetivos
- **Geral:** informar e mobilizar para o descarte correto, com site acessível.
- **Específicos (do escopo):** 10 páginas com 0 erros no W3C · formulário com JS + localStorage · Lighthouse Acessibilidade ≥ 90 · 4 indicadores com fonte · deploy com HTTPS a custo zero.

## Slide 4 — Equipe e papéis
| Integrante | Papel |
|---|---|
| Joaquim | JavaScript e revisão de PRs |
| Gabriel Cabrera | HTML semântico e acessibilidade |
| Guilherme | CSS, identidade visual e deploy |
| Gabriel Franco | Conteúdo, documentação e testes |
- *Evidência:* print do quadro de tarefas (Trello) ou da lista de PRs.

## Slide 5 — Arquitetura
```
recircuito/
├── index.html … orcamento_hospedagem.html (10 páginas)
├── css/  style.css · ciclobot.css
├── js/   main.js
├── img/  assets/  (imagem, vídeo e áudio)
├── docs/ README, diário, escopo, orçamento, testes, MVP
└── .cursor/rules/  (regras de IA)
```
- Tecnologias: HTML5, CSS3 (Grid/Flexbox), JavaScript puro, Git/GitHub, GitHub Pages.
- Mapa do site: Início → Projetos → Contato como fluxo principal.

## Slide 6 — Do MVP à versão final
- Mostrar 3 linhas de [melhorias-mvp.md](melhorias-mvp.md) com **print antes × depois**:
  1. Formulário: balão nativo → mensagens por campo + rascunho salvo.
  2. W3C: erro de títulos (`h4` após `h2`) → 0 erros.
  3. Alto contraste: inexistente → tema preto/amarelo persistente.

## Slide 7 — JavaScript
```js
// Ao enviar: impede o envio padrão e valida cada campo
form.addEventListener('submit', (e) => {
  e.preventDefault();                       // não recarrega a página
  let tudo_ok = true;
  Object.entries(campos).forEach(([key, cfg]) => {
    if (!validarCampo(key, cfg)) tudo_ok = false; // mostra erro e borda vermelha
  });
  if (!tudo_ok) return;                     // para no primeiro problema
  // limpa o rascunho salvo e mostra a mensagem de sucesso
});

// Rascunho: cada tecla digitada é salva no navegador
cfg.el.addEventListener('input', () => {
  localStorage.setItem('recircuito_form_' + key, cfg.el.value);
});
```
- Outras interações: menu mobile, alto contraste, filtro de notícias, CicloBot, contadores e lightbox.

## Slide 8 — Acessibilidade e responsividade
- Skip link, `lang="pt-BR"`, `aria-current`, `aria-live`, foco visível, alto contraste, `prefers-reduced-motion`.
- *Evidências:* print do W3C sem erros · print do Lighthouse · print da Home no celular (375 px).

## Slide 9 — Processo no GitHub
- Fluxo: branch `feature/...` → commit → pull request → revisão → merge na `main` → GitHub Pages publica.
- Padrão de commits: `feat:`, `fix:`, `docs:`.
- *Evidências:* print do gráfico de commits (Insights → Contributors) e do PR `feat: site Recircuito completo - entrega AV A1`.

## Slide 10 — Uso de IA
- Ferramenta: Abacus AI Agent + regras em `.cursor/rules/`.
- Prompt que funcionou: *"Crie as 9 páginas reaproveitando o mesmo header, nav e footer do index.html, com aria-current no link ativo…"*
- **Recusado:** chave do Google Maps no código (segurança) → OpenStreetMap.
- **Corrigido:** "62 países" era na verdade "62 milhões de toneladas".
- *Evidência:* seção "Uso de IA" do [diário de bordo](diario-de-bordo.md#uso-de-ia).

## Slide 11 — Deploy e orçamento
| Hospedagem | Preço/mês | HTTPS |
|---|---|---|
| **GitHub Pages (escolhida)** | R$ 0 | Automático |
| Netlify | R$ 0 / ≈ R$ 105 | Automático |
| Vercel | R$ 0 / ≈ R$ 110 | Automático |
- Domínio sugerido: `recircuito.eco.br` — R$ 40/ano. **Custo do 1.º ano: R$ 40.**

## Slide 12 — Objetivos alcançados
| Objetivo planejado | Entregue | Status |
|---|---|---|
| 10 páginas, 0 erros no W3C | 10 páginas, 0 erros | ✅ |
| Formulário com JS + localStorage | Validação, rascunho e sucesso | ✅ |
| Lighthouse Acessibilidade ≥ 90 | *preencher com a nota medida* | ⏳ |
| 4 indicadores com fonte | 4 contadores + gráfico + tabela | ✅ |
| Deploy HTTPS custo zero | GitHub Pages | ⏳ (confirmar URL no ar) |

## Slide 13 — Aprendizados
- "Usar variáveis CSS deixou o alto contraste quase de graça" (diário, 13/10).
- "A validação nativa impedia o submit; aprendemos progressive enhancement" (20/10).
- "Testar com o NVDA mostrou problemas que não aparecem visualmente" (27/10).
- **Próximos passos:** cadastro real de pontos no mapa, versão em Libras, oficinas EcoEduca.

## Slide 14 — Demonstração e perguntas
- "Agora vamos mostrar o site funcionando ao vivo." · Agradecimento · QR code.

---

## Roteiro da demonstração ao vivo (5 min, sempre pela URL publicada)

| # | Ação | Onde | Fala sugerida |
|---|---|---|---|
| 1 | Abrir a URL e navegar por Início → Projetos → Impacto | Menu | "O item amarelo mostra em que página estamos." |
| 2 | F12 → Ctrl+Shift+M → 375 px; abrir e fechar o menu (Esc) | Qualquer página | "No celular o menu vira hambúrguer." |
| 3 | Contato: enviar vazio, mostrar erros; digitar e-mail inválido; enviar certo | `contato.html` | "O JS usa preventDefault e mostra o erro em cada campo." |
| 4 | Digitar o nome, recarregar (F5): o nome continua | `contato.html` | "O rascunho fica no localStorage." |
| 5 | Ativar alto contraste, recarregar; navegar com Tab/Enter; abrir e fechar imagem da galeria com Enter/Esc | Header e `galeria.html` | "Tudo funciona só com o teclado." |
| 6 | Abrir o GitHub: commits e o pull request | github.com/agenteorelhas/recircuito | "Cada integrante tem commits; a entrega entrou por PR." |

### Plano B (se a internet falhar)
1. Vídeo curto (1–2 min) gravado da demonstração, salvo no notebook e no pendrive.
2. Prints numerados de cada passo do roteiro acima.
3. Site aberto localmente (`index.html` do `.zip`) — funciona sem internet, exceto vídeo do YouTube e mapa.

---

## Possíveis perguntas da banca e respostas sugeridas

**1. O que este trecho de JavaScript faz, linha a linha?** (submit do formulário)
> `addEventListener('submit')` escuta o envio. `e.preventDefault()` impede o recarregamento. O `forEach` chama `validarCampo` em cada campo: ele testa a expressão regular, coloca a classe `erro` ou `ok`, escreve a mensagem no `span` de erro e atualiza `aria-invalid`. Se algo falhar, focamos o primeiro campo inválido e paramos. Se tudo estiver certo, apagamos o rascunho do `localStorage` e mostramos a mensagem de sucesso com foco.

**2. Qual ponto do MVP foi mais difícil de corrigir, e como vocês resolveram?**
> O alto contraste. Ao trocar as variáveis de cor, alguns textos ficaram preto no preto. Encontramos testando página por página e definimos cores explícitas para títulos, cabeçalhos e botões dentro de `body.alto-contraste`.

**3. Que sugestão da IA vocês recusaram, e por quê?**
> Colocar uma chave de API do Google Maps no código. Em repositório público, qualquer pessoa poderia usar a chave. Trocamos pelo mapa do OpenStreetMap, que não precisa de chave. Também corrigimos um dado errado ("62 países" em vez de "62 milhões de toneladas").

**4. Como uma pessoa cega usaria o formulário de vocês?**
> Com um leitor de tela como o NVDA, ela usa Tab para ir de campo em campo. Cada campo tem `label for`, então o nome é lido. Se houver erro, o campo recebe `aria-invalid="true"` e a mensagem, ligada por `aria-describedby` e com `aria-live`, é anunciada. Ao enviar, o foco vai para a mensagem de sucesso, que também é lida.

**5. Por que GitHub Pages e não Vercel ou Netlify?**
> Os três têm plano gratuito com HTTPS, mas o GitHub Pages publica direto do repositório que já usamos, sem outra conta, e é suficiente para um site estático.

**6. Por que não usaram Bootstrap?**
> Para que todos entendessem e explicassem cada linha, e para manter o site leve. Grid e Flexbox resolveram o layout responsivo.
