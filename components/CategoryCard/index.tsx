import { AllCategory } from "../../types/categoriesType"
import categoryCard from "./categoryCard.module.scss"
import Title from "./../Title"
import Image from "next/legacy/image"
import Button from "./../Button"
import Zoom from "../Zoom"
const CategoryCard = ({ _id, categoryImage, slug, description, title }: AllCategory) => {
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
					href={`categories/${slug.current}`}
				>
					View
				</Button>
			</div>
			<div className={categoryCard.imageBlok}>
				<Zoom theme={"dark"}>
					<Image
						src={categoryImage.image.asset.url}
						width={508}
						height={508}
						objectFit={"cover"}
						alt={categoryImage.caption}
						layout={"intrinsic"}
						className={categoryCard.image}
					/>
				</Zoom>
			</div>
		</div>
	)
}

export default CategoryCard
