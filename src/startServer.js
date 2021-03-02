import {ApolloServer} from "apollo-server";
import mongoose from "mongoose";

function startServer({ typeDefs, resolvers}) {
    mongoose.connect('mongodb://127.0.0.1/graphql', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const server = new ApolloServer({typeDefs, resolvers});
    server.listen().then(({url}) => console.log(`🏁 Server started at ${url}`));
}

export default startServer;