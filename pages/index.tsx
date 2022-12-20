import { NextPage } from "next"
import HomeSlider from "./../components/HomeSlider"
import "@splidejs/react-splide/css"
import useSWR from "swr"
import HomeWelcome from "./../components/HomeWelcome/index"

const Home: NextPage = (): JSX.Element => {
	const fetcher = (URL: string) => fetch(URL).then((res) => res.json())
	const { data } = useSWR("/api/homeHighSlider", fetcher)
	const slides = data?.slides
	return (
		<>
			<HomeSlider slides={slides} />
			<HomeWelcome />
		</>
	)
}
export default Home
