import { GetStaticProps } from "next"
import HomeSlider from "../components/HomeComponents/HomeSlider"
import HomeWelcome from "../components/HomeComponents/HomeWelcome"
import { client } from "../apolloClient"
import { gql } from "@apollo/client"
import { HomeProps } from "./../types/categoriesType"
import IHomeProps from "./../types/IHomeProps"
import HomeOurPartners from "../components/HomeComponents/HomeOurPartners"
import HomeBuildTogether from "../components/HomeComponents/HomeBuildTogether"
import Loader from "../components/Loader"

const Home = ({ datas, loading }: IHomeProps): JSX.Element => {
	if (loading) {
		return <Loader />
	}
	return (
		<>
			<HomeSlider slides={datas.home} />
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
						slug {
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
					home: allSlider(where: { page: { eq: "home" } }) {
						_id
						page
						slider {
							image {
								asset {
									url
								}
							}
							caption
						}
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
