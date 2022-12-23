import { format } from "date-fns"
import Image from "next/image"
import Link from "next/link"
import { AllMemoiry } from "../../../types/blogTypes"
import memoirCard from "./memoirCard.module.scss"
const MemoirCard = ({
	title,
	slug: s,
	memoirImage,
	memoirDescription,
	memoirTime,
	date,
	author,
}: AllMemoiry) => {
	const slug = s.current
	return (
		<div className={memoirCard.memoirCard}>
			<Link href={`/blog/${slug}`}>
				<div className={memoirCard.ImgContainer}>
					<Image
						src={memoirImage.image.asset.url}
						alt={memoirImage.caption}
						title={memoirImage.caption}
						className={memoirCard.image}
						priority={true}
						width={420}
						height={300}
					/>
				</div>
			</Link>
			<Link href={`/${author.slug.current}`} className={memoirCard.author}>
				<Image
					src={author.image.asset.url}
					alt={author.name}
					width={26}
					height={26}
					className={memoirCard.authorImage}
					title={author.name}
				/>
				<span>{author.name}</span>
			</Link>
			<Link href={`/blog/${slug}`}>
				<h4 className={memoirCard.title}>{title}</h4>
				<p className={memoirCard.paragraph}>{memoirDescription.small}</p>
			</Link>
			<div className={memoirCard.date}>
				<span className={memoirCard.dot}>{format(new Date(date), "MMM dd")}</span>
				<span>{memoirTime.memoirTime}</span>
			</div>
		</div>
	)
}

export default MemoirCard
