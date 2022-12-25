import Image from "next/legacy/image"
import Link from "next/link"

const Logo = () => {
	return (
		<Link href={"/"}>
			<Image
				src={"/Logo.svg"}
				layout={"intrinsic"}
				alt={"Logo Maba Embroideries"}
				title={"Logo Maba Embroideries"}
				width={200}
				height={70}
				priority={true}
			/>
		</Link>
	)
}

export default Logo
