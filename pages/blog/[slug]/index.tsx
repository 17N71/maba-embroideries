import { GetStaticPaths, GetStaticProps } from "next"
import { client } from "../../../apolloClient"
import { gql } from "@apollo/client"
import { AllMemoiry, IMemoirProps } from "../../../types/blogTypes"
import blogSlug from "./blogSlug.module.scss"
import Image from "next/image"
import MoreInfo from "../../../components/BlogsComponents/MoreInfo"
import { IoMdArrowRoundBack } from "react-icons/io"
import Button from "./../../../components/Button/index"
import { useRouter } from "next/router"
import Zoom from "../../../components/Zoom"
export const getStaticPaths: GetStaticPaths = async () => {
	const { data } = await client.query<IMemoirProps>({
		query: gql`
			query getMemory {
				allMemories: allMemoir {
					slug {
						current
					}
				}
			}
		`,
	})

	const paths = data.allMemories.map((id) => ({
		params: { slug: id.slug.current.toString() },
	}))
	return {
		paths,
		fallback: "blocking",
	}
}
export const getStaticProps: GetStaticProps = async ({ params: { slug } }: any) => {
	try {
		const { data, loading, error } = await client.query({
			query: gql`
			query getMemory {
				allMemoir(
					where: {
						slug: { current: { eq: "${slug}" } }
					}
				) {
					title
					memoirTime {
						memoirTime
					}
					date
					memoirImage {
						image {
							asset {
								url
							}
						}
						caption
					}
					author {
						name
						image {
							asset {
								url
							}
						}
						slug {
							current
						}
					}
					memoirDescription {
						big
					}
				}
			}
		`,
		})
		if (error) {
			return {
				notFound: true,
			}
		}
		return {
			props: {
				data,
				loading,
			},
			revalidate: 30,
		}
	} catch {
		return {
			notFound: true,
		}
	}
}
const MemoryPage = ({ data }: IMemoryPageProps) => {
	const Memory = data.allMemoir[0]
	const router = useRouter()
	const goBack = (): void => {
		router.back()
	}
	return (
		<section className={blogSlug.blogSlug}>
			<div className={blogSlug.imageContainer}>
				<Button className={blogSlug.goBack} onClick={goBack}>
					<IoMdArrowRoundBack />
					Back
				</Button>
				<Zoom>
					<Image
						src={Memory.memoirImage.image.asset.url}
						alt={Memory.memoirImage.caption}
						title={Memory.memoirImage.caption}
						className={blogSlug.image}
						width={750}
						height={600}
						priority={true}
					/>
				</Zoom>
			</div>
			<MoreInfo data={Memory} />
		</section>
	)
}

export default MemoryPage
interface IMemoryPageProps {
	data: {
		allMemoir: AllMemoiry[]
	}
}
