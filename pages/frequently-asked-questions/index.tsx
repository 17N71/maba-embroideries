import { GetStaticProps } from "next"
import { gql, useQuery } from "@apollo/client"
import { client } from "./../../apolloClient"
import { IFAQsProps } from "../../types/FAQsTypes"
import { useState } from "react"
import frequentlyAskedQuestions from "./frequentlyAskedQuestions.module.scss"
import dynamic from "next/dynamic"
const Loader = dynamic(() => import("../../components/Loader"))
import { useRouter } from "next/router"
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"
import FrequentlyAskedQuestionsItem from "./../../components/FrequentlyAskedQuestionsComponents/FrequentlyAskedQuestionsItem"

const FrequentlyAskedQuestions = ({ data, loading }: IFAQsProps) => {
	const router = useRouter()
	const [tabName, setTabName] = useState("What We Do")
	const [FAQData, setFAQData] = useState(data.allTabs)
	const {
		data: changedData,
		loading: isLoading,
		error,
	} = useQuery(gql`
		query getFAQs {
			allTabs(where: { askChapter: { askChapter: { eq: "${tabName}" } } }) {
				_id
				ask
				answer
			}
		}
	`)

	if (error) {
		router.replace("/error")
	}
	return (
		<section className={frequentlyAskedQuestions.section}>
			<AnimateSharedLayout>
				<motion.div className={frequentlyAskedQuestions.content}>
					<h2 className={frequentlyAskedQuestions.title}>Frequently Asked Questions</h2>
					<AnimatePresence>
						<ul className={frequentlyAskedQuestions.headingList}>
							{data &&
								data?.allTabsHeading.map((tab) => (
									<li
										className={
											tab.askChapter === tabName ? frequentlyAskedQuestions.active : ""
										}
										key={tab._id}
									>
										<motion.button
											key={tabName + tab._id + Math.random() + "button"}
											onClick={() => setTabName(tab.askChapter)}
										>
											{tab.askChapter}
											{tab.askChapter === tabName && (
												<motion.div
													layoutId={`ActiveItem`}
													className={frequentlyAskedQuestions.line}
												/>
											)}
										</motion.button>
									</li>
								))}
						</ul>
						<motion.ul className={frequentlyAskedQuestions.body}>
							{FAQData.map((faq) => (
								<motion.li
									layoutId={faq._id + Math.random() + faq.answer}
									key={tabName + faq._id + Math.random()}
								>
									<FrequentlyAskedQuestionsItem heading={faq.ask} body={faq.answer} />
								</motion.li>
							))}
						</motion.ul>
					</AnimatePresence>
				</motion.div>
			</AnimateSharedLayout>
		</section>
	)
}

export default FrequentlyAskedQuestions
export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data, loading, error } = await client.query<IFAQsProps>({
			query: gql`
				query getFAQs {
					allTabs(where: { askChapter: { askChapter: { eq: "What We Do" } } }) {
						_id
						ask
						answer
					}
					allTabsHeading(sort: { _createdAt: ASC }) {
						askChapter
						_id
					}
				}
			`,
		})
		if (error) {
			return {
				notFound: true,
			}
		}
		return {
			props: {
				data,
				loading,
			},
		}
	} catch {
		return {
			notFound: true,
		}
	}
}
