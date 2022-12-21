import ourPartners from "./homeOurPartners.module.scss"
import Title from "./../Title/index"
import { Testimonial } from "./../../types/categoriesType"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css/sea-green"
const HomeOurPartners = ({ allTestimonials }: HomeOurPartnersType) => {
	const options = {
		type: "loop",
		perPage: 1,
		perMove: 1,
		arrows: false,
	}
	return (
		<section className={`${ourPartners.section} testimonials`}>
			<div className={ourPartners.content}>
				<Title variant='ash4' className={ourPartners.title}>
					What our partners have found
				</Title>
				<Splide options={options} className={ourPartners.spldier}>
					{allTestimonials &&
						allTestimonials?.map((testimonial) => (
							<SplideSlide key={testimonial._id} className={ourPartners.splide}>
								<p className={ourPartners.paragraph}>{testimonial.comment}</p>
								<Title variant='h4' className={ourPartners.authorName}>
									{testimonial.authorName}
								</Title>
							</SplideSlide>
						))}
				</Splide>
			</div>
		</section>
	)
}

export default HomeOurPartners
export type HomeOurPartnersType = {
	allTestimonials: Testimonial[]
}
