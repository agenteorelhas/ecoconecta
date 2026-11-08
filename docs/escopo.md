# Escopo do Projeto — Recircuito

## 1. Identificação

| Item | Descrição |
|---|---|
| Nome da equipe | Recircuito |
| Nome do projeto/site | Recircuito — Site de Conscientização sobre Lixo Eletrônico |
| Integrantes | Joaquim Martins Ferreira Neto (RGM 47609630); Gabriel Cabrera Conceição (RGM 47657499); Guilherme Reis (RGM 47513438); Gabriel Franco (RGM 47451289) |
| Data | 06/10/2026 (versão inicial) — revisado em 07/11/2026 |
| Professor/disciplina | Prof. Paulo Fratta — DEV. Front-End, Curso Superior de Informática, UNICID |

## 2. Contexto e Justificativa

- **Problema:** descarte incorreto de lixo eletrônico. Em 2022 o mundo gerou 62 milhões de toneladas de e-waste e só 22,3% foram reciclados de forma documentada (Global E-waste Monitor 2024). O Brasil gera cerca de 2,1 milhões de toneladas por ano e é o 5.º maior gerador do mundo (GEM 2020).
- **Relevância:** eletrônicos contêm chumbo, mercúrio e cádmio, que contaminam solo e água; ao mesmo tempo, contêm metais valiosos que podem ser recuperados. Falta informação simples sobre onde e como descartar.
- **Relação com sustentabilidade e impacto social:** o site promove a economia circular (ODS 12), reduz emissões ligadas à mineração (ODS 13) e incentiva a doação de equipamentos recondicionados para escolas públicas (ODS 10).

## 3. Objetivos

**Geral:** informar e mobilizar a população para o descarte correto de lixo eletrônico por meio de um site acessível, inclusive para pessoas com deficiência.

**Específicos (mensuráveis):**

1. Publicar 10 páginas HTML5 interligadas, com **0 erros** no W3C Validator.
2. Disponibilizar formulário de contato/voluntariado com validação HTML5 + JavaScript e rascunho salvo em `localStorage`.
3. Obter **≥ 90** em Acessibilidade no Lighthouse nas 10 páginas.
4. Apresentar **pelo menos 4 indicadores** de impacto com fonte citada.
5. Publicar o site com HTTPS e **custo de hospedagem R$ 0,00**.

## 4. Público-Alvo

- **Quem:** moradores de centros urbanos que têm eletrônicos parados em casa; estudantes e professores; pequenas empresas.
- **Faixa etária:** 14 a 60 anos.
- **Localização:** inicialmente a cidade de São Paulo, com expansão para todo o Brasil.
- **Público prioritário:** **pessoas com deficiência** (visual, auditiva, motora e cognitiva), atendidas com leitor de tela, navegação por teclado, alto contraste e linguagem simples.

## 5. Escopo Funcional

| # | Página | Função |
|---|---|---|
| 1 | `index.html` | Resumo do tema, ODS, solução e menu principal |
| 2 | `sobre.html` | História, missão, visão, valores, equipe e parceiros |
| 3 | `projetos.html` | EcoRota Digital, EcoRecondicionado e EcoEduca; área "Apoie" |
| 4 | `impacto.html` | Contadores, tabela regional, gráfico e metas |
| 5 | `acessibilidade.html` | Medidas de inclusão para PCD e declaração |
| 6 | `galeria.html` | Imagens com legendas, fontes e lightbox |
| 7 | `midia.html` | Vídeo, áudio e iframes (YouTube e mapa) |
| 8 | `noticias.html` | Notícias com filtro por categoria |
| 9 | `contato.html` | Dados fictícios, formulário validado e membros da equipe |
| 10 | `orcamento_hospedagem.html` | Comparativo de hospedagem e domínio |

- **Formulário de contato:** nome, e-mail, telefone, data, quantidade de equipamentos, assunto e mensagem.
- **Galeria, mídia e notícias:** conforme tabela acima.
- **Navegação principal:** menu fixo no topo com as 10 páginas, menu hambúrguer no celular, rodapé com atalhos e CicloBot (FAQ) em todas as páginas.

## 6. Escopo Não Funcional

- **Acessibilidade:** `alt` descritivo, contraste AA (4,5:1), navegação por teclado, compatibilidade com leitores de tela, ARIA, `lang="pt-BR"`, skip link, foco visível e modo alto contraste.
- **Sustentabilidade:** conteúdo educativo, hospedagem com compromisso de energia renovável, imagens leves e `loading="lazy"`.
- **Responsividade:** desktop (≥ 1024 px), tablet (768 px) e celular (375 px), com Grid e Flexbox.
- **Desempenho:** sem bibliotecas externas, CSS e JS em arquivos únicos, imagens otimizadas.
- **SEO básico:** `<title>` único por página, `meta description`, hierarquia `h1`–`h3`.

