import { ReactNode } from "react"
import Header from "./../Header"
import Footer from "./../Footer"
import ApolloConecter from "../../apolloClient"

const Merger = ({ children }: MergerType) => {
	return (
		<ApolloConecter>
			<Header />
			<main>{children}</main>
			<Footer />
		</ApolloConecter>
	)
}

export default Merger
type MergerType = {
	children: ReactNode
}
