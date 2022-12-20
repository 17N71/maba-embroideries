import React from "react"
import { IButtonProps } from "./IButtonProps"
import button from "./button.module.scss"
import Link from "next/link"
const Button = ({
	children,
	type = "button",
	className = "",
	isLink = false,
	href = "",
	...props
}: IButtonProps) => {
	if (isLink) {
		return (
			<button
				type={type}
				className={`${button.button}  ${className}`}
				{...props}
			>
				<Link href={`/${href}`}>{children}</Link>
			</button>
		)
	}
	return (
		<button type={type} className={`${button.button}  ${className}`} {...props}>
			{children}
		</button>
	)
}

export default Button
