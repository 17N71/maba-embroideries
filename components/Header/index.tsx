import header from "./header.module.scss"
import Logo from "./../Logo"
import Navigation from "./../Navigation"
import useSWR from "swr"
import Media from "react-media"
import MobileMenu from "../MobileMenu"
import { GiHamburgerMenu } from "react-icons/gi"
import { useEffect, useState } from "react"
import Loader from "../Loader"
const Header = () => {
	const fetcher = (URL: string) => fetch(URL).then((res) => res.json())
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const menuHandle = () => {
		setIsOpen(!isOpen)
	}
	useEffect(() => {
		if (isOpen) {
			window.document.documentElement.style.paddingRight = "0.5rem"
			window.document.documentElement.style.overflow = "hidden"
		} else {
			window.document.documentElement.style.paddingRight = "0"
			window.document.documentElement.style.overflow = "auto"
		}
	}, [isOpen])
	const { data, isLoading } = useSWR("/api/headerLinks", fetcher)
	if (isLoading) {
		return <Loader />
	}
	return (
		<header className={header.header}>
			<Media query={"(min-width: 1024px)"}>
				{(matches) =>
					matches ? (
						""
					) : (
						<button className={header.menuButton} onClick={menuHandle}>
							<GiHamburgerMenu size={24} title='Menu button' />
						</button>
					)
				}
			</Media>
			<h1>
				<Logo />
			</h1>
			<Media query={"(min-width: 1024px)"}>
				{(matches) =>
					matches ? (
						<Navigation data={data} />
					) : (
						<MobileMenu setIsOpen={setIsOpen} isOpen={isOpen} data={data} />
					)
				}
			</Media>
		</header>
	)
}

export default Header
