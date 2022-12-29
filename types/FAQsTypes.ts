export interface AllTab {
	_id: string
	ask: string
	answer: string
}

export interface AllTabsHeading {
	askChapter: string
	_id: string
}

export interface Data {
	allTabs: AllTab[]
	allTabsHeading: AllTabsHeading[]
}

export interface IFAQsProps {
	data: Data
	loading?: boolean
	error?: boolean
}
