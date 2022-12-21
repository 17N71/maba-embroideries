import Title from "../../Title"
import artistryAndGalleryArticle from "./artistryAndGalleryArticle.module.scss"
const ArtistryAndGalleryArticle = () => {
	return (
		<div className={artistryAndGalleryArticle.blok}>
			<Title variant='h2' className={artistryAndGalleryArticle.title}>
				Artistry and Gallery
			</Title>
			<p className={artistryAndGalleryArticle.paragraph}>
				At Maba, we have found that God truly is in the detail and everyday, we
				are reminded of it by the intricate work done by our karigars.
				Therefore, we take the time to appreciate the effort that goes into each
				step, sequin, and stitch. What you see here is a photo archive of our
				processes and products.
			</p>
		</div>
	)
}

export default ArtistryAndGalleryArticle
