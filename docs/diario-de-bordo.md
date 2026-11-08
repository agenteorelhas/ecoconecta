# Diário de Bordo — EcoConecta

Registro datado das decisões, dificuldades e aprendizados da equipe entre **01/10/2026** e **07/11/2026**.

> Observação da equipe: antes da entrega, cada integrante revisa as entradas abaixo e ajusta detalhes (horários, quem fez o quê) para que o diário reflita exatamente o que aconteceu.

---

## 01/10/2026 — Definição do tema

- **O que foi feito:** reunião de abertura; leitura dos roteiros da AV A2 (MVP) e AV A1 (entrega final); levantamento de temas de sustentabilidade.
- **Decisões:** escolhemos **lixo eletrônico**, porque o Brasil é o 5.º maior gerador do mundo e o tema une meio ambiente (ODS 12 e 13) e inclusão digital (ODS 10). Nome do projeto: **EcoConecta**.
- **Dificuldades:** o tema "reciclagem" era amplo demais; recortamos para resíduos eletroeletrônicos.
- **Aprendizados:** um problema bem delimitado facilita escrever objetivos mensuráveis.

## 06/10/2026 — Escopo e mapa do site

- **O que foi feito:** primeira versão do [escopo](escopo.md), mapa das 10 páginas e divisão de tarefas.
- **Decisões:** stack sem bibliotecas (HTML5 + CSS3 + JS puro) para que todos consigam explicar o código; paleta verde com amarelo de destaque.
- **Dificuldades:** conciliar horários dos quatro integrantes; adotamos reuniões curtas às segundas e quadro de tarefas compartilhado.
- **Aprendizados:** escrever critérios de aceitação antes de codar evita discussões no final.

## 13/10/2026 — Estrutura HTML e CSS base

- **O que foi feito:** `index.html`, header/nav/footer padrão, `css/style.css` com variáveis CSS, Grid e Flexbox.
- **Decisões:** fonte base de 18 px; cores definidas em `:root` para facilitar o modo alto contraste.
- **Dificuldades:** o menu com 10 links quebrava em telas médias; criamos o menu hambúrguer abaixo de 768 px.
- **Aprendizados:** usar variáveis CSS deixou o alto contraste quase "de graça" — basta redefini-las em `body.alto-contraste`.

## 17/10/2026 — Entrega do MVP (AV A2)

- **O que foi feito:** 10 páginas em HTML + CSS compactadas em `.zip` e entregues no Blackboard.
- **Decisões:** JavaScript ficou para a 2.ª entrega, como permitido.
- **Dificuldades:** o W3C Validator acusou títulos pulando níveis e atributos obsoletos.
- **Aprendizados:** validar cada página durante o desenvolvimento, não só no final. Os pontos a corrigir estão em [melhorias-mvp.md](melhorias-mvp.md).

## 20/10/2026 — JavaScript: formulário e localStorage

- **O que foi feito:** validação do formulário com `preventDefault`, mensagens por campo, borda vermelha/verde e rascunho salvo em `localStorage`.
- **Decisões:** manter os atributos HTML5 (`required`, `pattern`, `type="email"`) e, com JS ativo, usar `form.noValidate = true` para exibir as mensagens personalizadas. Sem JS, a validação nativa continua funcionando.
- **Dificuldades:** a validação nativa do navegador impedia o evento `submit`, então nossas mensagens nunca apareciam.
- **Aprendizados:** *progressive enhancement* — o HTML funciona sozinho e o JS melhora a experiência.

## 27/10/2026 — Acessibilidade, alto contraste e EcoBot

- **O que foi feito:** link "pular para o conteúdo", `aria-current` no menu, `aria-live` nas mensagens, alto contraste persistente e o assistente EcoBot.
- **Decisões:** o lightbox da galeria devolve o foco ao botão que o abriu e fecha com `Esc`.
- **Dificuldades:** o título do EcoBot era `h4` e gerava erro de hierarquia de títulos no validador; trocamos por `h2`.
- **Aprendizados:** testar com o NVDA mostrou problemas que não aparecem visualmente.

## 03/11/2026 — Páginas finais, mídia e testes

