# Teste Tecnico Paggo - Front End

### Índice

1. [Instalação](#instalação)
2. [Como Usar](#como-usar)

## Instalação
Para instalar e configurar o projeto localmente, siga estas etapas:
1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Clone o repositório do projeto:
```bash
git https://github.com/EmersonMatias/front-end-paggo
```
3. Navegue até o diretório do projeto:
```bash
cd front-end-paggo
```
4. Instale as dependências do projeto usando o npm:
```bash
cd npm i
```
## Como Usar
Após instalar o projeto e suas dependências, precisamos configurar as variáveis de ambiente:

* Variáveis de ambiente do google para o NextAuth. Você pode encontrar como crias variáveis de ambiente no link abaixo:
https://next-auth.js.org/providers/google

* Definir uma JWT_SECRET_KEY, pode ser qualquer chave que você preferir.

* Para iniciar o servidor de desenvolvimento:
```bash
npm run dev
```

* Para construir o projeto para produção:
```bash
npm run build
```