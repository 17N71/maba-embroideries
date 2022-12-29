import React from "react"
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import { DefaultType } from "./types/DefaultType"
export const client = new ApolloClient({
	uri: `https://${process.env.NEXT_PUBLIC_PROJECT_ID}.api.sanity.io/v1/graphql/${process.env.NEXT_PUBLIC_PROJECT_DATASET}/${process.env.NEXT_PUBLIC_PROJECT_NAME}`,
	cache: new InMemoryCache(),
	headers: {
		Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
	},
})
const ApolloConnecter = ({ children }: DefaultType) => {
	return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default ApolloConnecter
