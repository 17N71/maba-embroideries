import type { AppProps } from "next/app"
import "@splidejs/react-splide/css/sea-green"
import "../styles/Tiempos/stylesheet.scss"
import "../styles/poppins/stylesheet.scss"
import "../styles/globals.scss"
import Merger from "../components/Merger"
import { Analytics } from "@vercel/analytics/react"

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Merger>
			<Component {...pageProps} />
			<Analytics />
		</Merger>
	)
}
