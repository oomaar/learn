import Link from "next/link";
import articlesStyles from "../styles/Articles.module.css";

const ArticleItem = ({ item }) => {
    return (
        <Link href="/article/[_id]" as={`/article/${item._id}`}>
            <a className={articlesStyles.card}>
                <h3>{item.title} &rarr;</h3>
                <p>{item.description}</p>
            </a>
        </Link>
    );
};

export default ArticleItem;
