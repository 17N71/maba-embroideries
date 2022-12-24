import Image from "next/image"
import { MutableRefObject, ReactElement, useRef } from "react"
import zoom from "./zoom.module.scss"
import useZoom from "./../../hooks/useZoom"
import Media from "react-media"
const Zoom = ({ children, theme = "dark" }: ZoomType) => {
	if (!children.props.src) {
		return <span>Image is not found</span>
	}

	const ModalZoomRef = useRef<MutableRefObject<HTMLImageElement> | any>(null)
	const { isZoom, callZoom } = useZoom(ModalZoomRef)
	return (
		<Media query={"(min-width: 768px)"}>
			{(matches) =>
				matches ? (
					<>
						{isZoom && (
							<div
								className={`${isZoom ? zoom.zoomIn : ""} ${
									theme === "dark"
										? zoom.dark
										: theme === "light"
										? zoom.light
										: zoom.dark
								}`}
							>
								<div className={zoom.imageContainer}>
									<Image
										width={700}
										ref={ModalZoomRef}
										height={600}
										className={zoom.image}
										src={children.props.src}
										priority={true}
										quality={"100"}
										alt={children.props.alt}
									/>
								</div>
							</div>
						)}
						<div className={zoom.zoomInCursor} onClick={callZoom}>
							{children}
						</div>
					</>
				) : (
					<>{children}</>
				)
			}
		</Media>
	)
}

export default Zoom
type ZoomType = {
	children: ReactElement<HTMLImageElement>
	theme?: "light" | "dark"
}
