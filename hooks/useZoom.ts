import { MouseEvent, useEffect, useRef, useState } from "react"
function useZoom(ModalZoomRef: any) {
	const [isZoom, setIsZoom] = useState<boolean>(false)
	const [zoomSize, setZoomSize] = useState<number>(1)
	function closeZoom() {
		setIsZoom(false)
	}
	const toStop = (e: MouseEvent<HTMLDivElement, MouseEvent>) => 	e.stopPropagation()
	
	const zoomHandle = () => setIsZoom(true)
	function zoomIn() {
		setZoomSize((state) => state + 0.1)
	}
	function zoomOut() {
		setZoomSize((state) => state - 0.1)
	}
	useEffect(() => {
		if (isZoom) {
			document.documentElement.style.overflow = "hidden"
			window.addEventListener("click", closeZoom)
		} else document.documentElement.style.overflow = "auto"
		return () => window.removeEventListener("click", closeZoom)
	}, [isZoom])
	useEffect(() => {
		const zoomInWheel = (e: WheelEvent) => {
			if (isZoom && ModalZoomRef) {
				if (e.deltaY < 0 && zoomSize < 2.5) {
					ModalZoomRef.current.style.transform = `scale(${zoomSize})`
					zoomIn()
				} else if (e.deltaY > 0 && zoomSize > 0.3) {
					ModalZoomRef.current.style.transform = `scale(${zoomSize})`
					zoomOut()
				}
			}
		}
		window.addEventListener("wheel", zoomInWheel)
		return () => window.removeEventListener("wheel", zoomInWheel)
	}, [isZoom, zoomSize])
	useEffect(() => {
		const closeOnKey = (e: KeyboardEvent) => {
			if (e.which === 27) {
				setIsZoom(false)
			}
		}
		if (isZoom) {
			window.addEventListener("keydown", closeOnKey)
		}
		return () => window.removeEventListener("keydown", closeOnKey)
	}, [isZoom])
	return { isZoom, toStop, zoomHandle }
}
export default useZoom
