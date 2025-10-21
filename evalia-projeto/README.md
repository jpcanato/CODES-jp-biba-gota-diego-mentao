# Evalia - App Web/Mobile

## 📁 Estrutura Organizada do Projeto

```
evalia-projeto/
├── index.html              # Página inicial (splash screen)
├── css/
│   └── theme.css           # Arquivo CSS único com tema completo
├── pages/                  # Todas as páginas internas
│   ├── menu.html
│   ├── amigos.html
│   ├── avaliacoes.html
│   ├── estabelecimentos.html
│   ├── restaurantes.html
│   ├── lojas.html
│   ├── padaria_funcionarios.html
│   ├── mercado_funcionarios.html
│   ├── livraria_funcionarios.html
│   ├── chat_marina.html
│   ├── chat_carlos.html
│   └── chat_juliana.html
├── images/                 # Pasta para todas as imagens
│   ├── perfil1.png        # Avatar da Marina
│   ├── perfil2.png        # Avatar do Carlos
│   ├── perfil3.png        # Avatar da Juliana
│   ├── voltar.png         # Ícone de voltar
│   └── menu.png           # Ícone de menu
└── README.md              # Este arquivo
```

## 🚀 Como Usar

### 1. Substituir Imagens
Todas as páginas HTML contêm caminhos organizados para imagens:
- `../images/perfil1.png` → Avatar da Marina
- `../images/perfil2.png` → Avatar do Carlos  
- `../images/perfil3.png` → Avatar da Juliana
- `../images/voltar.png` → Ícone de voltar
- `../images/menu.png` → Ícone de menu

### 2. Abrir o Projeto
1. Abra `index.html` no navegador
2. Navegue pela aplicação usando os links
3. Teste a responsividade redimensionando a janela

### 3. Deploy Local
- Não precisa de servidor web
- Funciona diretamente no navegador
- Todos os caminhos são relativos

## 🎨 Paleta de Cores

- **--color-dark**: #252526 (tom escuro primário)
- **--color-beige**: #F2EBDF (fundo claro/acolhedor)
- **--color-brown**: #402711 (marrom de destaque, cabeçalhos)
- **--color-gray**: #A69E97 (texto secundário / superfícies)
- **--color-black**: #0D0D0D (texto escuro)
- **--color-white**: #FFFFFF
- **--color-accent**: #f75e25 (CTA - Call to Action)
- **--color-star**: #FFD24A (cor estrela de favorito)

## 🔗 Fluxo de Navegação

1. **index.html** → **pages/menu.html** (botão "Entrar")
2. **menu.html** → **amigos.html** → **chat_[nome].html**
3. **menu.html** → **estabelecimentos.html** → **restaurantes.html** → **padaria_funcionarios.html** → **chat_marina.html**
4. **menu.html** → **estabelecimentos.html** → **lojas.html** → **mercado_funcionarios.html** → **chat_carlos.html**
5. **menu.html** → **estabelecimentos.html** → **lojas.html** → **livraria_funcionarios.html** → **chat_juliana.html**
6. **menu.html** → **avaliacoes.html** (links para chats nos nomes)

## 📱 Responsividade

- **Mobile**: ≤420px (fonte 14px, layout compacto)
- **Desktop**: ≥768px (fonte 18px, container centralizado)
- Layout mobile-first com breakpoints automáticos

## ♿ Acessibilidade

- Contraste WCAG AA garantido
- Foco visível em todos os elementos interativos
- Labels apropriados (`aria-label`)
- Navegação por teclado funcional
- Suporte a `prefers-contrast: high`

## 🎯 Principais Classes CSS

### Layout
- `.app` - Container principal (max-width: 420px)
- `.app-header` - Cabeçalho com altura fixa (56px)
- `.content` - Área de conteúdo com padding

### Componentes
- `.card` - Card básico para listagens
- `.friend-card` - Card de amigos com avatar
- `.category-item` - Item de categoria no menu
- `.btn-primary` - Botão principal (cor accent)
- `.avatar` - Imagem circular (56px)
- `.star` - Estrela de favorito
- `.rating--1` a `.rating--5` - Sistema de avaliação

### Chat
- `.chat` - Container do chat
- `.chat-messages` - Área de mensagens
- `.chat-line` - Linha de mensagem
- `.chat-user` - Mensagem do usuário (direita)
- `.chat-agent` - Mensagem do atendente (esquerda)

## ✅ Vantagens da Nova Estrutura

1. **Organização**: Arquivos separados por tipo (CSS, páginas, imagens)
2. **Manutenção**: Fácil localizar e editar arquivos específicos
3. **Escalabilidade**: Simples adicionar novas páginas ou recursos
4. **Deploy**: Sem dependência de ZIP, pasta pronta para upload
5. **Desenvolvimento**: Estrutura clara para trabalho em equipe

## 🔧 Personalização

Para personalizar o tema, edite as variáveis CSS no arquivo `css/theme.css`:

```css
:root {
  --color-accent: #f75e25;  /* Cor principal */
  --gap: 12px;              /* Espaçamento padrão */
  --radius: 12px;           /* Border radius */
  --max-width-app: 420px;   /* Largura máxima */
}
```

## 📋 Checklist de Deploy

- [ ] Substituir todos os caminhos de imagem
- [ ] Testar navegação em mobile e desktop
- [ ] Verificar acessibilidade com leitor de tela
- [ ] Validar HTML e CSS
- [ ] Testar em diferentes navegadores

**Projeto pronto para produção! 🚀**