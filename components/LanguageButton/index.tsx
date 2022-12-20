import React from "react"
import lgbt from "./lgbt.module.scss"
const LanguageButton = () => {
	return (
		<div className={lgbt.container}>
			<button type='button' className={lgbt.button}>
				en
			</button>
			<span> | </span>
			<button type='button' className={lgbt.button}>
				it
			</button>
		</div>
	)
}
export default LanguageButton
