import Title from "../../Title";
import blogsArticle from "./blogsArticle.module.scss"
const BlogsArticle = (): JSX.Element => {
    return (
        <article className={blogsArticle.article}>
            <Title className={blogsArticle.title} variant={"h3"} underscore={true}>Types of Hand Embroideries</Title>
            <p className={blogsArticle.paragraph}>At Maba, we have found that God truly is in the detail and everyday, we are reminded of it by the intricate work done by our karigars. Therefore, we take the time to appreciate the effort.</p>
        </article>
    );
}
export default BlogsArticle;