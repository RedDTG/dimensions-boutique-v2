import { useState } from 'react'
import Link from "next/link";
import Image from 'next/image'
import useIsMobile from '@/hooks/useMobileDetect';

export const Header: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const isMobile = useIsMobile();

    const shouldDispayMenu = !isMobile || (isMobile && mobileMenuOpen)

    function toggleHidden() {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    return <header className="navbar flex-wrap md:flex-nowrap justify-between md:justify-normal bg-base-200 sticky top-0 h-20 z-50 p-0">
        <Link passHref className="ml-4 sm:ml-8 navbar-start" href="/">
            <div className="flex flex-row gap-2 items-center">
                <Image src="/images/logo.png" alt="logo" width={80} height={80} style={{
                    transform: "scale(0.9)"
                }} />
                <p className="w-full text-center text-xl font-bold">Boutique Officielle</p>
            </div>
        </Link>

        <button id="tkt" onClick={toggleHidden} type="button" className="md:hidden inline-flex mr-2 p-2 rounded-lg text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Ouvrir le menu principale</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>

        {shouldDispayMenu && (<div className="md:navbar-center w-full md:w-auto bg-base-200 md:bg-transparent">
            <ul className="flex flex-col gap-y-6 my-4 md:menu md:menu-horizontal">
                <li className="mx-4"><Link href={"/news"}>Nouveautés</Link></li>
                <li className="mx-4" tabIndex={0}>
                    <Link passHref href={"/products"}>
                        Produits
                        <svg className="fill-current hidden md:block" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                    </Link>
                    <ul className="bg-base-100 menu w-56 rounded-box mt-4 sm:mt-0">
                        <li><Link href={"/products/tshirts"}>T-shirts</Link></li>
                        <li><Link href={"/products/hoodies"}>Sweats</Link></li>
                        <li><Link href={"/products/items"}>Accessoires</Link></li>
                        <div className="divider my-0"></div>
                        <li><Link href={"/products"}>Tous les produits</Link></li>
                    </ul>
                </li>
                <li className="mx-4"><Link href={"/collections"}>Collections</Link></li>
            </ul>
        </div>)
        }

    </header >
}