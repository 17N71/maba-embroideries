import type { AppProps } from "next/app"
import "../styles/Tiempos/stylesheet.scss"
import "../styles/poppins/stylesheet.scss"
import "../styles/globals.scss"
import Merger from "../components/Merger"
import { Analytics } from "@vercel/analytics/react"
import "@splidejs/react-splide/css/sea-green"

export default function App({ Component, pageProps }: AppProps) {
	const r = useRouter()
	return (
		<Merger>
			<Component {...pageProps} />
			<Analytics />
		</Merger>
	)
}
