import { useState, ReactNode } from "react"
import { motion, AnimateSharedLayout } from "framer-motion"
import { TbChevronRight } from "react-icons/tb"
import FAQItem from "./FAQItem.module.scss"
const FrequentlyAskedQuestionsItem = ({ heading, body }: TabItemProps) => {
	const [openTab, setOpenTab] = useState<boolean>(false)
	const handleTab = () => setOpenTab(!openTab)
	return (
		<AnimateSharedLayout>
			<motion.div className={FAQItem.item}>
				<motion.button
					className={FAQItem.heading}
					key={`${heading?.toString().slice(0, 5)} ${Math.random() * 0.5}`}
					layoutId={`${heading?.toString().slice(0, 5)} ${Math.random()}`}
					type='button'
					onClick={handleTab}
				>
					<motion.span
						key={`${heading?.toString().slice(0, 5)} ${Math.random() * 600 + 300}`}
						layoutId={`${heading?.toString().slice(0, 5)} ${Math.random() * 300 + 121}`}
					>
						{heading}
					</motion.span>
					<TbChevronRight
						title={"Tab Button"}
						size={30}
						className={`${FAQItem.chevron} ${openTab ? FAQItem.opened : ""}`}
					/>
					{openTab}
				</motion.button>
				{openTab && (
					<motion.div
						className={FAQItem.body}
						key={`${body?.toString().slice(0, 5)} ${Math.random() * 0.5}`}
						layoutId={`${body?.toString().slice(0, 5)} ${Math.random()}`}
					>
						{body}
					</motion.div>
				)}
				<motion.span
					key={`FAQItemUnderline_${Math.random()}`}
					layoutId={`FAQItemUnderline_${Math.floor(Math.random() * 150)}`}
					className={FAQItem.line}
				/>
			</motion.div>
		</AnimateSharedLayout>
	)
}

export default FrequentlyAskedQuestionsItem
interface TabItemProps {
	heading: ReactNode
	body: ReactNode
}
