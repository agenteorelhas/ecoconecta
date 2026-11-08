---
description: Melhoria contínua das regras a partir de padrões e erros recorrentes
applyTo: "**"
---
# Melhoria contínua das regras

## Objetivo
Manter as regras atualizadas com os padrões reais do código, sem crescer à toa.

## Contexto
As regras nasceram junto com o site. Conforme o código evolui, padrões novos aparecem e erros se repetem.

## Regras
- Propor atualização de regra quando o mesmo padrão aparecer em 3 ou mais arquivos.
- Propor atualização quando o mesmo erro voltar (ex.: W3C acusar o mesmo problema duas vezes).
- Mostrar o diff da regra proposta e esperar confirmação antes de gravar.
- Remover da regra o que deixou de existir no código.
- Registrar a mudança no `docs/diario-de-bordo.md`.

## Exemplo
O erro "heading h4 follows h2" voltou em 8 páginas (título do CicloBot). Proposta aceita em `html5.mdc`:
```diff
+ - Não pular nível de título; o título do CicloBot é `h2`.
```

## Erros a evitar
- Gravar regra nova sem mostrar o diff.
- Criar regra para um caso isolado.
- Deixar a regra do Cursor diferente do espelho do VS Code.

## Quando perguntar
Sempre antes de gravar, e quando a mudança afetar mais de uma regra.
