export interface IArtistryAndGalleryProps {
	allDiscovers: AllDiscover[]
}

export interface AllDiscover {
	__typename: string
	_id: string
	slug: Slug
	title: string
	postImageSchema: PostImageSchema
}

export interface PostImageSchema {
	__typename: string
	image: Image
	caption: string
}

export interface Image {
	__typename: string
	asset: Asset
}

export interface Asset {
	__typename: string
	url: string
}

export interface Slug {
	__typename: string
	current: string
}
