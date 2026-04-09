# 🚀 Projeto Consulta de CEP e Corretoras

Este projeto é uma aplicação construída com **Node-RED**, integrando:

✔ Consulta de **CEP** via API da BrasilAPI  
✔ Consulta de **Corretoras**  
✔ Gravação de resultados no **MongoDB**  

O objetivo é uma aplicação simples, funcional e expansível utilizando Node-RED.

---

## 📂 Estrutura do Projeto

Os arquivos principais são:

| Arquivo | Função |
|--------|--------|
| `fluxos.json` | Fluxo principal do Node-RED |
| `configurações.js` | Configurações do servidor Node-RED |
| `.config.*` | Arquivos internos gerados pelo Node-RED |
| `pacote.json` | Dependências utilizadas |
| `pacote-lock.json` | Versões travadas das dependências |
| `README.md` | Documentação do projeto |

---

## 🛠️ Pré-Requisitos

- **Node.js** 18+  
- **NPM** (instalado junto com o Node)
- **MongoDB** instalado localmente  
- **Node-RED**
  ```bash
  npm install -g node-red


---

# 📙 Guia Completo – Rodando e Testando o Projeto Node-RED + MongoDB
## Link Download Mongo: https://www.mongodb.com/try/download/community
## 1. Clonar o projeto

### Terminal:
```bash
git clone https://github.com/BrunAlmeida97/teste-node-red.git
```
## 2. Acessar a pasta
```bash
cd teste-node-red
```
## 3. Instalar dependências
```bash
npm install
```
## 4. Iniciar o MongoDB
MacOs:
```bash
brew services start mongodb-community
```
Windows(Utilizando PowerShell como administrador):
```bash
net start MongoDB
```
## 5. Iniciar o Node-RED
Dentro da pasta do projeto:
```bash
node-red
```
## 6. Atualizar dependências Mongo
Dentro da pasta do projeto:
```bash
npm install node-red-node-mongodb
```
# 🌐 Rotas
## 1 –Broker Catalog:
```bash
http://localhost:1880/corretoras
```
## 2 – Zip Code Searcher:
Option 1: The zip code must be inserted as a route parameter.
```bash
http://localhost:1880/cep
```
Option 2: The zip code must be inserted in a input field.
```bash
http://localhost:1880/cep-search?zipcode={cep}
```


# 🗂️ Consulta MongoDB
## 1 - Listar Bancos disponíveis
```bash
show dbs
```
## 2 - Acessar o Banco do projeto
```bash
use cepdb
```
## 3 - Listar as coleções do projeto
```bash
show collections
```
## 4 - Listar todos os registros salvos
```bash
db.pesquisas.find()
```
## 5 - Listar todos os registros de forma organizada
```bash
db.pesquisas.find().pretty()
```

## 6 - Listar por CEP(Exemplo)
```bash
db.pesquisas.find({cep: "30140010"})
```


