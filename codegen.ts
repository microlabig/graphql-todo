import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "http://localhost:4000", // <URL_OF_YOUR_GRAPHQL_API>
    // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
    documents: ["src/apollo/**/*.{ts,tsx}"],
    generates: {
        "./src/__generated__/": {
            preset: "client",
            plugins: ['typescript'],
            presetConfig: {
                gqlTagName: "gql",
            },
        },
    },
    ignoreNoDocuments: true,
};

export default config;
