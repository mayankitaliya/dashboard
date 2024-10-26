
"use client"

import { useState } from 'react';
import { UserGroupIcon, HomeIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function NavLinks() {
    // Set up desh as an array of links with icons
    const [desh] = useState([
        { name: 'Home', icon: HomeIcon, href: '/' },
        { name: 'Dashboard', icon: UserGroupIcon, href: '/ui/dashboard', className: 'hover:bg-red-200 hover:text-red-600' },
        { name: 'Customers', icon: DocumentDuplicateIcon, href: '/ui/dashboard/customers' },
    ]);

    return (
        <>
            {desh.map((link) => {
                const LinkIcon = link.icon;
                const pathname = usePathname();
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'flex h-[48px] grow items-center justify-center gap-2 rounded-md font-extrabold p-3 text-sm border-2  hover:text-white md:flex-none md:justify-start md:p-2 md:px-3 my-2',
                            {
                                'bg-black text-white border-slate-400': pathname === link.href,
                            },
                        )}
                    >
                        <LinkIcon className="w-6" />
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}
