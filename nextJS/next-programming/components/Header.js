import headerStyles from '../styles/Header.module.css';

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span className="titleSpan">WebDev</span> Newz
            </h1>
            <style jsx>
                {`
                    .titleSpan {
                        color: red;
                    }
                `}
            </style>
        </div>
    );
};

export default Header;
