import header from "./header.module.scss"
import Logo from "./../Logo"
import Navigation from "./../Navigation"
import useSWR from "swr"
import Media from "react-media"
import MobileMenu from "../MobileMenu"
const Header = () => {
	const fetcher = (URL: string) => fetch(URL).then((res) => res.json())
	const { data, isLoading } = useSWR("/api/headerLinks", fetcher)
	if (isLoading) {
		return <h2>Loading ...</h2>
	}
	return (
		<header className={header.header}>
			<Logo />
			<Media query={"(min-width: 1024px)"}>
				{(matches) => (matches ? <Navigation data={data} /> : <MobileMenu />)}
			</Media>
		</header>
	)
}

export default Header
