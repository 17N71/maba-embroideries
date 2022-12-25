import blogs from "./blogs.module.scss"
import BlogsArticle from "../../components/BlogsComponents/BlogsArticle"
import BlogMemoir from "../../components/BlogsComponents/BlogMemoir"
import { GetStaticProps } from "next"
import { client } from "./../../apolloClient"
import { gql } from "@apollo/client"
import { IMemoirProps } from "./../../types/blogTypes"
import Loader from "../../components/Loader"
export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data, loading, error } = await client.query<IMemoirProps>({
			query: gql`
				query getMemory {
					allMemories: allMemoir(limit: 6) {
						_id
						title
						slug {
							current
						}
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
							small
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
				allMemories: data.allMemories,
				loading,
			},
		}
	} catch {
		return {
			notFound: true,
		}
	}
}
const Blogs = ({ allMemories, loading }: IMemoirProps): JSX.Element => {
	if (loading) {
		return <Loader />
	}
	return (
		<section className={blogs.section}>
			<div className={blogs.content}>
				<BlogsArticle />
			</div>
			<BlogMemoir allMemories={allMemories} />
		</section>
	)
}

export default Blogs
