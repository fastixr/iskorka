import { FC } from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'
import { menu } from './menu.data'
import NavItem from './NavItem'

const Navbar: FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                    <Link href='/'>
                        <h1 className={styles.neonText}>
                            Искорка
                        </h1>
                    </Link>

                    <nav className='hidden gap-12 lg:flex 2xl:ml-16'>
                        {menu.map(item => (
                            <NavItem key={item.link} item={item}/>
                        ))}
                    </nav>
            </div>
        </header>
    )
}

export default Navbar