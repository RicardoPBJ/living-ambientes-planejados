# Living Ambientes Planejados - Portfólio Institucional

## Visão do Projeto

Este é o portfólio institucional de alto padrão da Living Ambientes Planejados, uma montadora de móveis sob medida. Nossa missão é transmitir sofisticação, exclusividade e converter visitantes em leads qualificados via WhatsApp.

## Tech Stack & Requisitos Técnicos

- Framework: Next.js 15+ (App Router)
- Linguagem: TypeScript (Strict Mode)
- Estilização: Tailwind CSS v4 (Uso obrigatório de @import "tailwindcss" e configurações de tema via variáveis de CSS no @theme)
- Componentes: Baseados em Shadcn/UI, focados em responsividade Mobile First
- Ícones: Lucide React

## Arquitetura e Princípios de Código

- SRP (Single Responsibility Principle): Componentes pequenos e especializados
- **Navegação One Page:** A estrutura do site foi definida como uma Landing Page contínua. O Header utiliza âncoras (`#portfolio`, `#sobre`) para navegar entre as seções, garantindo um storytelling linear e maior conversão.
- Estrutura de Pastas:
  - `src/components/ui`: Átomos e componentes base
  - `src/components/layout`: Header, Footer
  - `src/components/sections`: Seções da Landing Page (Hero, Portfolio, LeadGen)
  - `src/constants`: Centralização de textos, links e categorias
- Documentação: Uso de TSDoc para explicar a lógica de componentes complexos
- Git: Seguir o padrão Conventional Commits (feat:, fix:, style:, arch:)

## Inicialização do Projeto

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Clone este repositório para o seu ambiente local.
3. Instale as dependências do projeto executando `npm install` ou `yarn install`.
4. Inicie o servidor local executando `npm run dev` ou `yarn dev`.

## Diretrizes de Implementação

1. Sempre comece a estilização pelo Mobile.
2. Não utilize componentes de biblioteca externa sem perguntar (prefira Tailwind CSS e componentes customizados).
3. O site não possui Login nem banco de dados; todas as informações são estáticas ou consumidas de um arquivo de constantes.
4. Foque em Performance (LCP/FID), otimizando o carregamento de imagens e vídeos.
