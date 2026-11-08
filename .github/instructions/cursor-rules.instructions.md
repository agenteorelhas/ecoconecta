---
description: Como escrever e organizar as regras do Cursor e o espelho do VS Code
applyTo: "**"
---
# Como escrever regras

## Objetivo
Padronizar a criação de regras para que fiquem curtas, com um único assunto e iguais no Cursor e no VS Code.

## Contexto
Regras do Cursor ficam em `.cursor/rules/*.mdc`. O espelho do VS Code (GitHub Copilot) fica em `.github/instructions/*.instructions.md`, com o mesmo texto.

## Regras
- Pasta: `.cursor/rules/`; extensão `.mdc`; nome em kebab-case.
- Frontmatter: `description`, `globs` e `alwaysApply`. No espelho do VS Code use `applyTo` com o mesmo glob.
- `alwaysApply: true` só em `projeto-ecoconecta`, `cursor-rules` e `self-improvement`. Regras de linguagem usam glob.
- Uma preocupação por arquivo, menos de 80 linhas.
- Corpo com seis seções, nesta ordem:
  1. Objetivo
  2. Contexto
  3. Regras em tópicos
  4. Exemplo concreto (copiado de arquivo real deste repositório)
  5. Erros a evitar
  6. Quando perguntar
- Ao editar uma regra, atualize o espelho com o mesmo texto no mesmo commit.

## Exemplo
Frontmatter real de `.cursor/rules/html5.mdc`:
```yaml
---
description: Padrões de HTML5 semântico para as páginas do EcoConecta
globs: "**/*.html"
alwaysApply: false
---
```

## Erros a evitar
- Regra em `docs/`, na raiz ou com extensão `.md`.
- Dois assuntos no mesmo arquivo; regra longa com `alwaysApply: true`.
- Texto diferente entre a regra do Cursor e a do VS Code.

## Quando perguntar
Se não estiver claro se a regra deve valer sempre, só para alguns arquivos ou só quando citada.
