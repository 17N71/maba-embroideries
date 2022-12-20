import type { NextApiRequest, NextApiResponse } from "next"
import { homeHightSlider } from "../../types/homeHightSliderType"
import homeHightSliderJson from "./json/homeHightSlider.json"

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<homeHightSlider>
) {
	res.status(200).json(homeHightSliderJson)
}
