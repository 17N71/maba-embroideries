import { AllMemoiry } from "../../../types/blogTypes"
import moreInfo from "./moreInfo.module.scss"
import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
const MoreInfo = ({ data }: IMemoryPageProps) => {
	const { title, date, author, memoirDescription, memoirImage } = data

	return (
		<div className={moreInfo.moreInfo}>
			<article className={moreInfo.article}>
				<h2 className={moreInfo.title}>{title}</h2>
				<p className={moreInfo.paragraph}>{memoirDescription.big}</p>
			</article>
			<div className={moreInfo.authorAndDate}>
				<Link href={`/${author.slug.current}`} className={moreInfo.author}>
					<Image
						src={author.image.asset.url}
						alt={author.name}
						title={author.name}
						width={50}
						height={50}
					/>
					<span>{author.name}</span>
				</Link>
				<span className={moreInfo.date}>{format(new Date(date), "Y MMMM dd")}</span>
			</div>
		</div>
	)
}

export default MoreInfo
interface IMemoryPageProps {
	data: AllMemoiry
}
