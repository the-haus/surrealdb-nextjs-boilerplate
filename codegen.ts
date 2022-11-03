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
            plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
            config: {
                withHOC: false,
                withHooks: true,
                hooksImportFrom: "react-apollo"
            }
        }
    }
};
export default config;
