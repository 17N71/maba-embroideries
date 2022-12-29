import footer from "./footer.module.scss"
import FooterLayout from "./FooterLayout"
import FooterForm from "./FooterForm"
import Image from "next/legacy/image"
import Link from "next/link"
import Socials from "./../Socials"
import Media from "react-media"

const Footer = () => {
	return (
		<FooterLayout>
			<section className={footer.stayInTouch}>
				<div className={footer.left}>
					<FooterForm />
					<Media query={"(min-width: 768px)"}>
						{(matches) =>
							matches ? (
								<Link href={"/"} className={footer.logo}>
									<Image
										src={"/	footerLogo.svg"}
										alt='Logo  Maba'
										title='Logo  Maba'
										layout={"intrinsic"}
										width={307}
										height={72}
									/>
								</Link>
							) : (
								<Link href={"/"} className={footer.logo}>
									<Image
										src={"/footerLogo.svg"}
										alt='Logo  Maba'
										title='Logo  Maba'
										layout={"intrinsic"}
										width={256}
										height={60}
									/>
								</Link>
							)
						}
					</Media>
				</div>
				<div className={footer.right}>
					<Socials direction='column' className={footer.socials} />
					<strong className={footer.rights}>
						© {new Date().getFullYear()} Aadidev Trade International
					</strong>
				</div>
			</section>
		</FooterLayout>
	)
}

export default Footer
