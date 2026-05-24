# Action Plan: Seu Guia Completo de Testes com Playwright 🚀

Este é o seu guia pessoal! Consulte-o sempre que quiser praticar para as suas vagas de QA. Lembre-se: não é para decorar, é para consultar!

---

## Passo 1: A Importação Inicial
Todo teste começa chamando a ferramenta que vai trabalhar para nós (o Playwright).

**O que fazer:** Digite a linha abaixo na primeira linha do seu arquivo `nome-do-teste.spec.js`:
```javascript
const { test, expect } = require('@playwright/test');
```
> [!NOTE]
> No dia a dia, a gente apenas copia e cola essa linha ou a própria ferramenta cria para nós. A palavra `test` serve para criar o teste, e a palavra `expect` serve para fazer as validações.

---

## Passo 2: O Esqueleto do Teste
Você pode ter **vários testes** dentro de um único arquivo! Cada "caixinha" de teste é independente.

```javascript
test('Nome do primeiro teste', async ({ page }) => {
  // Comandos do robô aqui!
});

test('Nome do segundo teste', async ({ page }) => {
  // Outros comandos do robô aqui!
});
```

---

## Passo 3: Os 5 "Poderes" Principais do QA
Cerca de 95% de todo o seu trabalho como QA será apenas combinar esses cinco comandos básicos:

1. **Abrir o site (`goto`)**:
```javascript
await page.goto('https://www.saucedemo.com/');
```

2. **Achar um elemento na tela (`locator`)**:
*(Usamos o símbolo `#` quando vamos buscar pelo "ID" de um campo, e `.` quando vamos buscar por uma "Class" visual)*.
```javascript
// Apenas acha, sem fazer nada
await page.locator('#nome-do-id-aqui'); 
```

3. **Digitar em um campo (`fill`)**:
```javascript
await page.locator('#user-name').fill('standard_user');
```

4. **Clicar em um botão (`click`)**:
```javascript
await page.locator('#login-button').click();
```

5. **Validar o resultado (`expect`)**:
Isso é o que difere um simples robô de um robô de testes! Ele garante que algo apareceu na tela.
```javascript
await expect(page.locator('.title')).toHaveText('Products');
```

---

## Passo 4: Como rodar o robô (Comandos Mágicos)

Tudo acontece no Terminal do VS Code. Aqui estão os principais comandos:

* **Para rodar normal (O mais rápido, usado nas empresas e servidores):**
  `npx playwright test` (Tudo invisível e rápido)

* **Para rodar vendo a tela (Ideal para quem está aprendendo):**
  `npx playwright test --headed` (Abre o navegador, mas é super rápido)

* **Para abrir o "Laboratório" do QA (Modo UI):**
  `npx playwright test --ui` 
  > [!TIP]
  > Esse é o seu maior aliado! Ele abre uma janela especial onde você pode dar Play no teste, ver passo a passo em câmera lenta, voltar no tempo e investigar exatamente o que deu errado.

---

## Passo 5: O Arquivo de Configuração e a Extensão do VS Code

Para que a aba "Testing" (o ícone de Frasco de Química na barra lateral do VS Code) consiga encontrar seus testes e colocar aqueles botões de **Play (▶️)** verdes direto no seu código, o Playwright precisa de um mapa.

Esse "mapa" é o arquivo `playwright.config.js`. Ele deve ficar na raiz do projeto (fora da pasta `tests`). Se ele não existir, a extensão fica perdida e mostra *"No tests found"*.

Aqui está a configuração básica que criamos para ativar os botões:

```javascript
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  // Diz para o Playwright onde os arquivos de teste estão guardados
  testDir: './tests',
  
  // Configurações padrão
  use: {
    // headless: false significa que o navegador sempre vai abrir visível (como se fosse o --headed)
    headless: false,
  },
});
```

> [!TIP]
> Com esse arquivo salvo e a extensão do Playwright instalada, você nunca mais precisa rodar o comando no terminal. Basta ir na aba do Frasco de Química e clicar nos botões de Play direto pelo código!

---

## Dicas Extras e Atalhos para a Vida Real

> [!TIP]
> **Limpando a sujeira do Terminal:**
> Se o terminal ficar confuso e cheio de letrinhas antigas, clique nele e aperte o atalho **`Ctrl + L`** no teclado. Ou digite o comando **`clear`** e dê Enter. Ele limpa tudo instantaneamente!

> [!IMPORTANT]
> **A regra do Ctrl + S:**
> Nunca, em hipótese alguma, esqueça de salvar o seu arquivo (`Ctrl + S`) antes de rodar o comando no terminal. Se esquecer de salvar, o robô vai rodar a versão velha do código e você vai ficar achando que fez algo errado.

---

## Passo 6: Como Debugar Erros 🐛

**Debugar** = encontrar e corrigir um erro no código.
> "Bug" = erro/problema | "Debug" = caçar e matar o bug!

Quando um teste falha, você tem 4 formas de investigar:

### 1️⃣ Ler o erro no Terminal (mais simples)
O terminal já te diz o que aconteceu de errado:
```
✘ Test failed
Expected: "Products"
Received: "Login"
```
Isso mostra o que o teste **esperava** vs o que o sistema **retornou de verdade**.

---

### 2️⃣ Rodar com `--headed` (ver o navegador)
```powershell
npx playwright test --headed
```
Abre o navegador para você **ver o robô agindo** em tempo real.

---

### 3️⃣ Rodar com `--ui` (modo laboratório ⭐ favorito!)
```powershell
npx playwright test --ui
```
Abre uma interface visual onde você pode:
- ▶️ Rodar passo a passo
- ⏪ Voltar no tempo e ver cada ação
- 🔍 Ver um print de cada momento do teste

> [!TIP]
> Esse é o modo mais poderoso para entender o que deu errado. Use sempre que um teste falhar e você não souber o motivo!

---

### 4️⃣ Rodar com `--debug` (modo inspetor)
```powershell
npx playwright test --debug
```
**Pausa** o teste e abre o Playwright Inspector — você consegue avançar linha por linha e ver exatamente onde o erro acontece.

---

### 📊 Resumo rápido:

| Comando | Quando usar |
|---|---|
| *(só rodar)* | Ver o erro no terminal |
| `--headed` | Ver o navegador rodando |
| `--ui` | Investigar passo a passo (recomendado!) |
| `--debug` | Pausar e inspecionar linha por linha |