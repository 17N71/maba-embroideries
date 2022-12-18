import { ReactNode } from "react"
import Header from "./../Header"
import Footer from "./../Footer"

const Merger = ({ children }: MergerType) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	)
}

export default Merger
type MergerType = {
	children: ReactNode
}
