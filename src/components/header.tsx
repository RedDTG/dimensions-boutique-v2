import Link from "next/link";
import Image from 'next/image'

export const Header: React.FC = () => {
    return <header data-theme="dark" className="navbar bg-base-200 fixed top-0 h-20 z-50 w-full">
        <Link className="ml-8 navbar-start" href="/">
            <div className="flex flex-row gap-2 items-center">
                <Image src="/images/logo.png" alt="logo" width={70} height={70} />
                <p className="w-full text-center text-xl font-bold">Boutique Officielle</p>
            </div>
        </Link>

        <div className="navbar-center">
            <ul className="menu menu-horizontal px-1">
                <li className="mx-28"><Link href={"/news"}>Nouveautés</Link></li>
                <li className="mx-28" tabIndex={0}>
                    <Link href={"/products"}>
                        Produits
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                    </Link>
                    <ul className="bg-base-100 menu w-56 rounded-box">
                        <li><Link href={"/products/tshirts"}>T-shirts</Link></li>
                        <li><Link href={"/products/hoodies"}>Sweats</Link></li>
                        <li><Link href={"/products/items"}>Accessoires</Link></li>
                        <div className="divider py-0 my-0"></div>
                        <li><Link href={"/products"}>Tous les produits</Link></li>
                    </ul>
                </li>
                <li className="mx-28"><Link href={"/collections"}>Collections</Link></li>
            </ul>
        </div>

        <div className="navbar-end"></div>
        
    </header>;
}