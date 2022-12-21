export interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
	children: React.ReactNode
	className?: string
	type?: "submit" | "button" | "reset"
	isLink?: boolean
	href?: string
}
