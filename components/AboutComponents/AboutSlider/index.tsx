import aboutSlider from "./aboutSlider.module.scss"
import { SplideSlide, Splide } from "@splidejs/react-splide"
import Image from "next/image"
import Media from "react-media"
import { IAllAbout } from "../../../types/AboutTypes"
import Title from "../../Title"

const AboutSlider = ({ slides }: { slides: IAllAbout[] }) => {
	return (
		<>
			{/* <Splide
				className={aboutSlider.splide}
				options={{
					direction: "ttb",
					arrows: false,
					heightRatio: 0.5,
					perPage: 1,
					drag: true,
					keyboard: "global",
				}}
			>
				{slides &&
					slides?.map((slide) => (
						<SplideSlide key={slide._id} className={aboutSlider.slide}>
							<div className={aboutSlider.card}>
								<Image
									className={aboutSlider.image}
									fill={true}
									src={slide.AboutImage.image.asset.url}
									priority={true}
									alt={slide.AboutImage.caption}
									title={slide.AboutImage.caption}
								/>
								<article className={aboutSlider.article}>
									<Media query={"(min-width: 640px)"}>
										{(matches) =>
											matches ? (
												<Title
													variant='h2'
													underscore={true}
													className={aboutSlider.title}
												>
													{slide.title}
												</Title>
											) : (
												aboutSlider.title && (
													<Title
														variant='h2'
														underscore={false}
														className={aboutSlider.title}
													>
														{slide.title}
													</Title>
												)
											)
										}
									</Media>
									<p className={aboutSlider.paragraph}>{slide.AboutArticle}</p>
								</article>
							</div>
						</SplideSlide>
					))}
			</Splide> */}
			<article className={"min-h-screen flex justify-start pl-24 items-center"}>
				<Title variant='h2' underscore={true} className={aboutSlider.title}>
					{"it's title"}
				</Title>
			</article>
		</>
	)
}

export default AboutSlider
