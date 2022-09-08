import Link from 'next/link';
import HeadTag from '../global/HeadTag';
import styles from "../styles/Home.module.css";
// https://github.com/iamshaunjp/nextjs-tutorial

export default function Home() {
  return (
    <div>
      <HeadTag title="Create Next App" />
      <h1 className={styles.title}>HomePage</h1>

      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Autem, vel saepe quaerat laudantium numquam reprehenderit explicabo!
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Autem, vel saepe quaerat laudantium numquam reprehenderit explicabo!
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Autem, vel saepe quaerat laudantium numquam reprehenderit explicabo!
      </p>

      <Link href="/ninjas">
        <a className={styles.btn}>
          See Ninja Listing
        </a>
      </Link>
    </div>
  );
};
