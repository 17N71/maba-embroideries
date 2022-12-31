import Image from "next/image"
import { ReactElement, useRef } from "react"
import { AnimateSharedLayout, motion } from "framer-motion"
import zoom from "./zoom.module.scss"
import useZoom from "./../../hooks/useZoom"
import Media from "react-media"
const Zoom = ({ children, theme = "dark" }: ZoomType) => {
	if (!children.props.src) {
		return <span>Image is not found</span>
	}

	const ModalZoomRef = useRef<any>(null)
	const { isZoom, callZoom } = useZoom(ModalZoomRef)
	return (
		<Media query={"(min-width: 768px)"}>
			{(matches) =>
				matches ? (
					<AnimateSharedLayout>
						{isZoom && (
							<motion.div
								initial={{ opacity: 0, y: -40 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 40 }}
								transition={{ duration: 0.2 }}
								layoutId={`ContainerImageC-${Math.random()}`}
								className={`${isZoom ? zoom.zoomIn : ""} ${
									theme === "dark"
										? zoom.dark
										: theme === "light"
										? zoom.light
										: zoom.dark
								}`}
							>
								<motion.div
									className={zoom.imageContainer}
									layoutId={`ContainerImage-${Math.random()}`}
									initial={{ opacity: 0, y: -40 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: 40 }}
									transition={{ duration: 0.2 }}
								>
									<Image
										width={700}
										ref={ModalZoomRef}
										height={600}
										className={zoom.image}
										src={children.props.src}
										priority={true}
										quality={100}
										alt={children.props.alt}
									/>
								</motion.div>
							</motion.div>
						)}
						<motion.div
							initial={{ opacity: 0, y: -40 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 40 }}
							transition={{ duration: 0.2 }}
							className={zoom.zoomInCursor}
							onClick={callZoom}
							layoutId={`afterImage-${Math.random()}`}
						>
							{children}
						</motion.div>
					</AnimateSharedLayout>
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
