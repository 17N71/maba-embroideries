import Image from "next/image"
import Link from "next/link"
import React from "react"

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
			/>
		</Link>
	)
}

export default Logo
