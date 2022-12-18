import "../styles/globals.scss"
import type { AppProps } from "next/app"
import Head from "next/head"
import Merger from "../components/Merger"
export default function App({ Component, pageProps }: AppProps) {
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
			<Merger>
				<Component {...pageProps} />
			</Merger>
		</>
	)
}
