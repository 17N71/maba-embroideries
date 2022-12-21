export interface PostPageProps {
	allDiscovers: AllDiscover[]
	allSlider: AllSlider[]
}

export interface AllDiscover {
	__typename: string
	title: string
}

export interface AllSlider {
	__typename: string
	_id: string
	slider: Slider
}

export interface Slider {
	__typename: string
	caption: string
	image: Image
}

export interface Image {
	__typename: string
	asset: Asset
}

export interface Asset {
	__typename: string
	url: string
}