- **O que foi feito:** revisão das 10 páginas, contadores animados, gráfico em CSS puro, filtro de notícias, vídeo/áudio locais, iframe do YouTube e mapa do OpenStreetMap.
- **Decisões:** o mapa usa OpenStreetMap porque o Google Maps exige chave de API; o vídeo do YouTube usa `youtube-nocookie.com`.
- **Dificuldades:** o primeiro ID de vídeo do YouTube que pegamos não existia mais; conferimos e trocamos por um vídeo válido em português.
- **Aprendizados:** checar cada link externo antes de publicar. Plano de testes registrado em [evidencias-testes.md](evidencias-testes.md).

## 07/11/2026 — GitHub, deploy e apresentação

- **O que foi feito:** branch `feature/site-ecoconecta`, pull request para `main`, documentação final e roteiro da apresentação.
- **Decisões:** GitHub Pages como hospedagem (gratuito, HTTPS automático) — ver [orcamento.md](orcamento.md).
- **Dificuldades:** garantir commits de todos os integrantes; cada um faz pelo menos um commit da sua parte antes do merge.
- **Aprendizados:** PR com descrição clara facilita a revisão e serve de evidência para a banca.

---

## Uso de IA

### Ferramentas

- **Abacus AI Agent** (assistente de IA com acesso a terminal e navegador) — usado em 07/11/2026.
- Regras de contexto para o Cursor/VS Code em `.cursor/rules/` e `.github/instructions/`, que limitam o que a IA pode gerar (stack, páginas, acessibilidade).

### Para que a IA foi usada

| Uso | Resultado | O que a equipe revisou |
|---|---|---|
| Geração da estrutura base das páginas HTML5 | Esqueleto com header/nav/main/footer repetido nas 10 páginas | Conferimos a hierarquia de títulos e o `aria-current` de cada página |
| Sugestão de paleta e identidade visual | Verdes `#1b5e20`, `#2e7d32`, `#4caf50` + amarelo `#f9a825` | Checamos o contraste (mínimo 4,5:1) de cada combinação |
| Textos sobre e-waste com base no Global E-waste Monitor | Parágrafos de contexto e notícias | Conferimos cada número com a fonte original |
| Validação de boas práticas WCAG | Lista de verificação de acessibilidade | Testamos manualmente com teclado e NVDA |

### Sugestões recusadas ou corrigidas

1. **Chave de API do Google Maps colada no código.** Recusamos: chave exposta em repositório público é uma falha de segurança. Usamos o embed do OpenStreetMap, que não precisa de chave.
2. **"62 países com legislação de e-waste".** O número estava errado: 62 é a quantidade de **milhões de toneladas** geradas em 2022. Corrigimos a legenda do contador. Também trocamos "Em 2023" por "Em 2022" no `index.html`, conforme o relatório.
3. **ID de vídeo do YouTube inexistente.** A IA sugeriu um link que retornava "não encontrado"; verificamos e substituímos por um vídeo válido.
4. **Contador com `parseInt`.** O valor 2,1 aparecia como "2". Ajustamos o JS para `parseFloat` com o atributo `data-decimais`.
5. **Validação nativa bloqueando o JS.** As mensagens personalizadas não apareciam; adicionamos `form.noValidate = true` no script.

### Prompts usados e resultados

**Prompt 1 — estrutura das páginas**

> "Crie as 9 páginas HTML restantes do EcoConecta reaproveitando o mesmo header, nav e footer do index.html, com `aria-current="page"` no link ativo, alto contraste e EcoBot em todas. Sem bibliotecas externas, tudo em pt-BR."

*Resultado:* páginas geradas a partir de um modelo único, o que garantiu menu e rodapé idênticos. Aceito após validação no W3C (0 erros).

**Prompt 2 — formulário acessível**

> "Monte o formulário de contato com id `form-contato`, campos nome (pattern), e-mail, telefone, data, quantidade de equipamentos (1 a 1000), assunto e mensagem (mínimo 20 caracteres), com `label for` e um `span` de erro para cada campo."

*Resultado:* formulário aceito; a equipe acrescentou `aria-describedby` ligando cada campo à sua mensagem de erro e testou com o NVDA.

**Prompt 3 — documentação**

> "Escreva o escopo seguindo as 13 seções do roteiro do professor e um plano de testes com ID, tipo, descrição, resultado esperado, resultado obtido e status."

*Resultado:* rascunhos de `escopo.md` e `evidencias-testes.md`; a equipe revisou prazos, responsáveis e executou os testes antes de marcar o status.

### Como explicamos o código gerado

Todo trecho gerado com IA foi lido em reunião e comentado em português. Cada integrante sabe explicar a parte do código pela qual é responsável (ver [README](README.md#divisão-de-funções)).
