import { ReactNode } from "react"
import Header from "./../Header"
import Footer from "./../Footer"
import ApolloConecter from "../../apolloClient"
import { AnimatePresence, motion } from "framer-motion"
import { useRouter } from "next/router"

const Merger = ({ children }: MergerType) => {
	const router = useRouter()
	const variants = {
		initialState: {
			visibility: "hidden",
			clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
		},
		animateState: {
			visibility: "visible",
			clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
		},
		exitState: {
			visibility: "hidden",
			clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
		},
	}
	return (
		<ApolloConecter>
			<Header />
			<AnimatePresence initial={false} mode={"wait"}>
				<motion.main
					key={router.route}
					transition={{ duration: 0.45 }}
					initial={"initialState"}
					animate={"animateState"}
					exit={"exitState"}
					variants={{
						initialState: {
							visibility: "hidden",
							clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
						},
						animateState: {
							visibility: "visible",
							clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
						},
						exitState: {
							visibility: "hidden",
							clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
						},
					}}
				>
					{children}
				</motion.main>
			</AnimatePresence>
			<Footer />
		</ApolloConecter>
	)
}

export default Merger
type MergerType = {
	children: ReactNode
}
