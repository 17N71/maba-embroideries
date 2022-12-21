import artistryAndGallery from "./artistryAndGallery.module.scss"
import ArtistryAndGalleryArticle from "../../components/ArtistryAndGalleryComponents/Article"
import ArtistryAndGalleryDiscoverCollection from "../../components/ArtistryAndGalleryComponents/DiscoverCollection"
import { GetStaticProps } from "next"
import { client } from "../../apolloClient"
import { gql, useQuery } from "@apollo/client"
import { IArtistryAndGalleryProps } from "./../../types/artistryAndGalleryType"
import { useEffect, useState } from "react"

export type IArtistryAndGalleryPageProps = {
	data: IArtistryAndGalleryProps
	loading?: boolean
	loadMore?: Function
}
const ArtistryAndGallery = ({ data, loading }: IArtistryAndGalleryPageProps) => {
	const [dataCollection, setDataCollection] = useState<any>(data)
	const [isLoadMore, setIsLoadMore] = useState<boolean>(false)
	const { data: moreData } = useQuery(gql`
		query getDiscovers {
			allDiscovers: allDiscover(offset: 4, limit: 6) {
				_id
				slug {
					current
				}
				title
				postImageSchema {
					image {
						asset {
							url
						}
					}
					caption
				}
			}
		}
	`)
	const loadMore = async () => {
		setDataCollection({ allDiscovers: [...dataCollection.allDiscovers, ...moreData.allDiscovers] })
		setIsLoadMore(true)
	}
	useEffect(() => {
		setDataCollection(data)
	}, [])
	if (loading) {
		return <h2>Loading ...</h2>
	}
	return (
		<div className={artistryAndGallery.section}>
			<section className={artistryAndGallery.content} style={{ backgroundImage: `url('/artistryAndGallery.jpg')` }}>
				<ArtistryAndGalleryArticle />
			</section>
			<ArtistryAndGalleryDiscoverCollection isLoadMore={isLoadMore} loadMore={loadMore} data={dataCollection} />
		</div>
	)
}

export default ArtistryAndGallery
export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data, loading, error } = await client.query<IArtistryAndGalleryProps>({
			query: gql`
				query getDiscovers {
					allDiscovers: allDiscover(offset: 0, limit: 4) {
						_id
						slug {
							current
						}
						title
						postImageSchema {
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
