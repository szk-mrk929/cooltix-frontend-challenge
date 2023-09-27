import type { CodegenConfig } from '@graphql-codegen/cli';
import { GraphQLServerURL } from '../configs/graphql.server';

const config: CodegenConfig = {
  overwrite: true,
  schema: GraphQLServerURL,
  // documents: ['src/**/*.{ts,tsx}'],
  // ignoreNoDocuments: true, // for better experience with the watcher
  hooks: { afterAllFileWrite: ['eslint --fix', 'prettier --write'] },
  generates: {
    // './src/gql/': {
    //   preset: 'client',
    // },
    'src/graphql/types.ts': {
      plugins: ['typescript'],
      config: {
        inputMaybeValue: 'undefined | T',
        useIndexSignature: true,
        scalars: {
          DateTime: 'Date',
          JSON: '{ [key: string]: any }',
        },
      },
    },
  },
};

export default config;
