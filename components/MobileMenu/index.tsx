import Link from "next/link"
import { HeaderLinksType } from "../../types/HeaderLinksType"
import mobileMenu from "./mobile.module.scss"
type mobileMenuType = {
	data: HeaderLinksType
	isOpen: boolean
}

const MobileMenu = ({ data, isOpen }: mobileMenuType) => {
	return (
		<nav
			className={`${mobileMenu.navigation} ${isOpen ? mobileMenu.open : ""}`}
		>
			{data && (
				<ul className={mobileMenu.list}>
					{data?.links?.map((link) => (
						<li key={link.id} className={mobileMenu.item}>
							<Link href={`/${link.href}`}>{link.title}</Link>
						</li>
					))}
				</ul>
			)}
		</nav>
	)
}

export default MobileMenu
