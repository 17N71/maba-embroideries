export interface HomeProps {
	allCategories: AllCategory[]
	allTestimonials: Testimonial[]
}

export interface AllCategory {
	__typename: string
	_id: string
	title: string
	description: string
	category_slug: CategorySlug
	categoryImage: CategoryImage
}

export interface CategoryImage {
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

export interface CategorySlug {
	__typename: string
	current: string
}
export interface Testimonial {
	__typename: string
	_id: string
	authorName: string
	comment: string
}
