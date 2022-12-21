import Image from "next/image"
import Link from "next/link"

const Logo = () => {
	return (
		<Link href={"/"}>
			<Image
				style={{ width: "auto", height: "auto", minWidth: "200px" }}
				src={"/Logo.svg"}
				alt={"Logo"}
				width={200}
				height={70}
				priority={true}
				sizes={"200px, 70px"}
			/>
		</Link>
	)
}

export default Logo
