import Image from "next/image"
import { AllDiscover } from "../../../types/artistryAndGalleryType"
import discoverCard from "./discoverCard.module.scss"
import Link from "next/link"
const DiscoverCard = ({ title, slug: slugs, postImageSchema }: AllDiscover) => {
	const slug = slugs.current
	return (
		<div className={discoverCard.card}>
			<Link href={`/categories/${slug}`}>
				<Image
					src={postImageSchema.image.asset.url}
					alt={postImageSchema.caption}
					priority={true}
					width={480}
					className={discoverCard.image}
					height={320}
					title={postImageSchema.caption}
				/>
			</Link>
			<h3>
				<Link href={`/categories/${slug}`} className={discoverCard.title}>
					{title}
				</Link>
			</h3>
		</div>
	)
}

export default DiscoverCard
