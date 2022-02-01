import CardStyles from "../styles/modules/post-card.module.scss"
import Link from "next/link";

export default function PostCard({ post, category }) {
  return (
    <div className={ CardStyles.container }>
      <h4 className={ CardStyles.title }>
      <Link href={ `/blog/${category}/${post.slug}` }>
        <a className={ CardStyles.link }>{ post.frontmatter.title }</a>
      </Link>
      </h4>
      <p className={ CardStyles.description }>
        { post.frontmatter.description }
      </p>
    </div>
  );
}
