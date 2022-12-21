import { GetStaticProps } from "next"
import HomeSlider from "./../components/HomeSlider"
import "@splidejs/react-splide/css"
import useSWR from "swr"
import HomeWelcome from "./../components/HomeWelcome/index"
import { client } from "../apolloClient"
import { gql } from "@apollo/client"
import { HomeProps } from "./../types/categoriesType"
import IHomeProps from "./../types/IHomeProps"
import HomeOurPartners from "./../components/HomeOurPartners/index"
import HomeBuildTogether from "./../components/HomeBuildTogether"

const Home = ({ datas, loading }: IHomeProps): JSX.Element => {
	const fetcher = (URL: string) => fetch(URL).then((res) => res.json())
	const { data, isLoading } = useSWR("/api/homeHighSlider", fetcher)
	const slides = data?.slides
	if (loading || isLoading) {
		return <h2>Loading ...</h2>
	}
	return (
		<>
			<HomeSlider slides={slides} />
			<HomeWelcome categories={datas} />
			<HomeOurPartners allTestimonials={datas.allTestimonials} />
			<HomeBuildTogether />
		</>
	)
}
export default Home
export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data, loading, error } = await client.query<HomeProps>({
			query: gql`
				query getHomeDatas {
					allCategories: allCategory {
						_id
						title
						description
						category_slug {
							current
						}
						categoryImage {
							caption
							image {
								asset {
									url
								}
							}
						}
					}
					allTestimonials: allTestimonial {
						_id
						authorName
						comment
					}
				}
			`,
		})

		if (!data || error) {
			return {
				notFound: true,
			}
		}
		return {
			props: {
				datas: data,
				loading,
			},
		}
	} catch {
		return {
			notFound: true,
		}
	}
}
