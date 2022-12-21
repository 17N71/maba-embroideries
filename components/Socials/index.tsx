import socials from "./socials.module.scss"
import { SiGmail } from "react-icons/si"
import { BsWhatsapp, BsInstagram } from "react-icons/bs"
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
							<a>
								<BsWhatsapp size={24} title='Whatsapp' color={"	#ffffff"} />
							</a>
							<a>+91 90 6699 7777</a>
						</li>
						<li>
							<a>
								<BsInstagram size={24} title='Instagram' color={"#ffffff"} />
							</a>
							<a>mabaembroideries</a>
						</li>
						<li>
							<a>
								<SiGmail size={24} title='Gmail' color={"#ffffff"} />
							</a>
							<a>info@maba.com</a>
						</li>
					</ul>
				</div>
			)
		case "column":
			return (
				<div className={`${socials.column} ${className}`}>
					<ul className={socials.refs}>
						<li>+91 080 5372 9001</li>
						<li>info@mabadecor.com</li>
						<li>
							<address>Bangalore, India</address>
						</li>
					</ul>
					<div className={socials.socials}>
						<a>
							<BsWhatsapp size={24} title='Whatsapp' color={"	#ffffff"} />
						</a>
						<a>
							<BsInstagram size={24} title='Instagram' color={"#ffffff"} />
						</a>
						<a>
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
							<a>
								<BsWhatsapp size={24} title='Whatsapp' color={"	#ffffff"} />
							</a>
							<a>+91 90 6699 7777</a>
						</li>
						<li>
							<a>
								<BsInstagram size={24} title='Instagram' color={"#ffffff"} />
							</a>
							<a>mabaembroideries</a>
						</li>
						<li>
							<a>
								<SiGmail size={24} title='Gmail' color={"#ffffff"} />
							</a>
							<a>info@maba.com</a>
						</li>
					</ul>
				</div>
			)
	}
}
export default Socials
