import { Splide, SplideSlide } from "@splidejs/react-splide"
import Image from "next/image"
import homeSlider from "./homeSlider.module.scss"
import Title from "../../Title"
import Button from "../../Button/index"
import { IHomeSlider } from "../../../types/categoriesType"
const HomeSlider = ({ slides }: { slides: IHomeSlider[] }) => {
	const options = {
		type: "loop",
		width: "100%",
		height: "100vh",
		padding: 0,
		gap: 0,
		cover: true,
		// autoplay: true,
		// interval: 4000,
		classes: {
			arrows: `splide__arrows maba-slider-arrows`,
			arrow: `splide__arrow maba-slider-arrow`,
			prev: "splide__arrow--prev maba-slider-arrow-prev",
			next: "splide__arrow--next maba-slider-arrow-next",
			pagination: "splide__pagination maba-slider-pagination",
			page: "splide__pagination__page maba-slider-page",
		},
	}
	return (
		<section className={`home-slider`}>
			<Splide options={options} className={homeSlider.container}>
				{slides &&
					slides?.map((slide) => (
						<SplideSlide key={slide._id} className={homeSlider.sliderContainer}>
							<Image
								className={homeSlider.image}
								src={slide.slider.image.asset.url}
								alt={slide.slider.caption}
								priority={true}
								fill={true}
								sizes={"100%, 100vh"}
							/>
							<div className={homeSlider.blok}>
								<Title variant='h2' className={homeSlider.title}>
									Everything You Can
									<br /> Imagine is Real
								</Title>
								<p className={homeSlider.paragraph}>
									Handcrafting luxury <br /> embroideries stitch by stitch
								</p>
								<Button type='button'>Discover Our Collection</Button>
							</div>
						</SplideSlide>
					))}
			</Splide>
		</section>
	)
}

export default HomeSlider