## 7. Mapa do Site

```
index.html (Início)
├── sobre.html
├── projetos.html ──► contato.html (botão "Apoie")
├── impacto.html
├── acessibilidade.html
├── galeria.html
├── midia.html
├── noticias.html
├── contato.html
└── orcamento_hospedagem.html
```

Todas as páginas se ligam entre si pelo menu principal (header) e pelo rodapé. O fluxo principal é: **Início → Projetos → Contato** (conhecer o problema → conhecer a solução → apoiar).

## 8. Conteúdo e Identidade Visual

- **Tom de voz:** informativo, acolhedor e direto; frases curtas.
- **Cores:** verde-escuro `#1b5e20`, verde-médio `#2e7d32`, verde-claro `#4caf50`, verde-suave `#c8e6c9`, amarelo `#f9a825` (destaque).
- **Tipografia:** Segoe UI / Arial (fontes do sistema, sem download), base de 18 px.
- **Logotipo:** ícone 🌿 + "Recircuito" em negrito.
- **Fontes:** dados do Global E-waste Monitor 2020/2024, Lei 12.305/2010 e Decreto 10.240/2020; imagens placeholder (placehold.co) e imagem própria da equipe; vídeo do canal Circuito Ambiental; mapas do OpenStreetMap.

## 9. Tecnologias e Ferramentas

- **Linguagens:** HTML5, CSS3 e JavaScript (ES6+), sem frameworks.
- **Editores:** VS Code (Live Server) e Cursor.
- **Controle de versão:** Git e GitHub (branches e pull requests).
- **Validadores:** W3C Markup Validator, Lighthouse (Chrome DevTools), NVDA.
- **Hospedagem:** GitHub Pages.
- **IA:** Abacus AI Agent, com regras em `.cursor/rules/`.

## 10. Cronograma e Divisão de Tarefas

| Etapa | Data | Responsável |
|---|---|---|
| Tema e escopo | 01/10 – 06/10/2026 | Todos |
| HTML das páginas | 07/10 – 15/10/2026 | Gabriel Cabrera |
| CSS e responsividade | 07/10 – 15/10/2026 | Guilherme Reis |
| Entrega do MVP (AV A2) | 17/10/2026 | Todos |
| JavaScript | 18/10 – 27/10/2026 | Joaquim Martins |
| Conteúdo, notícias e impacto | 18/10 – 31/10/2026 | Gabriel Franco |
| Testes e correções do MVP | 28/10 – 04/11/2026 | Gabriel Franco e Gabriel Cabrera |
| Deploy e orçamento | 05/11 – 07/11/2026 | Guilherme Reis |
| Envio no Blackboard | até 09/11/2026 | Joaquim Martins |
| Apresentação | 09/11 ou 16/11/2026 | Todos |

**Ferramenta de gestão:** quadro de tarefas compartilhado (Trello) e pull requests no GitHub.

## 11. Riscos e Restrições

| Risco | Mitigação |
|---|---|
| Atraso por conflito de horários | Reuniões semanais curtas e tarefas pequenas |
| Pouca experiência com JavaScript | Código simples, comentado e revisado em par |
| Links externos (vídeo, mapa) saírem do ar | Conferir links antes de publicar; ter prints como plano B |
| Internet falhar na apresentação | Vídeo curto e prints da demonstração |
| Restrição: sem bibliotecas externas | Componentes feitos à mão (menu, lightbox, filtro) |

## 12. Critérios de Aceitação

O site está pronto quando:

- [ ] As 10 páginas abrem pela URL publicada com HTTPS e sem links quebrados.
- [ ] O W3C Validator mostra 0 erros nas 10 páginas.
- [ ] O formulário mostra erros com JS e mantém o rascunho após recarregar.
- [ ] Todo o site é navegável só com teclado.
- [ ] O Lighthouse mostra Acessibilidade ≥ 90.
- [ ] O layout funciona em 375 px, 768 px e 1920 px.
- [ ] A pasta `/docs` está completa (README, diário, escopo, orçamento, testes, melhorias do MVP).

## 13. Aprovação

| Responsável pela validação | Data | Assinatura |
|---|---|---|
| Joaquim Martins Ferreira Neto (líder) | 07/11/2026 | ______________________ |
| Prof. Paulo Fratta (orientador) | ____/____/2026 | ______________________ |
