import React from "react"
import { DefaultType } from "../../types/DefaultType"
import Media from "react-media"
import footer from "./footer.module.scss"

const FooterLayout = ({ children }: DefaultType) => {
	return (
		<Media query={"(min-width: 768px)"}>
			{(matches) =>
				matches ? (
					<footer className={footer.footerJaguarLeft}>
						<>{children}</>
					</footer>
				) : (
					<footer className={footer.footerJaguarRight}>
						<>{children}</>
					</footer>
				)
			}
		</Media>
	)
}

export default FooterLayout
