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
			<Merger>
				<Component {...pageProps} />
				<Analytics />
			</Merger>
		</>
	)
}
