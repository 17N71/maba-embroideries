export interface Asset {
	url: string
}

export interface Image {
	asset: Asset
}

export interface AboutImage {
	image: Image
	caption: string
}

export interface IAllAbout {
	_id: string
	title: string
	AboutArticle: string
	AboutImage: AboutImage
}

export interface IAboutData {
	allAbout: IAllAbout[]
}

export interface IAboutProps {
	data: IAboutData
	loading: boolean
}
