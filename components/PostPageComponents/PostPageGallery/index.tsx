import Image from "next/image"
import { AllSlider } from "./../../../types/PostPageType"
import galleryImage from "./gallery.module.scss"
import Zoom from "react-medium-image-zoom"
import Media from "react-media"
interface IGalleryProps {
	gallery: AllSlider[]
}
const PostPageGallery = ({ gallery }: IGalleryProps) => {
	return (
		<div className={galleryImage.gallery}>
			{gallery &&
				gallery.map(({ _id, slider }) => (
					<div key={_id}>
						<Media query={"(min-width:768px)"}>
							{(match) =>
								match ? (
									<Zoom wrapElement='div'>
										<Image
											src={slider.image.asset.url}
											alt={slider.caption}
											width={500}
											height={300}
											className={galleryImage.image}
											priority={true}
										/>
									</Zoom>
								) : (
									<Image
										src={slider.image.asset.url}
										alt={slider.caption}
										width={500}
										height={300}
										className={galleryImage.image}
										priority={true}
									/>
								)
							}
						</Media>
					</div>
				))}
		</div>
	)
}

export default PostPageGallery
