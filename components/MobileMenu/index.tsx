import Link from "next/link"
import { HeaderLinksType } from "../../types/HeaderLinksType"
import mobileMenu from "./mobile.module.scss"
type mobileMenuType = {
	data: HeaderLinksType
	isOpen: boolean
	setIsOpen: Function
}
const MobileMenu = ({ data, isOpen, setIsOpen }: mobileMenuType) => {
	return (
		<nav className={`${mobileMenu.navigation} ${isOpen ? mobileMenu.open : ""}`}>
			{data && (
				<ul className={mobileMenu.list}>
					{data?.links?.map((link) => (
						<li key={link.id} className={mobileMenu.item}>
							<Link href={`/${link.href}`} onClick={() => setIsOpen(false)}>
								{link.title}
							</Link>
						</li>
					))}
				</ul>
			)}
		</nav>
	)
}

export default MobileMenu
