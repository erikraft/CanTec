# CanTec

## 📱 Sobre o Projeto

**CanTec** é uma plataforma web para gerenciamento de pedidos em cantinas escolares. A aplicação permite que responsáveis criem contas, façam login e gerenciem informações de pedidos para seus filhos de forma simples e eficiente.

### Recursos Principais:

   - ✨ **Interface Vibrante** - Design colorido e moderno com animações de lanches flutuantes
   - 🔐 **Autenticação** - Sistema de registro e login
   - 👨‍👩‍👧 **Gestão de Contatos** - Cadastro de informações do responsável e filho
   - 📋 **Gerenciador de Pedidos** - Registro de produtos e preços
   - 💾 **Armazenamento Local** - Todos os dados salvos no navegador (localStorage)
   - 📱 **Responsivo** - Funciona em diferentes tamanhos de tela

## 📂 Estrutura do Projeto

```
CanTec/
|-- README.md                 # Este arquivo
`-- website/
    |-- index.html            # Pagina inicial com apresentacao da cantina
    |-- account.html          # Pagina de registro e login
    |-- dashboard.html        # Painel de gerenciamento de pedidos
    |-- css/
    |   `-- style.css         # Estilos da aplicacao
    `-- img/
        `-- logo.png          # Logo da CanTec
```

## 🚀 Como Usar

### 1. **Página Inicial (index.html)**
   - Apresentação da CanTec
   - Descrição dos benefícios
   - Botão para criar conta ou fazer login

### 2. **Registro/Login (account.html)**
   - **Criar Conta**: Preencha nome, email e senha
   - **Fazer Login**: Use email e senha já cadastrados
   - Ambos os formulários redirecionam para o Dashboard

### 3. **Dashboard (dashboard.html)**
   - **Informações do Filho**:
     - Nome do Filho
     - Email do Filho
     - Telefone do Filho
     - WhatsApp do Filho
   
   - **Informações do Responsável**:
     - Nome do Responsável
     - Email do Responsável
     - Telefone do Responsável
     - WhatsApp do Responsável
   
   - **Informações do Pedido**:
     - Produto Escolhido
     - Preço (R$)
   
   - **Opções**:
     - Salvar Dados (armazena no navegador)
     - Limpar Formulário
     - Sair (logout)

## 💾 Armazenamento de Dados

Todos os dados são salvos automaticamente no **localStorage** do navegador:

- **cantinaPedido**: Armazena informações de pedidos e contatos
- **userSession**: Controla se o usuário está logado
- **userAccount**: Armazena dados da conta do usuário
- **loginEmail**: Email do último login

### ⚠️ Nota Importante
Os dados são armazenados localmente no navegador. Para compartilhar entre dispositivos, seria necessário uma base de dados backend.

## 🎨 Paleta de Cores

- **Vermelho**: `#d32f2f` - Cor principal e de destaque
- **Laranja**: `#ff5722` - Hover e efeitos secundários
- **Amarelo**: `#ffc107` - Acentos
- **Branco**: `rgba(255, 255, 255, 0.98)` - Cards e containers

## 🔤 Tipografia

Utiliza a fonte **Unbounded** do Google Fonts com pesos 400, 700 e 900 para um visual moderno e tech.

## 🌟 Características Especiais

- **Animações Flutuantes**: Lanches (hambúrguer, pizza, batata frita, cachorro quente) fluem da tela
- **Gradiente Animado**: Fundo com transição de cores
- **Design Responsivo**: Funciona em mobile, tablet e desktop
- **Validação de Formulários**: Campos obrigatórios marcados como required
- **UX Intuitiva**: Transição suave entre páginas

## 🔧 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização e animações
- **JavaScript** - Interatividade e armazenamento local
- **LocalStorage API** - Persistência de dados

## 📋 Pré-requisitos

Nenhum! A aplicação funciona 100% no navegador sem necessidade de servidor ou instalação.

## 🚀 Como Executar

1. Abra o arquivo `html/index.html` no seu navegador
2. Clique em "Entrar ou Criar Conta"
3. Crie uma conta ou faça login
4. Preencha as informações de pedido
5. Clique em "Salvar Dados"

## 📝 Notas de Desenvolvimento

- Todos os estilos CSS personalizados estão em `css/cadastro.css`
- JavaScript é inline nos arquivos HTML para facilidade de deploy
- Use a logo `img/logo.png` em todas as páginas
- Os formulários têm validação HTML5 nativa

## 🎯 Versão

**1.0.0** - Versão Inicial (Abril de 2026)

## 👨‍💻 Autor

Desenvolvido para a CanTec - Consumo consciente, gestão eficiente!

---

**Aproveite a plataforma! 🍕🍔🍟**
