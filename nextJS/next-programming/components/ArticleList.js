import articlesStyles from "../styles/Articles.module.css";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ arr }) => {
    return (
        <div className={articlesStyles.grid}>
            {arr.map(item => <ArticleItem key={item._id} item={item} />)}
        </div>
    )
}

export default ArticleList
