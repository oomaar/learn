import Link from "next/link";
import HeadTag from "../../global/HeadTag";
import styles from "../../styles/Ninjas.module.css";

const Ninjas = ({ ninjas }) => {
    return (
        <div>
            <HeadTag title="Ninjas" />
            <h1>All Ninjas</h1>
            {ninjas.map(ninja => (
                <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
                    <a className={styles.single}>
                        <h3>{ninja.title}</h3>
                    </a>
                </Link>
            ))}
        </div>
    );
};

export default Ninjas;

export const getServerSideProps = async (context) => {
    const res = await fetch(`https://fakestoreapi.com/products`);
    const data = await res.json();

    return {
        props: {
            ninjas: data
        }
    };
};