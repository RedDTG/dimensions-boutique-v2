import Link from "next/link";
import Image from 'next/image'
import Logo from 'src/img/logo.png'

export const Header: React.FC = () => {
    return <header data-theme="dark" className="navbar bg-base-200 fixed top-0 h-20 z-50">
        <Image src={Logo} alt="logo" width={70} height={70} />
        <div className="flex w-full justify-evenly">
            <h3 className="text-md font-semibold flex-1 text-center">Nouveautés</h3>
            <h3 className="text-md font-semibold flex-1 text-center">Produits</h3>
            <h3 className="text-md font-semibold flex-1 text-center">Collections</h3>
        </div>
    </header>;
}