import { HTMLProps, ReactNode } from "react"
export interface ITitleProps extends HTMLProps<HTMLHeadingElement> {
	children: ReactNode
	className?: string
	variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
	underscore?: boolean
	color?: string
}
