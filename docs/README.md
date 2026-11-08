# Recircuito — Site de Conscientização sobre Lixo Eletrônico

Projeto acadêmico da disciplina **DEV. Front-End** — Curso Superior de Informática, **UNICID** (2.º semestre de 2026).

| Item | Link |
|---|---|
| Site publicado | `https://agenteorelhas.github.io/recircuito/` *(endereço previsto — passa a responder depois que o GitHub Pages for ativado na branch `main`)* |
| Repositório GitHub | https://github.com/agenteorelhas/recircuito |

## Equipe

| Nome completo | RGM | GitHub | Função |
|---|---|---|---|
| Joaquim Martins Ferreira Neto | 47609630 | [@netosec](https://github.com/netosec) | Líder técnico e JavaScript |
| Gabriel Cabrera Conceição | 47657499 | [@gabrielcabrera602-commits](https://github.com/gabrielcabrera602-commits) | HTML semântico e acessibilidade |
| Guilherme Reis | 47513438 | [@Coelho](https://github.com/Coelho) | CSS, identidade visual e deploy |
| Gabriel Franco | 47451289 | [@gfranco0](https://github.com/gfranco0) | Conteúdo, documentação e testes |

## Como rodar

1. Clone o repositório: `git clone https://github.com/agenteorelhas/recircuito.git`
2. Abra o arquivo `index.html` no navegador (duplo clique).
3. Ou, no VS Code, instale a extensão **Live Server**, clique com o botão direito em `index.html` e escolha **Open with Live Server**.

Não há dependências, build ou bibliotecas externas: apenas HTML5, CSS3 e JavaScript puro.

## Tema e justificativa

**Lixo eletrônico (e-waste).** O mundo gerou 62 milhões de toneladas de resíduos eletroeletrônicos em 2022 e apenas 22,3% foram reciclados de forma documentada (Global E-waste Monitor 2024). O Brasil é o 5.º maior gerador do planeta, com cerca de 2,1 milhões de toneladas por ano (Global E-waste Monitor 2020). Metais pesados como chumbo, mercúrio e cádmio contaminam solo e água quando o descarte é incorreto, e a maioria das pessoas não sabe onde descartar seus aparelhos.

A solução proposta é a **EcoRota Digital**: mapa colaborativo de pontos de coleta, somado a conteúdo educativo e acessível. O projeto se relaciona aos ODS **12** (consumo e produção responsáveis), **13** (ação climática) e **10** (redução das desigualdades, por meio da doação de equipamentos recondicionados).

## Objetivos do projeto

**Geral:** informar e mobilizar a população para o descarte correto de lixo eletrônico, com um site acessível a todas as pessoas, inclusive pessoas com deficiência.

**Específicos:**

1. Publicar 10 páginas interligadas, com zero erros no W3C Validator.
2. Oferecer formulário de contato/voluntariado validado com HTML5 e JavaScript, com rascunho salvo em `localStorage`.
3. Atingir nota mínima de 90 em Acessibilidade no Lighthouse em todas as páginas.
4. Apresentar pelo menos 4 indicadores de impacto com fonte citada.
5. Publicar o site com HTTPS (GitHub Pages) e custo de hospedagem zero.

## Páginas

| Página | Conteúdo |
|---|---|
| `index.html` | Resumo do tema, ODS e solução EcoRota Digital |
| `sobre.html` | História, missão, visão, valores, equipe e parceiros |
| `projetos.html` | EcoRota Digital, EcoRecondicionado e EcoEduca (área de apoio) |
| `impacto.html` | Contadores animados, tabela regional, gráfico em CSS e metas ODS |
| `acessibilidade.html` | WCAG 2.1 AA, medidas, atalhos de teclado e declaração |
| `galeria.html` | 9 imagens com legenda, fonte e lightbox em JS |
| `midia.html` | `<video>`, `<audio>`, iframe do YouTube e mapa |
| `noticias.html` | 6 notícias com filtro por categoria |
| `contato.html` | Dados fictícios, formulário validado, mapa e equipe |
| `orcamento_hospedagem.html` | Comparativo de 3 hospedagens e 3 domínios |

## Funcionalidades em JavaScript (`js/main.js`)

- Menu responsivo no celular (fecha com `Esc`).
- Alto contraste com preferência salva em `localStorage`.
- Validação do formulário com `preventDefault`, mensagens de erro e borda em destaque; rascunho salvo em `localStorage`.
- Filtro de notícias por categoria.
- CicloBot: assistente de perguntas frequentes.
- Contadores animados (`IntersectionObserver`) e lightbox da galeria.

## Divisão de funções

| Integrante | Responsabilidades |
|---|---|
| Joaquim | `js/main.js` (validação, localStorage, filtro, CicloBot, lightbox), revisão de PRs |
| Gabriel Cabrera | Estrutura HTML5 das páginas, ARIA, `acessibilidade.html`, testes com teclado e NVDA |
| Guilherme | `css/style.css`, `css/ciclobot.css`, responsividade, alto contraste, deploy no GitHub Pages, orçamento |
| Gabriel Franco | Textos e fontes, `noticias.html`, `impacto.html`, documentação em `/docs` e evidências de testes |

## Documentação

- [Escopo do projeto](escopo.md)
- [Diário de bordo e uso de IA](diario-de-bordo.md)
- [Orçamento de hospedagem e domínio](orcamento.md)
- [Evidências de testes](evidencias-testes.md)
- [Melhorias desde o MVP](melhorias-mvp.md)
- [Roteiro da apresentação](roteiro-apresentacao.md)

## Créditos

- Dados: Global E-waste Monitor 2020 e 2024 (UNITAR/ITU); Lei 12.305/2010 e Decreto 10.240/2020.
- Vídeo incorporado: canal Circuito Ambiental (YouTube). Mapas: © colaboradores do OpenStreetMap.
- Imagens: placeholders gerados por placehold.co; `img/hero-ewaste.jpg` produzida pela equipe.
- A IA foi usada como apoio, conforme registrado no [diário de bordo](diario-de-bordo.md#uso-de-ia).
