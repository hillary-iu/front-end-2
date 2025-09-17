import styles from './header.module.css';
import Link from 'next/link';

export default function Header() {
    return (
        <>

            <header className={styles.header}>
                <nav>
                    <ul className={styles.ulMenu}>
                        <li className={styles.liMenu}><Link href='/'>Home</Link></li>
                        <li className={styles.liMenu}><Link href='./produtos'>Produtos</Link></li>
                        <ul className={styles.ulSubMenu}>
                            <li className={styles.ulSubMenu}><Link href='/produtos'>Cadastrar</Link></li>
                            <li className={styles.ulSubMenu}><Link href='/pordutos'>Pesquisar</Link></li>
                        </ul>
                    </ul>
                </nav >
            </header>

        </>
    );
}