import type { AppProps } from "next/app"
import { motion } from "framer-motion"
import "../styles/globals.scss"
import Merger from "../components/Merger"
import { useRouter } from "next/router"
import { Analytics } from "@vercel/analytics/react"
import "@splidejs/react-splide/css/sea-green"

export default function App({ Component, pageProps }: AppProps) {
	const { pathname } = useRouter()

	return (
		<>
			<Merger>
				<motion.div
					key={pathname}
					initial='initialState'
					animate='animateState'
					exit='exitState'
					transition={{ duration: 0.45 }}
					variants={{
						initialState: {
							opacity: 0,
							visibility: "hidden",
							clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
						},
						animateState: {
							opacity: 1,
							visibility: "visible",
							clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
						},
						exitState: {
							clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
						},
					}}
				>
					<Component {...pageProps} />
				<Analytics />
			</Merger>
				</motion.div>
		</>
	)
}
