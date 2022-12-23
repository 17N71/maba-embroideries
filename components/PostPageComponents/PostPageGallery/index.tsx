import Image from "next/image"
import { AllSlider } from "./../../../types/PostPageType"
import galleryImage from "./gallery.module.scss"
import Media from "react-media"
import Zoom from "./../../Zoom"
interface IGalleryProps {
	gallery: AllSlider[]
}
const PostPageGallery = ({ gallery }: IGalleryProps) => {
	return (
		<div className={galleryImage.gallery}>
			{gallery &&
				gallery.map(({ _id, slider }) => (
					<div className={"w-full"} key={_id}>
						<Media query={"(min-width:768px)"}>
							{(match) =>
								match ? (
									<Zoom>
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
										width={600}
										height={600}
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
