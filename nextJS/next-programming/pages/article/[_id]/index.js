import { useRouter } from "next/router";

const Article = () => {
    const router = useRouter();
    const { _id } = router.query;

    return (
        <div>
            <h1>This is an article {_id} </h1>
        </div>
    );
};

export default Article;
