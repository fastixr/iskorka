'use client'

import { FC } from 'react'
import { IMenuItem } from './menu.interface'
import Link from 'next/link'
import cn from 'clsx'
import { usePathname } from 'next/navigation'

interface INavItem {
    item: IMenuItem
}

const NavItem: FC<INavItem> = ({ item }) => {
    const pathname = usePathname()
    return <div>
        <Link 
            href={item.link} 
            className={cn(
                'text-base font-medium transition duration-100 hover:text-white-600',
                pathname === item.link ? 'text-white-600' : 'text-gray-600'
            )}
        >
            {item.name}
        </Link>
    </div>
}

export default NavItem