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
export const serializers = {
	types: {
		code: (props: any) => (
			<pre data-language={props.node.language}>
				<code>{props.node.code}</code>
			</pre>
		),
	},
}
const ApolloConecter = ({ children }: DefaultType) => {
	return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default ApolloConecter
