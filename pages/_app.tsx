import "../styles/globals.scss"
import type { AppProps } from "next/app"
import Head from "next/head"
import Merger from "../components/Merger"
import { AnimatePresence, motion } from "framer-motion"
import { useRouter } from "next/router"
export default function App({ Component, pageProps }: AppProps) {
	const { pathname } = useRouter()

	return (
		<>
			<Head>
				<title>Maba Embroideries</title>
				<link
					rel='shortcut icon'
					sizes='all'
					type='image/svg+xml'
					href='/Logo.svg'
				/>
			</Head>
			<AnimatePresence mode='wait'>
				<motion.div
					key={pathname}
					initial='initialState'
					animate='animateState'
					exit='exitState'
					transition={{ duration: 0.45 }}
					variants={{
						initialState: {
							clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
							opacity: 0,
							visibility: "hidden",
						},

						animateState: {
							clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
							opacity: 1,
							visibility: "visible",
						},
						exitState: {
							clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
						},
					}}
				>
					<Merger>
						<Component {...pageProps} />
					</Merger>
				</motion.div>
			</AnimatePresence>
		</>
	)
}
