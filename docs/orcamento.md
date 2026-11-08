# Orçamento de Hospedagem e Domínio — Recircuito

Versão em Markdown da página [`orcamento_hospedagem.html`](../orcamento_hospedagem.html).

## Introdução

O Recircuito é um site estático (HTML, CSS e JavaScript, sem banco de dados). Precisamos de hospedagem com **HTTPS**, publicação simples a partir do **GitHub**, baixo custo e, se possível, compromisso ambiental.

> Preços consultados em novembro de 2026 nos sites oficiais; valores em dólar convertidos a aproximadamente R$ 5,50. Podem variar.

## Comparativo de hospedagens

| Serviço | Plano | Preço/mês | HTTPS | Domínio próprio | Limite de banda | Suporte |
|---|---|---|---|---|---|---|
| GitHub Pages | Gratuito | R$ 0,00 | Sim, automático | Sim | 100 GB/mês (limite flexível) | Comunidade e documentação |
| Netlify | Free / Pro | R$ 0,00 / ≈ R$ 105 (US$ 19 por membro) | Sim, automático | Sim | 100 GB (Free) / 1 TB (Pro) | Fórum (Free) / e-mail (Pro) |
| Vercel | Hobby / Pro | R$ 0,00 / ≈ R$ 110 (US$ 20 por membro) | Sim, automático | Sim | 100 GB (Hobby) / 1 TB (Pro) | Comunidade (Hobby) / e-mail (Pro) |

## Comparativo de domínios

| Domínio | Registrador | Preço/ano | DNS | Inclui privacidade |
|---|---|---|---|---|
| recircuito.com.br | Registro.br | R$ 40,00 | Gratuito (Registro.br) | Parcial (dados de CPF/CNPJ não expostos publicamente) |
| recircuito.eco.br | Registro.br | R$ 40,00 | Gratuito (Registro.br) | Parcial (mesma política do .br) |
| recircuito.org | Cloudflare Registrar | ≈ R$ 60,00 (US$ 10,9) | Gratuito (Cloudflare) | Sim (WHOIS privado incluso) |

## Justificativa da escolha: GitHub Pages + recircuito.eco.br

- **Gratuito:** custo zero de hospedagem, ideal para uma ONG estudantil.
- **HTTPS automático:** certificado gerado e renovado sem configuração manual.
- **Integração com o repositório:** cada merge na branch `main` publica a nova versão, mantendo o histórico de commits.
- **Suficiente para o projeto:** site estático leve, muito abaixo do limite de banda.
- **Domínio .eco.br:** categoria do Registro.br voltada a iniciativas ambientais, reforçando a identidade do projeto.

**Custo total estimado no 1.º ano:** R$ 40,00 (apenas o domínio). Sem domínio próprio, o site funciona gratuitamente em `https://agenteorelhas.github.io/recircuito/`.

### Como publicar no GitHub Pages

1. No repositório, abra **Settings → Pages**.
2. Em **Source**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`.
3. Salve e aguarde 1 a 2 minutos; a URL aparece no topo da página de configurações.
4. Marque **Enforce HTTPS**.

## Sustentabilidade da hospedagem

- **Green hosting:** preferimos provedores com metas públicas de energia renovável. A Microsoft (dona do GitHub) tem compromisso de ser carbono negativo até 2030.
- **Site estático e leve:** sem frameworks nem bibliotecas externas, menos dados transferidos.
- **Imagens otimizadas** e carregamento sob demanda (`loading="lazy"`).
- **Compensação de carbono:** medir a pegada no Website Carbon Calculator e compensar com plantio de árvores em parceria com ONGs locais.
