# 🐳 Toshiro Shibakita - Microsserviços com Node.js, Docker & Nginx

Este projeto é uma demonstração prática de uma arquitetura de microsserviços modernos. Ele nasceu de uma migração de um sistema originalmente escrito em PHP para **Node.js**, focando em demonstrar como orquestrar diferentes serviços (Aplicação, Banco de Dados e Servidor Web) usando **Docker**.

---

## 🚀 O que este projeto faz?

Quando você acessa a aplicação, o sistema:
1.  **Gera dados aleatórios**: Cria um nome, endereço e ID fictícios automaticamente.
2.  **Identifica o Host**: Registra qual container do Docker está processando a requisição (útil para entender balanceamento de carga).
3.  **Salva no Banco**: Armazena essas informações em um banco de dados MySQL.
4.  **Exibe o Resultado**: Mostra uma confirmação na tela junto com a versão do Node.js utilizada.

---

## 🛠️ Tecnologias e Ferramentas

-   **Node.js (v18)**: O motor da nossa aplicação (Backend).
-   **Express**: Framework para gerenciar as rotas da web.
-   **MySQL (v5.7)**: Onde todos os dados são salvos de forma persistente.
-   **Nginx**: Atua como um **Proxy Reverso**, sendo a porta de entrada única para o sistema.
-   **Docker & Docker Compose**: A "mágica" que empacota tudo isso e garante que funcione em qualquer computador.

---

## 📂 Estrutura do Projeto

Para novos usuários, aqui está o que cada pasta faz:

```bash
toshiro-shibakita/
├── App/                # 💻 Onde mora o código Node.js
│   ├── index.js        # Lógica principal (Conexão MySQL + Rotas)
│   ├── dockerfile      # "Receita" para criar o container Node
│   └── package.json    # Lista de bibliotecas necessárias
├── DataBase/           # 🗄️ Configurações do Banco de Dados
│   └── banco.sql       # Script que cria a tabela automaticamente
├── Nginx/              # 🌐 Configurações do Servidor Web
│   ├── nginx.conf      # Regras de como o Nginx deve redirecionar o tráfego
│   └── dockerfile      # Configuração do container Nginx
└── docker-compose.yml  # 🏗️ O Maestro: define como os 3 containers conversam
```

---

## �️ Como Executar (Passo a Passo)

### 1. Pré-requisitos
Você precisa ter o **Docker** e o **Docker Compose** instalados na sua máquina.

### 2. Subir o ambiente
Abra o terminal na pasta raiz do projeto e execute:

```bash
docker-compose up -d --build
```

### 3. Acessar a aplicação
Abra seu navegador e vá para:
👉 [http://localhost](http://localhost)

---

## 🔍 Funcionalidades Detalhadas

-   **Inserção Automática**: Cada atualização de página gera um novo registro no banco.
-   **Proxy Reverso**: Você não acessa o Node.js diretamente; o Nginx gerencia essa comunicação para maior segurança e performance.
-   **Banco de Dados Pronto**: O MySQL já sobe com a tabela criada e pronta para uso.
-   **Isolamento**: Cada parte do sistema (APP, DB, NGINX) roda em seu próprio "mundo" isolado, facilitando a manutenção.

---

## 📚 Aprendizados Importantes

Este projeto é excelente para entender:
-   **Comunicação entre containers**: Como o Node.js "descobre" onde o MySQL está pelo nome do serviço (`DB_HOST=database`).
-   **Variáveis de Ambiente**: O uso de dados sensíveis (senhas, nomes de bancos) sem deixá-los fixos no código.
-   **Orquestração**: Como o Docker Compose gerencia a ordem de subida (o App espera o Banco de Dados).

---

## 🧱 Projeto Base
Inspirado no projeto original de [Denilson Bonatti (DIO)](https://github.com/denilsonbonatti/toshiro-shibakita).

---
*Este README foi desenhado para ser amigável e explicativo para desenvolvedores de todos os níveis.*