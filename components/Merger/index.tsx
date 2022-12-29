import { ReactNode } from "react"
import Header from "./../Header"
import Footer from "./../Footer"
import ApolloConnecter from "../../apolloClient"
import { AnimatePresence } from "framer-motion"

const Merger = ({ children }: MergerType) => {
	return (
		<AnimatePresence initial={false} mode={"wait"} exitBeforeEnter={true}>
			<ApolloConnecter>
				<Header />
				<main>{children}</main>
				<Footer />
			</ApolloConnecter>
		</AnimatePresence>
	)
}

export default Merger
type MergerType = {
	children: ReactNode
}
