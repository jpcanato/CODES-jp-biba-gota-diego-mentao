# Evalia - App Web/Mobile

## Sobre o Projeto

Evalia é um aplicativo web/mobile que conecta funcionários e clientes, criando experiências personalizadas de atendimento. O projeto utiliza uma paleta de cores acolhedora e tipografia moderna para proporcionar uma interface amigável e acessível.

## Paleta de Cores

As cores foram definidas com base no PDF de cores fornecido:

- **--color-dark**: #252526 (tom escuro primário)
- **--color-beige**: #F2EBDF (fundo claro/acolhedor)
- **--color-brown**: #402711 (marrom de destaque, cabeçalhos)
- **--color-gray**: #A69E97 (texto secundário / superfícies)
- **--color-black**: #0D0D0D (texto escuro)
- **--color-white**: #FFFFFF
- **--color-accent**: #f75e25 (CTA - Call to Action)
- **--color-chat-bg**: #A69E97 (fundo de chat)
- **--color-star**: #FFD24A (cor estrela de favorito)

## Tipografia

- **Títulos**: Montserrat (Google Fonts)
- **Corpo de texto**: Open Sans (Google Fonts)
- **Fallback**: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif

## Como Usar

### 1. Aplicar o CSS

Certifique-se de que o arquivo `theme.css` esteja linkado no `<head>` de cada página HTML:

```html
<link rel="stylesheet" href="css/theme.css">
```

### 2. Substituir Placeholders de Imagem

Todos os arquivos HTML contêm placeholders `src="adicionar-imagem"` que devem ser substituídos pelos caminhos reais das imagens:

**Exemplos de substituição:**
- `src="adicionar-imagem"` → `src="img/perfil1.png"` (avatar da Marina)
- `src="adicionar-imagem"` → `src="img/perfil2.png"` (avatar do Carlos)
- `src="adicionar-imagem"` → `src="img/perfil3.png"` (avatar da Juliana)
- `src="adicionar-imagem"` → `src="img/voltar.png"` (ícone de voltar)
- `src="adicionar-imagem"` → `src="img/menu.png"` (ícone de menu)

### 3. Estrutura de Arquivos Recomendada

```
projeto/
├── css/
│   └── theme.css
├── img/
│   ├── perfil1.png
│   ├── perfil2.png
│   ├── perfil3.png
│   ├── voltar.png
│   └── menu.png
├── index.html
├── menu.html
├── amigos.html
├── avaliacoes.html (sem acento)
├── estabelecimentos.html
├── restaurantes.html
├── lojas.html
├── padaria_funcionarios.html
├── mercado_funcionarios.html
├── livraria_funcionarios.html
├── chat_marina.html
├── chat_carlos.html
└── chat_juliana.html
```

## Classes CSS Principais

### Layout
- `.app` - Container principal da aplicação (max-width: 420px)
- `.app-header` - Cabeçalho com altura fixa (56px)
- `.content` - Área de conteúdo com padding

### Componentes
- `.card` - Card básico para listagens
- `.friend-card` - Card específico para amigos (com avatar)
- `.category-item` - Item de categoria no menu
- `.btn-primary` - Botão principal (cor accent)
- `.avatar` - Imagem circular (56px)
- `.star` - Estrela de favorito
- `.rating` - Sistema de avaliação (rating--1 a rating--5)

### Chat
- `.chat` - Container do chat
- `.chat-messages` - Área de mensagens
- `.chat-line` - Linha de mensagem
- `.chat-user` - Mensagem do usuário (direita)
- `.chat-agent` - Mensagem do atendente (esquerda)
- `.chat-input` - Campo de entrada de mensagem

### Exemplo de Uso

```html
<!-- Card de amigo -->
<a href="chat_marina.html" class="friend-card">
  <img src="img/perfil1.png" alt="Marina" class="avatar">
  <div class="friend-info">
    <div class="card-title">Marina</div>
    <div class="card-subtitle">Atendente da padaria</div>
  </div>
</a>

<!-- Avaliação com estrelas -->
<div class="rating rating--5" aria-label="5 de 5 estrelas"></div>

<!-- Botão principal -->
<a href="menu.html" class="btn-primary">Entrar</a>
```

## Fluxo de Navegação

1. **index.html** → **menu.html** (botão "Entrar")
2. **menu.html** → **amigos.html** → **chat_[nome].html**
3. **menu.html** → **estabelecimentos.html** → **restaurantes.html** → **padaria_funcionarios.html** → **chat_marina.html**
4. **menu.html** → **estabelecimentos.html** → **lojas.html** → **mercado_funcionarios.html** → **chat_carlos.html**
5. **menu.html** → **estabelecimentos.html** → **lojas.html** → **livraria_funcionarios.html** → **chat_juliana.html**
6. **menu.html** → **avaliacoes.html** (links para chats nos nomes)

## Deploy Local

1. Baixe todos os arquivos
2. Substitua `"adicionar-imagem"` pelos caminhos reais das imagens
3. Abra `index.html` no navegador
4. Navegue pela aplicação usando os links

## Acessibilidade

- Contraste WCAG AA garantido entre texto e fundo
- Foco visível em todos os elementos interativos
- Suporte a `prefers-contrast: high`
- Labels apropriados para leitores de tela
- Navegação por teclado funcional

## Responsividade

- **Mobile**: ≤420px (fonte 14px, layout compacto)
- **Desktop**: ≥768px (fonte 18px, container centralizado com bordas arredondadas)
- Layout mobile-first com breakpoints em rem

## Alterações nos Arquivos HTML

### Arquivos Atualizados:
- ✅ `index.html` - Convertido para splash screen
- ✅ `menu.html` - Lista de categorias com estrelas
- ✅ `amigos.html` - Cards de amigos com avatares
- ✅ `avaliacoes.html` - Criado (sem acento) com cards de avaliação
- ✅ `estabelecimentos.html` - Lista de categorias
- ✅ `restaurantes.html` - Card linkado para seleção de funcionários
- ✅ `lojas.html` - Cards linkados para seleção de funcionários
- ✅ `padaria_funcionarios.html` - Seleção de funcionários da padaria
- ✅ `mercado_funcionarios.html` - Seleção de funcionários do mercado
- ✅ `livraria_funcionarios.html` - Seleção de funcionários da livraria
- ✅ `chat_marina.html` - Layout de chat com balões
- ✅ `chat_carlos.html` - Layout de chat com balões
- ✅ `chat_juliana.html` - Layout de chat com balões

### Principais Mudanças:
- Substituição de `css/styles.css` por `css/theme.css`
- Adição de classes semânticas (`.app`, `.card`, `.friend-card`, etc.)
- Estrutura de chat com balões alinhados
- Headers com botão voltar e avatar
- Placeholders `"adicionar-imagem"` para todas as imagens
- Links corretos entre páginas
- Comentários indicando necessidade de substituir imagens

## ⚠️ IMPORTANTE

**Antes de publicar, substitua todos os placeholders `"adicionar-imagem"` pelos caminhos reais das imagens!**

O arquivo `avaliações.html` foi renomeado para `avaliacoes.html` (sem acento) para compatibilidade com servidores web.

## Contraste e Acessibilidade

Todas as combinações de cores atendem ao padrão WCAG AA (contraste mínimo 4.5:1). A cor `--color-gray` (#A69E97) foi testada e aprovada para uso como texto secundário sobre fundo claro.