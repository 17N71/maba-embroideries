import type { AppProps } from "next/app"
import "../styles/globals.scss"
import Merger from "../components/Merger"
import { Analytics } from "@vercel/analytics/react"
import "@splidejs/react-splide/css/sea-green"
import { AnimatePresence, motion } from "framer-motion"
import { useRouter } from "next/router"

export default function App({ Component, pageProps }: AppProps) {
	const r = useRouter()
	return (
		<Merger>
			<AnimatePresence mode={"sync"} initial={false}>
				<motion.div
					key={r.route}
					animate={"pageAnimate"}
					initial={"pageInitial"}
					exit={"pageExit"}
					transition={{ duration: 0.45, delay: 0.01 }}
					variants={{
						pageInitial: {
							opacity: 0,
							y: -15,
						},
						pageAnimate: {
							opacity: 1,
							y: 0,
						},
						pageExit: {
							opacity: 0,
							y: 14,
						},
					}}
				>
					<Component {...pageProps} />
				</motion.div>
			</AnimatePresence>
			<Analytics />
		</Merger>
	)
}
