import Image from "next/image"
import { ReactElement, useRef, MouseEvent } from "react"
import zoom from "./zoom.module.scss"
import useZoom from "./../../hooks/useZoom"
const Zoom = ({ children, theme = "dark" }: ZoomType) => {
	if (!children.props.src) {
		return <span>Image is not found</span>
	}
	const callZoom = (e: any) => {
		toStop(e)
		zoomHandle()
	}
	const ModalZoomRef = useRef<any>(null)
	const { isZoom, toStop, zoomHandle } = useZoom(ModalZoomRef)
	return (
		<>
			{isZoom && (
				<div
					className={`${isZoom ? zoom.zoomIn : ""} ${
						theme === "dark" ? zoom.dark : theme === "light" ? zoom.light : zoom.dark
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
	)
}

export default Zoom
type ZoomType = {
	children: ReactElement<HTMLImageElement>
	theme?: "light" | "dark"
}
