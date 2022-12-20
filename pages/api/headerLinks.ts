// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { HeaderLinksType } from "../../types/HeaderLinksType"
import headerLinks from "./json/headerLinks.json"

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<HeaderLinksType>
) {
	res.status(200).json(headerLinks)
}
