import { useState, useCallback } from "react"
export default function useInput(initialState) {
	const [value, setValue] = useState(initialState)
	const changeState = useCallback(
		(event) => {
			setValue(event.target.value)
		},
		[value]
	)
	return [value, changeState]
}
