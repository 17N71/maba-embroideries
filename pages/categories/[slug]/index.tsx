import { gql } from "@apollo/client"
import { NextPage, GetStaticPaths, GetStaticProps } from "next"
import { client } from "../../../apolloClient"
import Title from "../../../components/Title"
import { IArtistryAndGalleryProps } from "../../../types/artistryAndGalleryType"
import { ProductPageCategories } from "../../../types/categoriesType"
import { PostPageProps } from "../../../types/PostPageType"
import postPage from "./postPage.module.scss"
import PostPageGallery from "../../../components/PostPageComponents/PostPageGallery/index"
import Loader from "../../../components/Loader"
export type ProductPageType = {
	allDiscovers: IArtistryAndGalleryProps
	allCategory: ProductPageCategories[]
}
interface IPostPageProps {
	data: PostPageProps
	loading: boolean
}
export const getStaticPaths: GetStaticPaths = async () => {
	const { data } = await client.query<ProductPageType>({
		query: gql`
			query getSlugs {
				allDiscovers: allDiscover {
					slug {
						current
					}
				}
				allCategory {
					slug {
						current
					}
				}
			}
		`,
	})

	const allSlugs = [...data.allCategory, ...data.allCategory]
	const paths = allSlugs.map((s) => ({ params: { slug: s.slug.current.toString() } }))
	const uniqueArray = paths.filter(function (item, pos) {
		return paths.indexOf(item) == pos
	})
	return {
		paths: uniqueArray,
		fallback: "blocking",
	}
}
export const getStaticProps: GetStaticProps = async ({ params: { slug } }: any) => {
	try {
		const { data, loading, error } = await client.query({
			query: gql`
			query getSlugs {
				allDiscovers: allDiscover(
					where: { slug: { current: { eq: "${slug}" } } }
				) {
					title
				}
				allSlider(where: { page: { eq: "PostPage" } }) {
					_id
					slider {
						caption
						image {
							asset {
								url
							}
						}
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

const PostPage: NextPage<IPostPageProps> = ({ data, loading }) => {
	if (loading) {
		return <Loader />
	}
	const title = (data && data?.allDiscovers[0]?.title) || ""
	return (
		<div className={postPage.wrapper}>
			<section className={postPage.section}>
				<Title variant='h6' className={postPage.title}>
					{title && title}
				</Title>
				<PostPageGallery gallery={data.allSlider} />
				<Title variant='h6' className={`${postPage.title} ${postPage.titleSub}`}>
					{title && title}
				</Title>
				{data && <PostPageGallery gallery={data.allSlider.slice(1, 5)} />}
			</section>
		</div>
	)
}

export default PostPage
