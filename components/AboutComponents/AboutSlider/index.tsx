import { SplideSlide, Splide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css/sea-green"
import Image from "next/image"
import Media from "react-media"
import { IAllAbout } from "../../../types/AboutTypes"
import Title from "../../Title"
import aboutSlider from "./aboutSlider.module.scss"
import Head from "next/head"
const AboutSlider = ({ slides }: { slides: IAllAbout[] }) => {
	return (
		<>
			<Head>
				<style global>{`
					.splide {
						padding: 0 !important;
					}
					.splide__pagination {
						left: auto;
						display: flex;
						gap: 8px;
					}
					.splide__track.splide__track--slide.splide__track--ttb.splide__track--draggable {
						height: 100vh !important;
					}
					.splide__pagination--ttb .splide__pagination__page {
						background: #ffffff;
						opacity: 0.2;
						height: 28px;
						width: 3px;
						outline: none;
					}
					.splide__pagination__page.is-active {
						width: 3px;
						outline: none;
						height: 28px;
						background: #ffffff;
						opacity: 1 !important;
					}
					.splide.is-focus-in .splide__pagination__page:focus {
						outline: none;
						outline-offset: 0;
					}
				`}</style>
			</Head>
			<Splide
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
			</Splide>
		</>
	)
}

export default AboutSlider
