import about from "./about.module.scss"
import { NextPage } from "next"
import { GetStaticProps } from "next"
import { client } from "./../../apolloClient"
import { gql } from "@apollo/client"
import { IAboutProps } from "./../../types/AboutTypes"
import AboutSlider from "./../../components/AboutComponents/AboutSlider"
import Loader from "../../components/Loader"
const About: NextPage<IAboutProps> = ({ data, loading }) => {
	if (loading) {
		return <Loader />
	}
	const { allAbout } = data
	return (
		<section className={about.section} id={"about"}>
			<AboutSlider slides={allAbout} />
		</section>
	)
}

export default About
export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data, loading, error } = await client.query({
			query: gql`
				query getAboutUs {
					allAbout(sort: { _createdAt: ASC }) {
						_id
						title
						AboutArticle
						AboutImage {
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
		}
	} catch {
		return {
			notFound: true,
		}
	}
}
