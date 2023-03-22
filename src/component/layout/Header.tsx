import styles from "./layout.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <div>Bell</div>
      </div>
      <nav className={styles.headerNav}>
        <ul className={styles.headerNavList}>
          <li className={styles.headerNavItem}>
            <div>Home</div>
          </li>
          <li className={styles.headerNavItem}>
            <div>About</div>
          </li>
          <li className={styles.headerNavItem}>
            <div>Contact</div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
