import Link from "next/link";
import Image from 'next/image'

export const Header: React.FC = () => {
    return <header data-theme="dark" className="navbar bg-base-200 fixed top-0 h-20 z-50 w-full">
        <Link passHref className="ml-8 navbar-start" href="/">
            <div className="flex flex-row gap-2 items-center">
                <Image src="/images/logo.png" alt="logo" width={70} height={70} />
                <p className="w-full text-center text-xl font-bold">Boutique Officielle</p>
            </div>
        </Link>

        <div className="navbar-center">
            <ul className="menu menu-horizontal px-1">
                <li className="mx-28"><Link href={"/news"}>Nouveautés</Link></li>
                <li className="mx-28" tabIndex={0}>
                    <Link passHref href={"/products"}>
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

        <div className="mr-16 pt-1 navbar-end">
            {/* <Link href="/cart">
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M2 2C1.44772 2 1 2.44772 1 3C1 3.55228 1.44772 4 2 4H2.47241C2.92336 4 3.31852 4.30182 3.43717 4.73688L3.85342 6.26312L6 14.1339V16C6 16.6935 6.23533 17.3321 6.63048 17.8402C6.23824 18.2816 6 18.863 6 19.5C6 20.8807 7.11929 22 8.5 22C9.88071 22 11 20.8807 11 19.5C11 19.3288 10.9828 19.1616 10.95 19H14.05C14.0172 19.1616 14 19.3288 14 19.5C14 20.8807 15.1193 22 16.5 22C17.8807 22 19 20.8807 19 19.5C19 19.1715 18.9366 18.8578 18.8215 18.5704C18.934 18.4086 19 18.212 19 18C19 17.4477 18.5523 17 18 17H16.5H9C8.44772 17 8 16.5523 8 16V15H18.236C19.1381 15 19.9285 14.3962 20.1657 13.5258L21.8007 7.52583C22.1473 6.25364 21.1896 5 19.871 5H5.58198L5.3667 4.21065C5.01074 2.90547 3.82526 2 2.47241 2H2ZM16.5 19C16.2239 19 16 19.2239 16 19.5C16 19.7761 16.2239 20 16.5 20C16.7761 20 17 19.7761 17 19.5C17 19.2239 16.7761 19 16.5 19ZM18.236 13H7.7638L6.12743 7H19.871L18.236 13ZM8.5 19C8.22386 19 8 19.2239 8 19.5C8 19.7761 8.22386 20 8.5 20C8.77614 20 9 19.7761 9 19.5C9 19.2239 8.77614 19 8.5 19Z"></path></svg>
            </Link> */}
        </div>
        
    </header>
}