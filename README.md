# Portfolio de Paulo Victor Armando

Um portfólio moderno e responsivo desenvolvido com **Vue.js 3**, **Tailwind CSS** e **Vite**.

## ✨ Características

- 🌍 **Bilíngue**: Suporte para Português e Inglês
- 🌙 **Tema Claro/Escuro**: Tema responsivo com localStorage
- 📱 **Totalmente Responsivo**: Design mobile-first
- ⚡ **Performance Otimizada**: Build rápido com Vite
- 🎨 **Design Moderno**: Tailwind CSS com componentes reutilizáveis
- 🔗 **Perfis Integrados**: Links para GitHub, LeetCode, HackerRank, etc.
- 📊 **Seções Completas**: Hero, About, Skills, Projects, Certifications, Contact

## 🛠️ Tecnologias

- **Vue.js 3** - Framework frontend
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **vue-i18n** - Internacionalização
- **GitHub Pages** - Hosting

## 🚀 Como Usar

### Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## 📖 Estrutura do Projeto

```
portfolio-app/
├── src/
│   ├── components/      # Componentes Vue
│   ├── composables/     # Composables (useTheme)
│   ├── locales/         # Arquivos de tradução
│   ├── App.vue          # Componente raiz
│   ├── main.js          # Ponto de entrada
│   ├── style.css        # Estilos globais
│   └── i18n.js          # Configuração de i18n
├── public/              # Arquivos estáticos
├── vite.config.js       # Configuração do Vite
├── tailwind.config.js   # Configuração do Tailwind
└── package.json         # Dependências
```

## 🌐 Deploy no GitHub Pages

### Automático com GitHub Actions

O workflow em `.github/workflows/deploy.yml` faz deploy automático a cada push para `main`:

1. Faça push para a branch `main`
2. O GitHub Actions vai compilar e fazer deploy automaticamente
3. O site estará disponível em: `https://seu-usuario.github.io/portfolio/`

### Deploy Manual

```bash
# Build
npm run build

# Fazer commit e push
git add .
git commit -m "Deploy portfolio"
git push origin main
```

## 📝 Customização

### Alterar conteúdo

- **Textos**: Edite `src/locales/messages.js`
- **Projetos**: Modifique `src/components/Projects.vue`
- **Habilidades**: Atualize `src/components/Skills.vue`
- **Cores**: Configure em `tailwind.config.js` e `style.css`

### Adicionar novas seções

1. Crie um novo componente em `src/components/`
2. Importe em `src/App.vue`
3. Adicione as traduções em `src/locales/messages.js`

---

**Made with ❤️ by Paulo Victor Armando**
