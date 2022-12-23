export interface MemoirTime {
	memoirTime: string
}

export interface Asset {
	url: string
}

export interface Image {
	asset: Asset
}

export interface MemoirImage {
	image: Image
	caption: string
}

export interface Slug {
	current: string
}

export interface Author {
	name: string
	slug: Slug
	image: {
		asset: {
			url: string
		}
	}
}

export interface MemoirDescription {
	small: string
	big: string
}

export interface AllMemoiry {
	_id: string
	title: string
	slug: {
		current: string
	}
	memoirTime: MemoirTime
	date: string
	memoirImage: MemoirImage
	author: Author
	memoirDescription: MemoirDescription
}

export interface IMemoirProps {
	allMemories: AllMemoiry[]
	loading: boolean
}
