import Image from "next/image"
import Link from "next/link"
import React from "react"

const Logo = () => {
	return (
		<Link href={"/"}>
			<Image src={"/Logo.svg"} alt={"Logo"} width={200} height={70} />
		</Link>
	)
}

export default Logo
