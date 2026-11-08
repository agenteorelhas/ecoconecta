# Melhorias desde o MVP (1.ª entrega → entrega final)

Pontos levantados na revisão do MVP (AV A2), com base na rubrica e no W3C Validator, e como cada um foi resolvido.

> Se o professor tiver apontado itens diferentes na devolutiva do MVP, a equipe acrescenta-os nesta tabela com o mesmo formato.

| # | Problema identificado | Solução implementada | Antes | Depois |
|---|---|---|---|---|
| 1 | Sem JavaScript (opcional no MVP, obrigatório agora) | Criado `js/main.js` com 7 módulos: menu, alto contraste, formulário, filtro, EcoBot, contadores e lightbox | Site apenas HTML + CSS | Interações por evento em todas as páginas |
| 2 | Formulário só com validação nativa, sem mensagens claras | Validação com `preventDefault`, mensagem por campo, borda vermelha/verde e `aria-invalid` | Balão padrão do navegador, só no 1.º campo com erro | Todas as mensagens em português, lidas pelo leitor de tela |
| 3 | Rascunho do formulário se perdia ao recarregar | Rascunho salvo em `localStorage` e apagado após o envio | Dados perdidos no F5 | Dados mantidos após recarregar |
| 4 | Erro no W3C: título `h4` do EcoBot pulando níveis | Título trocado por `h2` | 1 erro em 8 páginas | 0 erros nas 10 páginas |
| 5 | Papéis ARIA redundantes (`role="banner"`, `role="contentinfo"`) | Removidos; `<header>` e `<footer>` já têm esses papéis | Avisos no W3C | Sem avisos de ARIA redundante |
| 6 | Menu quebrava em telas pequenas | Menu hambúrguer abaixo de 768 px, com `aria-expanded` e fechamento por `Esc` | Links empilhados ocupando a tela | Menu recolhível e acessível |
| 7 | Sem modo de alto contraste | Botão no header, preferência salva em `localStorage` | Apenas tema padrão | Tema preto/amarelo persistente |
| 8 | Página ativa não identificada no menu | `aria-current="page"` + destaque amarelo | Usuário não sabia onde estava | Página atual anunciada e destacada |
| 9 | Dado incorreto: "Em 2023, o mundo gerou 62 Mt" | Corrigido para 2022, conforme o Global E-waste Monitor 2024 | Ano errado | Ano e fonte corretos |
| 10 | Galeria sem ampliação e sem fonte nas legendas | Lightbox acessível (foco, `Esc`) e fonte em cada `figcaption` | Imagens pequenas, sem fonte | Ampliação e crédito em todas as imagens |
| 11 | Iframe com Google Maps dependente de chave de API | Substituído por OpenStreetMap (sem chave) | Mapa com erro de chave | Mapa carregando sem expor credenciais |
| 12 | Tabelas sem `caption` e `scope` | Adicionados `<caption>` e `scope="col"` | Leitor de tela lia células soltas | Tabelas com título e cabeçalhos associados |
| 13 | Animações sem respeitar preferência do usuário | `@media (prefers-reduced-motion: reduce)` | Animações sempre ativas | Animações desligadas quando o sistema pede |
| 14 | Código só em `.zip`, sem histórico | Repositório no GitHub com branch `feature/site-ecoconecta` e pull request | Sem versionamento | Histórico de commits e PR revisável |
