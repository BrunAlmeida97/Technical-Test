# 💾 Rodando e Testando o Backend
## 1. Acessar a pasta
cd backend-api

## 2. Restaurar dependências
dotnet restore
## 3. Configurar PostgreSQL
Editar appsettings.json:

      "ConnectionStrings": {
        "DefaultConnection": "Host=localhost;Port=5432;Database=taskdb;Username=SEU_USUARIO;Password=SUA_SENHA"
      }

## 4. Aplicar migrations
dotnet ef database update
## 5. Iniciar API
dotnet run
# 🌐 Swagger
Após executar, acessar:
http://localhost:5092/swagger
# 🌐 Endpoints
1 – Listar Tasks
GET /api/Tasks
2 – Buscar por ID
GET /api/Tasks/{id}
3 – Criar Task
POST /api/Tasks
4 – Atualizar Task
PUT /api/Tasks/{id}
5 – Deletar Task
