import Link from "next/link"
import navigation from "./navigation.module.scss"
import { useRouter } from "next/router"
import LanguageButton from "./../LanguageButton/index"
const Navigation = (data: HeaderLinksType) => {
	const router = useRouter()
	const { pathname } = router
	const path = pathname.slice(1)
	console.log(data)

	return (
		<nav className={navigation.navigation}>
			<ul className={navigation.list}>
				{data &&
					data.data?.links?.map((link, i) => {
						return (
							<li
								key={link.id}
								className={`${navigation.item} ${
									path === link.href ? navigation.active : ""
								}`}
							>
								<Link href={`/${link.href}` || "/"} tabIndex={i as number}>
									{link.title}
								</Link>
							</li>
						)
					})}
			</ul>
			<LanguageButton />
		</nav>
	)
}

export default Navigation
type link = {
	id: number
	href: string
	title: string
}
export type HeaderLinksType = {
	data: {
		links: link[]
	}
}
