import type { AppProps } from "next/app"
import { AnimatePresence, motion } from "framer-motion"
import "../styles/globals.scss"
import Merger from "../components/Merger"
import Head from "next/head"
import { useRouter } from "next/router"
import { Analytics } from "@vercel/analytics/react"
import "@splidejs/react-splide/css/sea-green"

export default function App({ Component, pageProps }: AppProps) {
	const { pathname } = useRouter()

	return (
		<>
			<Head>
				<title>Maba Embroideries</title>
				<link rel='icon' sizes='all' type='image/svg+xml' href='/Logo.svg' />
			</Head>

			<Merger>
				<AnimatePresence mode='wait'>
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
					</motion.div>
				</AnimatePresence>
				<Analytics />
			</Merger>
		</>
	)
}
