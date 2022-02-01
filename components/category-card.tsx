import CardStyles from "../styles/modules/category-card.module.scss"
import Link from "next/link";

export default function CategoryCard({ category }) {
  return (
    <div className={ CardStyles.container }>
      <h2 className={ CardStyles.title }>
      <Link href={ `/blog/${category.name}` }>
        <a className={ CardStyles.link }>{ category.name } - { category.fileCount }</a>
      </Link>
      </h2>
    </div>
  );
}
