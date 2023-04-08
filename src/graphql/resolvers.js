import { mergeResolvers } from '@graphql-toolkit/schema-merging';
import { fileLoader } from 'merge-graphql-schemas';
import path from 'path';

const resolversArray = fileLoader(path.join(__dirname, 'modules', '**', 'resolvers.js'));
const resolvers = mergeResolvers(resolversArray);

export default resolvers;