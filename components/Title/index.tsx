import title from "./title.module.scss"
import { ITitleProps } from "./ITitleProps"

const Title = ({
	children,
	variant,
	color = "white",
	underscore = false,
	className = "",
	...props
}: ITitleProps): JSX.Element => {
	switch (variant) {
		case "h1":
			return (
				<h1
					className={`${title.heading} ${underscore ? title.underscore : ""} ${
						title.h1
					} ${className}`}
					style={{ color: color ? color : "" }}
					{...props}
				>
					{children}
				</h1>
			)
		case "h2":
			return (
				<h2
					className={`${title.heading} ${underscore ? title.underscore : ""} ${
						title.h2
					} ${className}`}
					style={{ color: color ? color : "" }}
					{...props}
				>
					{children}
				</h2>
			)
		case "h3":
			return (
				<h3
					className={`${title.heading} ${underscore ? title.underscore : ""} ${
						title.h3
					} ${className}`}
					style={{ color: color ? color : "" }}
					{...props}
				>
					{children}
				</h3>
			)
		case "h4":
			return (
				<h4
					className={`${title.heading} ${underscore ? title.underscore : ""} ${
						title.h4
					} ${className}`}
					style={{ color: color ? color : "" }}
					{...props}
				>
					{children}
				</h4>
			)
		case "h5":
			return (
				<h5
					className={`${title.heading} ${underscore ? title.underscore : ""} ${
						title.h5
					} ${className}`}
					style={{ color: color ? color : "" }}
					{...props}
				>
					{children}
				</h5>
			)
		case "h6":
			return (
				<h6
					className={`${title.heading} ${underscore ? title.underscore : ""} ${
						title.h6
					} ${className}`}
					style={{ color: color ? color : "" }}
					{...props}
				>
					{children}
				</h6>
			)
		default:
			return (
				<h2
					className={`${title.heading} ${underscore ? title.underscore : ""} ${
						title.h2
					} ${className}`}
					style={{ color: color ? color : "" }}
					{...props}
				>
					{children}
				</h2>
			)
	}
}

export default Title
