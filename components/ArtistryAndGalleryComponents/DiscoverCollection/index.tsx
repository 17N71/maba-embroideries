import Title from "../../Title"
import discoverCollection from "./discoverCollection.module.scss"
import DiscoverCard from "../DiscoverCard"
import { IArtistryAndGalleryProps } from "./../../../types/artistryAndGalleryType"
import Button from "../../Button"
const ArtistryAndGalleryDiscoverCollection = ({ data, loadMore, isLoadMore }: collectionType) => {
	return (
		<section className={discoverCollection.section}>
			<Title variant={"ash6"}>Discover Maba Collection</Title>
			<div className={discoverCollection.collections}>
				{data && data?.allDiscovers.map((discover) => <DiscoverCard key={discover._id} {...discover} />)}
			</div>
			{!isLoadMore && (
				<Button type='button' disabled={isLoadMore} onClick={loadMore}>
					View all
				</Button>
			)}
		</section>
	)
}

export default ArtistryAndGalleryDiscoverCollection
type collectionType = {
	data: IArtistryAndGalleryProps
	loadMore: any
	isLoadMore: boolean
}
