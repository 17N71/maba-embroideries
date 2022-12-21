import Socials from "../Socials"
import togetherSupport from "./togetherSupport.module.scss"
const TogetherSupport = () => {
	return (
		<div className={togetherSupport.socials}>
			<p className={togetherSupport.support}>Support</p>
			<Socials direction={"row"} />
		</div>
	)
}

export default TogetherSupport
