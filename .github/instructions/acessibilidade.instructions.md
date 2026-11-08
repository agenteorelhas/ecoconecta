---
description: Requisitos de acessibilidade WCAG 2.1 AA para a interface
applyTo: "**/*.html"
---
# Acessibilidade

## Objetivo
Garantir que pessoas com deficiência usem todo o site (WCAG 2.1 AA).

## Contexto
PCD é público prioritário. O site tem alto contraste, skip link e EcoBot acessível.

## Regras
- `alt` descritivo em imagens informativas; ícones decorativos com `aria-hidden="true"`.
- Todo campo com `<label for>` e erro ligado por `aria-describedby`.
- Tudo operável por teclado: Tab, Enter, Espaço e Esc (menu e lightbox).
- Skip link "Pular para o conteúdo principal" como primeiro elemento do `body`.
- Mensagens dinâmicas em região `aria-live`.
- Vídeo e áudio com descrição ou transcrição.

## Exemplo
Trecho real de `contato.html`:
```html
<label for="email">E-mail <span class="obrigatorio" aria-hidden="true">*</span></label>
<input id="email" name="email" type="email" required autocomplete="email" aria-describedby="erro-email">
<span id="erro-email" class="msg-erro" aria-live="polite"></span>
```

## Erros a evitar
- Informação transmitida só por cor.
- Abrir sobreposição sem mover e devolver o foco.
- `alt` genérico como "imagem" ou "foto".

## Quando perguntar
Se um componente novo não puder ser operado por teclado ou leitor de tela.
