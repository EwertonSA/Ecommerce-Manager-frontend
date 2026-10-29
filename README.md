# Ecommerce Manager — Frontend

Frontend de uma vitrine de e-commerce construída com Next.js. A página inicial apresenta a loja, destaca categorias e carrega os produtos mais recentes de uma API.

## Funcionalidades atuais

- Página inicial com apresentação da loja e categorias de produtos.
- Carrossel com os produtos retornados pela API.
- Layout estilizado com Sass e componentes do Reactstrap.
- Links de chamada para cadastro e login.

> **Estado do projeto:** os links para `/register` e `/login` já aparecem na interface, mas essas rotas ainda não estão implementadas neste frontend.

## Tecnologias

- [Next.js](https://nextjs.org/) 16 e [React](https://react.dev/) 19
- TypeScript
- Sass, Bootstrap e Reactstrap
- Axios para chamadas HTTP
- Splide para o carrossel de produtos

## Pré-requisitos

- Node.js e npm instalados.
- Uma API de produtos acessível pela aplicação. A página inicial consulta `GET /products/newest`.

## Como executar

1. Instale as dependências:

   ```bash
   npm ci
   ```

2. Configure a URL base da API no arquivo `.env.local`, na raiz do projeto:

   ```env
   NEXT_PUBLIC_BASEURL=http://localhost:3001
   ```

   Troque o endereço pela URL em que sua API está disponível. Se a variável não for definida, o frontend usa `http://localhost:3000`.

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Acesse [http://localhost:3000](http://localhost:3000).

Reinicie o servidor depois de alterar `.env.local` para que a nova configuração seja carregada.

## API de produtos

O serviço em `app/Service/productService.ts` faz a requisição `GET /products/newest` usando a URL definida em `NEXT_PUBLIC_BASEURL`. A resposta deve ser um array de produtos com os campos usados pela interface:

```json
[
  {
    "id": 1,
    "name": "Colar",
    "description": "Descrição do produto",
    "price": 59.9,
    "stockQuantity": 10,
    "thumbnail": "images/colar.jpg"
  }
]
```

O campo `thumbnail` é usado para montar o endereço da imagem a partir da mesma URL base da API. Por isso, a API deve disponibilizar essas imagens nesse endereço, ou o frontend deve ser ajustado para usar outra origem.

Como `NEXT_PUBLIC_BASEURL` é exposta ao navegador pelo Next.js, use nela apenas uma URL pública — nunca coloque tokens, senhas ou outras credenciais nessa variável.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run build` | Gera a build de produção. |
| `npm run start` | Inicia a aplicação já compilada. |
| `npm run lint` | Executa o ESLint. |

Para executar em produção:

```bash
npm run build
npm run start
```

Configure `NEXT_PUBLIC_BASEURL` também no ambiente de produção antes de gerar a build.

## Estrutura do projeto

```text
app/
├── Components/
│   ├── Common/              # Componentes compartilhados, como cards e carrossel
│   └── NoAuth/              # Seções da página inicial pública
├── Service/                 # Configuração HTTP e serviços de API
├── styles/                  # Estilos globais e compartilhados
├── layout.tsx               # Layout raiz e metadados
└── page.tsx                 # Página inicial
public/                       # Imagens e outros arquivos estáticos
```

## Desenvolvimento

O ponto de entrada da página inicial é `app/page.tsx`. Os componentes visuais ficam em `app/Components/`, e a comunicação com a API está em `app/Service/`.
