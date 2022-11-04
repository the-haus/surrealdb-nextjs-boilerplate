
# 🍽️ Surrealdb - NextJS - Typescript
- ⚡ Server Side Rendering  for SEO [Next.js 13](https://nextjs.org/)
- ✅ Strict Mode for TypeScript and [React 18](https://reactjs.org/docs/getting-started.html)
- ⚙️ GraphQL Apollo Client  [Apollo](https://github.com/apollographql/apollo-client#apollo-client)
- 🔥 Type checking  [TypeScript](https://www.typescriptlang.org/)
- 📏 Linter with  [ESLint](https://eslint.org/)
- 🌈 Component Library [React Suite](https://rsuitejs.com/components/overview/)
- 💖 Code Formatter with  [Prettier](https://prettier.io/)
- 🖱️ One click Docker Deployment [Docker Composer](https://docs.docker.com/compose/)
- 🤖 GraphQL Code Generator [GraphQL Codegen](https://www.the-guild.dev/graphql/codegen#live-demo)
- ☕ Minimal setup for maximal freedom


## ⚙️ Installation

### Getting started

Run the following command on your local environment:
```shell  
yarn install
yarn build
```  

#### Hot Reload
```shell  
yarn dev
```  

#### Commands - package.json
```shell
yarn build
yarn start
yarn lint
yarn generate
```  
#### Setup environment variables - .env
```env  
NEXT_PUBLIC_HTTP_LINK=http://localhost:8500
NEXT_PUBLIC_HTTP_LINK_SERVER=http://localhost:8500  
```  


## 💻 Preview
|✅ Client - NextJS - Typescript -  [Docs](#%EF%B8%8F-surrealdb---nextjs---typescript) ![GraphQL API](https://puu.sh/JqErT/00bfe4847c.gif) |❌ [Server](https://github.com/the-haus/surrealdb-graphql-boilerplate)  - GraphQL - Typescript - [Docs](https://github.com/the-haus/surrealdb-graphql-boilerplate) ![GraphQL API](https://puu.sh/JqEsq/7c552ac177.gif) |  
|--|--|  
| *Currently viewing* | *Please make sure to install the Surreal GraphQL Boilerplate* |

## React Suite - UI - [Docs](https://rsuitejs.com/components/overview/)
React Suite is a set of react component libraries for enterprise system products. It is a well-thought-out and developer-friendly UI framework.


## GraphQL Codegen - [Docs](https://www.graphql-yoga.com/docs)

This package enables a specific workflow for developing a GraphQL server, where the GraphQL schema is the first thing you design, and acts as the contract between your frontend and backend.

Generate your backend GraphQL schema that outputs **types** and **queries**.

    File: codegen.ts
 ```js  
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: `${process.env.NEXT_PUBLIC_HTTP_LINK}/schema.graphql`,
    documents: ["./src/graphql/*.graphql"],
    generates: {
        "./src/graphql/schema-server.graphql": {
            plugins: ["schema-ast"]
        },
        "./src/types/schema.d.ts": {
            schema: ["./src/graphql/schema.graphql", "./src/graphql/operations.graphql"],
            plugins: ["typescript", "typescript-operations"]
        },
        "./src/types/fragments.tsx": {
            preset: "import-types",
            plugins: ["typescript-react-apollo"],
            presetConfig: {
                typesPath: "./schema.d"
            },
            config: {
                withHOC: false,
                withHooks: true
            }
        }
    }
};
export default config; 
```

#### Generated Type and Query Operations
File: operations.graphql
```graphql  
query queryTodoOperation {  
    queryTodo {  
        ...TodoFields  
    }  
}  
  
mutation createTodoOperation($title: String!, $description: String!) {  
    createTodo(title: $title, description: $description) {  
        ...TodoFields  
    }  
}  
mutation removeTodoOperation($id: ID!) {  
    removeTodo(id: $id)  
}  
  
fragment TodoFields on Todo {  
    id  
    title
    description
 }
```  
### Clean Operations
```js  
const [push] = useNotification();    
const { data } = useQueryTodoOperationQuery();
const [createTodoMutation] = useCreateTodoOperationMutation();
const [removeTodoMutation] = useRemoveTodoOperationMutation();    
const onSubmit = async (data: CreateTodoOperationMutationVariables) => {    
    try {    
        await createTodoMutation({    
            variables: {    
                title: data.title,    
                description: data.description    
            },    
            refetchQueries: [QueryTodoOperationDocument]    
        });    
        push("success", `Added ${data.title}`);
    } catch (e) {    
        console.log(e);    
    }
};    
const onDelete = async ({ id }: RemoveTodoOperationMutationVariables) => {    
    try {    
        await removeTodoMutation({    
            variables: {    
                id: id    
            },  
            refetchQueries: [QueryTodoOperationDocument]    
        });    
        push("success", `Removed ${id}`);    
    } catch (e) {    
        console.log(id);      
    }
};
```  
### Docker Composer
    File: docker-compose.yml
 ```yaml  
version: '3.8'
services:    
  client:    
    build:    
      context: .    
      dockerfile: docker/node/Dockerfile    
  ports:    
      - "3000:3000"  
```
