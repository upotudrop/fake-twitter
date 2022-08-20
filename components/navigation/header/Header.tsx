import styles from './Header.module.css';
import Link from 'next/link';

export interface IHeader {}

const Header: React.FC<IHeader> = () => {
  return (
  <header className={styles.container}>
    <div className={styles.divContainer}>
      <div className={styles.buttonContainer}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="/">
          <a>Users</a>
        </Link>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="/">
          <a>Posts</a>
        </Link>
      </div>
    </div>

    <div className={styles.divContainer}>
      <div className={styles.loginContainer}>
        Username: <input />
        password: <input />
        <button>Login</button>
      </div>
    </div>
  </header>
  );
};

export default Header;