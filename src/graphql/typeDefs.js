import { mergeTypeDefs } from '@graphql-toolkit/schema-merging';
import { fileLoader } from 'merge-graphql-schemas';
import path from 'path';

const typesArray = fileLoader(path.join(__dirname, 'modules', '**', '*.gql'));
const typeDefs = mergeTypeDefs(typesArray);

export default typeDefs;