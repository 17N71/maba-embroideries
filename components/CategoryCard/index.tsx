import { AllCategory } from "../../types/categoriesType"
import categoryCard from "./categoryCard.module.scss"
import Title from "./../Title/index"
import Image from "next/image"
import Button from "./../Button/index"
const CategoryCard = ({
	_id,
	categoryImage,
	category_slug,
	description,
	title,
}: AllCategory) => {
	return (
		<div className={categoryCard.card}>
			<div className={categoryCard.info}>
				<Title variant='h4' className={categoryCard.title}>
					{title}
				</Title>
				<p className={categoryCard.paragraph}>{description}</p>
				<Button
					type={"button"}
					isLink={true}
					className={categoryCard.link}
					href={category_slug.current}
				>
					View
				</Button>
			</div>
			<div className={categoryCard.imageBlok}>
				<Image
					src={categoryImage.image.asset.url}
					alt={categoryImage.caption}
					fill={true}
					sizes='(min-width: 550px) 508px,
							 (max-width: 550px) 210px
				'
					className={categoryCard.image}
				/>
			</div>
		</div>
	)
}

export default CategoryCard
