import blogMemoir from "./blogMemoir.module.scss"
import Title from "./../../Title/index"
import { AllMemoiry } from "../../../types/blogTypes"
import MemoirCard from "../MemoirCard"
interface IMemoirProps {
	allMemories: AllMemoiry[]
}
const BlogMemoir = ({ allMemories }: IMemoirProps): JSX.Element => {
	return (
		<div className={blogMemoir.blogMemoir}>
			<Title variant={"ash6"} className={blogMemoir.title}>
				Maba Memoir
			</Title>
			<div className={blogMemoir.container}>
				{allMemories &&
					allMemories?.map((memoir) => <MemoirCard key={memoir._id} {...memoir} />)}
			</div>
		</div>
	)
}

export default BlogMemoir
