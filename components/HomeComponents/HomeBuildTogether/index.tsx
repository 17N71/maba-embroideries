import homeBuild from "./homeBuild.module.scss"
import BuildTogetherForm from "../HomeBuildTogetherForm"
import Title from "../../Title/index"
import TogetherSupport from "../../TogetherSupport"
import Media from "react-media"
const HomeBuildTogether = () => {
	return (
		<section className={homeBuild.section}>
			<Title variant='ash6' className={homeBuild.title}>
				Let’s Build Together
			</Title>
			<Media query={"(min-width: 768px)"}>
				{(matches) =>
					matches ? (
						<div className={homeBuild.container}>
							<BuildTogetherForm />
							<div className={homeBuild.support}>
								<TogetherSupport />
							</div>
						</div>
					) : (
						<BuildTogetherForm />
					)
				}
			</Media>
		</section>
	)
}

export default HomeBuildTogether
