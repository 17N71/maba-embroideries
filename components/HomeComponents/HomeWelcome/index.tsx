import homeWelcome from "./homeWelocme.module.scss"
import Title from "../../Title"
import { HomeProps } from "../../../types/categoriesType"
import CategoryCard from "../../CategoryCard"
const HomeWelcome = ({ categories }: homeWelcomeType) => {
	const { allCategories } = categories
	return (
		<section className={homeWelcome.section}>
			<Title variant='ash4' className={homeWelcome.title}>
				Welcome to Maba Embroideries
			</Title>
			<p className={homeWelcome.paragraph}>
				A creative haven and home to art and artists alike. Here, you will find
				a team of experienced and dexterous artists who have inherited a
				deep-rooted appreciation for India’s rich and intricate art forms and
				are driven by the passion to preserve these art forms and showcase them
				to the world.
			</p>
			{allCategories && (
				<div className={homeWelcome.cardContainer}>
					{allCategories?.map((category) => {
						return <CategoryCard key={category._id} {...category} />
					})}
				</div>
			)}
		</section>
	)
}

export default HomeWelcome
export type homeWelcomeType = {
	categories: HomeProps
}
