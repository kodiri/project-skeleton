import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

function CreateClient() {
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
            uri: `https://project-skeleton-prod.herokuapp.com/`,
            credentials: 'include'
        })
    })
}

export default CreateClient;