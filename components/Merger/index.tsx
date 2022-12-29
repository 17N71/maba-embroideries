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
		<AnimatePresence initial={false} mode={"wait"} exitBeforeEnter={true}>
			<motion.main
				key={router.route + "_" + Math.random()}
				transition={{ duration: 0.5 }}
				initial={"initialState"}
				animate={"animateState"}
				exit={"exitState"}
				variants={{
					initialState: {
						y: -15,
						opacity: 0,
					},
					animateState: {
						y: 0,
						opacity: 1,
					},
					exitState: {
						y: 15,
						opacity: 0,
					},
				}}
			>
				<ApolloConecter>
					<Header />
					{children}
					<Footer />
				</ApolloConecter>
			</motion.main>
		</AnimatePresence>
	)
}

export default Merger
type MergerType = {
	children: ReactNode
}
