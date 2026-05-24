# 🐙 Guia de Sobrevivência do GitHub para QA

Esqueça todos aqueles comandos difíceis! Você só vai precisar usar o processo completo de configuração (com `git init`, etc.) uma vez por projeto.

Para atualizar o seu projeto no dia a dia, use a regra do **A.C.P.**!

---

## 🍰 A Receita A.C.P. (Para atualizar o projeto)

Sempre que você criar um teste novo, modificar alguma coisa ou consertar um bug, você precisa enviar essas novidades para o GitHub. 

Abra o terminal (`Ctrl + '`) e rode um comando por vez, dando Enter:

### 1. A (Add / Adicionar)
*Esse comando pega todas as pastas e arquivos novos que você mexeu.*
```powershell
git add .
```
*(Não esqueça do espaço e do ponto final!)*

### 2. C (Commit / Comentar)
*Esse comando empacota os arquivos e coloca uma etiqueta dizendo o que você fez.*
```powershell
git commit -m "Escreva aqui um resumo do que você fez"
```
*(Exemplos: "Criado teste de login", "Traduzido o README", "Adicionado BDD")*

### 3. P (Push / Empurrar)
*Esse comando joga o seu pacote lá pro site do GitHub.*
```powershell
git push
```

---

## 🚨 Resolvendo Problemas Comuns

### "Fiz o push e não apareceu no site!"
Rode o comando `git status`. Ele vai te dizer se esqueceu de dar o `git add` ou o `git commit`. Se disser "nothing to commit, working tree clean", significa que já está tudo no site! Atualize a página com F5.

### "Deu erro de login"
Se aparecer uma janela pedindo para autenticar (Git Credential Manager), apenas clique em "Sign in with your browser" e confirme o acesso no site.
