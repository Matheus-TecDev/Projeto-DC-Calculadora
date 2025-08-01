**Tipo: `Estudo`**

**Status:**  💤 Standby (com **pretensão** de continuar)

**Responsável:** Matheus.tecnodev@gmail.com

**Início:** 📅 `27/07/2025` 

**Término:** 📅 `27/07/2025`

### 🎯 Objetivo

> Projeto realizado com intenção de relembrar como funciona o JavaScript puro, depois de tanto tempo usando apenas componentes da biblioteca React.JS
> 

### 🛠️ Tecnologias e Ferramentas

| Área | Tecnologias/Ferramentas Utilizadas |
| --- | --- |
| **Frontend** | HTML5, CSS3 (custom properties), JavaScript (puro) |
| **Design/UI** | Layout customizado com CSS Grid e variáveis CSS |
| **Interatividade** | Manipulação de DOM com JavaScript puro |
| **Ambiente** | VS Code, Live Server |
| **Controle de versão** | GitHub |

### 📦 Estrutura de Pastas

```bash
📁 calculator/
├── 📁 script/
│   └── script.js               # Lógica principal da calculadora
├── 📁 styles/
│   └── styles.css              # Estilização com variáveis e responsividade
├── .gitignore                  # Arquivos a serem ignorados no Git
├── index.html                  # Estrutura principal do app
└── README.md                   # Documentação do projeto
```

### 📌 Funcionalidades e Escopo

A calculadora atualmente tem as seguintes funcionalidades implementadas:

- [x]  Exibição de valor digitado no visor (input dinâmico)
- [x]  Operações básicas: adição (+), subtração (−), multiplicação (×) e divisão (÷)
- [x]  Botão "AC" para limpar o visor
- [x]  Botão "DEL" para apagar último caractere digitado
- [x]  Botão "+/-" para inverter o sinal do número
- [x]  Validação para impedir múltiplos símbolos seguidos
- [x]  Interface responsiva com CSS Grid
- [x]  Feedback visual nos botões ao passar o mouse (hover)

### 🧪 Testes

Durante o desenvolvimento, utilizei principalmente **testes manuais** com o navegador e `console.log()` para:

- Verificar se os valores estavam sendo capturados corretamente ao clicar nos botões;
- Entender o comportamento das funções e eventos (`addEventListener`);
- Identificar erros de lógica ou digitação;
- Analisar o retorno da função `eval()` e evitar resultados incorretos;
- Validar se símbolos estavam sendo adicionados corretamente no input;
- Garantir que o botão de deletar e inverter sinal estavam funcionando.

### 🚧 Problemas Encontrados e Soluções

Durante o projeto enfrentei alguns erros comuns, como:

- Digitação incorreta de propriedades CSS e funções JS;
- Sintaxe mal fechada;
- Problemas ao rodar o projeto no WSL2 via `Run Debugging`.

Resolvi tudo usando **o chat do Copilot no VS Code** e **pesquisas no Google**.
