# Evalia Theme CSS - Guia de Uso

## Como Aplicar o Theme

Substitua ou complemente o arquivo `styles.css` existente com o novo `theme.css`:

```html
<link rel="stylesheet" href="css/reset.css">
<link rel="stylesheet" href="css/theme.css">
```

## Classes Disponíveis

### Layout e Estrutura

**`.container`** - Container responsivo centralizado
```html
<div class="container">
  <!-- Conteúdo da página -->
</div>
```

**`.app-header`** - Cabeçalho da aplicação
```html
<header class="app-header">
  <h1>Evalia</h1>
</header>
```

### Componentes de Interface

**`.card`** - Superfície de conteúdo com sombra
```html
<div class="card">
  <h3>Título do Card</h3>
  <p>Conteúdo do card...</p>
</div>

<!-- Variação escura -->
<div class="card card--dark">
  <h3>Card com fundo escuro</h3>
</div>
```

**`.avatar`** - Imagem de perfil circular (56px)
```html
<img src="perfil.jpg" alt="Nome do usuário" class="avatar">
```

**`.btn-primary`** - Botão principal com cor de destaque
```html
<button class="btn-primary">Clique aqui</button>
<a href="#" class="btn-primary">Link como botão</a>
```

**`.menu-button`** - Botão de ícone/menu
```html
<button class="menu-button">
  <img src="menu-icon.svg" alt="Menu">
</button>
```

### Navegação e Links

**`.link`** - Links acessíveis com foco visível
```html
<a href="#" class="link">Link com estilo</a>
```

### Sistema de Avaliação

**`.rating`** - Exibe estrelas de avaliação
```html
<div class="rating rating--5" aria-label="5 estrelas de 5">
  <!-- Automaticamente exibe ★★★★★ -->
</div>

<div class="rating rating--3" aria-label="3 estrelas de 5">
  <!-- Automaticamente exibe ★★★☆☆ -->
</div>
```

Variações disponíveis: `.rating--1`, `.rating--2`, `.rating--3`, `.rating--4`, `.rating--5`

### Sistema de Chat

**`.chat-line`** - Container para mensagens
**`.chat-user`** - Mensagem do usuário (alinhada à direita)
**`.chat-agent`** - Mensagem do agente (alinhada à esquerda)

```html
<div class="chat-line chat-user">
  <p>Mensagem do usuário</p>
</div>

<div class="chat-line chat-agent">
  <p>Resposta do agente</p>
</div>
```

### Classes Utilitárias

```html
<!-- Layout flexbox -->
<div class="flex items-center justify-center gap">
  <span>Conteúdo centralizado</span>
</div>

<!-- Texto centralizado -->
<div class="text-center">
  <h2>Título centralizado</h2>
</div>

<!-- Conteúdo apenas para leitores de tela -->
<span class="sr-only">Texto para acessibilidade</span>
```

## Exemplo de Página Completa

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Evalia</title>
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/theme.css">
</head>
<body>
  <header class="app-header">
    <h1>Evalia</h1>
  </header>
  
  <div class="container">
    <div class="card">
      <div class="flex items-center gap">
        <img src="avatar.jpg" alt="Marina" class="avatar">
        <div>
          <h3>Marina</h3>
          <div class="rating rating--5" aria-label="5 estrelas"></div>
        </div>
      </div>
      <p>Atendente da padaria</p>
      <a href="#" class="btn-primary">Ver perfil</a>
    </div>
  </div>
</body>
</html>
```

## Variáveis CSS Disponíveis

Você pode personalizar o tema modificando as variáveis CSS no `:root`:

- `--color-accent`: Cor principal de destaque
- `--gap`: Espaçamento padrão
- `--radius`: Border radius padrão
- `--font-primary`: Fonte para títulos
- `--font-secondary`: Fonte para corpo de texto

## Responsividade

O tema é mobile-first e se adapta automaticamente:
- **≤420px**: Layout otimizado para mobile
- **≥768px**: Layout expandido para desktop

## Acessibilidade

- Contraste WCAG AA garantido
- Foco visível em todos os elementos interativos
- Suporte a `prefers-reduced-motion`
- Suporte a `prefers-contrast: high`
- Classes `.sr-only` para conteúdo de leitores de tela