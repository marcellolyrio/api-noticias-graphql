import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';

function startServer({typeDefs, resolvers}){
    mongoose.connect('mongodb://localhost:27017/graphql', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const server = new ApolloServer({
        typeDefs, 
        resolvers,
        formatError: (err) => {
            if(err.message.startsWith('Error:')){
                return new Error(err.message)
            }

        }
    });
    server.listen().then(({ url }) => console.log(`Server started at ${url}`));
}

export default startServer;
