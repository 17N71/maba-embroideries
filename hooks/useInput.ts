import { useState, useCallback, ChangeEvent } from "react"
export default function useInput(initialState: string) {
	const [value, setValue] = useState(initialState)
	const changeState = useCallback(
		(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			setValue(event.target.value)
		},
		[value]
	)
	return { value, changeState }
}
