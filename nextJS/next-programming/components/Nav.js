import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul className={navStyles.ull}>
                <li className={navStyles.lii}>
                    <Link href="/">Home</Link>
                </li>
                <li className={navStyles.lii}>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
