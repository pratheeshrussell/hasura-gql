
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      "http://localhost:8085/v1/graphql": {
        headers: {
           "Content-Type": "application/json",
           "x-hasura-admin-secret": "admin123"
        },
      },
    },
  ],
  documents: "src/queries/*.ts",
  generates: {
    "src/generated/graphqlschema.ts": {
      plugins: [
        "typescript",
        "typescript-operations"
      ]
    },
    "src/generated/graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
