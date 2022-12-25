import Image from "next/legacy/image"
import { AllDiscover } from "../../../types/artistryAndGalleryType"
import discoverCard from "./discoverCard.module.scss"
import Link from "next/link"
const DiscoverCard = ({ title, slug: s, postImageSchema }: AllDiscover) => {
	const slug = s.current
	return (
		<div className={discoverCard.card}>
			<Link href={`/categories/${slug}`} className={discoverCard.imageContainer}>
				<Image
					src={postImageSchema.image.asset.url}
					alt={postImageSchema.caption}
					priority={true}
					width={479}
					height={320}
					layout={"intrinsic"}
					className={discoverCard.image}
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
