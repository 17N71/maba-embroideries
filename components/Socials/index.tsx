import socials from "./socials.module.scss"
import { SiGmail } from "react-icons/si"
import { BsWhatsapp, BsInstagram, BsFillTelephoneFill } from "react-icons/bs"
type SocialsType = {
	direction?: "row" | "column"
	className?: string
}
const Socials = ({ direction = "row", className }: SocialsType) => {
	switch (direction) {
		case "row":
			return (
				<div className={`${socials.row} ${className}`}>
					<ul className={socials.refs}>
						<li>
							<a href={"tel:+37441351030"} rel='noopener noreferrer' target='_blank'>
								<BsFillTelephoneFill size={24} title='Telephone' color={"	#ffffff"} />
							</a>
							<a href={"tel:+37441351030"} rel='noopener noreferrer' target='_blank'>
								+374-(0)-41-35-10-30
							</a>
						</li>
						<li>
							<a
								href={"https://www.instagram.com/_.1771._/"}
								rel='noopener noreferrer'
								target='_blank'
							>
								<BsInstagram size={24} title='Instagram' color={"#ffffff"} />
							</a>
							<a href={"https://www.instagram.com/_.1771._/"}>_.1771._</a>
						</li>
						<li>
							<a
								href={"mailto:narek07012020@gmail.com"}
								rel='noopener noreferrer'
								target='_blank'
							>
								<SiGmail size={24} title='Gmail' color={"#ffffff"} />
							</a>
							<a
								href={"mailto:narek07012020@gmail.com"}
								rel='noopener noreferrer'
								target='_blank'
							>
								narek07012020@gmail.com
							</a>
						</li>
					</ul>
				</div>
			)
		case "column":
			return (
				<div className={`${socials.column} ${className}`}>
					<ul className={socials.refs}>
						<li>
							<a href={"tel:+9108053729001"} rel='noopener noreferrer' target='_blank'>
								+91 080 5372 9001
							</a>
						</li>
						<li>
							<a
								href={"mailto:info@mabadecor.com"}
								rel='noopener noreferrer'
								target='_blank'
							>
								info@mabadecor.com
							</a>
						</li>
						<li>
							<address>Bangalore, India</address>
						</li>
					</ul>
					<div className={socials.socials}>
						<a href={"tel:+9108053729001"} rel='noopener noreferrer'>
							<BsWhatsapp size={24} title='Whatsapp' color={"	#ffffff"} />
						</a>
						<a
							href={"https://www.instagram.com/maba.embroideries/"}
							rel='noopener noreferrer'
						>
							<BsInstagram size={24} title='Instagram' color={"#ffffff"} />
						</a>
						<a href='mailto:info@mabadecor.com' rel='noopener noreferrer'>
							<SiGmail size={24} title='Gmail' color={"#ffffff"} />
						</a>
					</div>
				</div>
			)
		default:
			return (
				<div className={`${socials.row} ${className}`}>
					<ul className={socials.refs}>
						<li>
							<a href={"tel:+37441351030"} rel='noopener noreferrer' target='_blank'>
								<BsFillTelephoneFill size={24} title='Telephone' color={"	#ffffff"} />
							</a>
							<a href={"tel:+37441351030"} rel='noopener noreferrer' target='_blank'>
								+374-(0)-41-35-10-30
							</a>
						</li>
						<li>
							<a
								href={"https://www.instagram.com/_.1771._/"}
								rel='noopener noreferrer'
								target='_blank'
							>
								<BsInstagram size={24} title='Instagram' color={"#ffffff"} />
							</a>
							<a href={"https://www.instagram.com/_.1771._/"}>_.1771._</a>
						</li>
						<li>
							<a
								href={"mailto:narek07012020@gmail.com"}
								rel='noopener noreferrer'
								target='_blank'
							>
								<SiGmail size={24} title='Gmail' color={"#ffffff"} />
							</a>
							<a
								href={"mailto:narek07012020@gmail.com"}
								rel='noopener noreferrer'
								target='_blank'
							>
								narek07012020@gmail.com
							</a>
						</li>
					</ul>
				</div>
			)
	}
}
export default Socials
