import Link from "next/link";
import Image from 'next/image'
import Logo from 'src/img/logo.png'

export const ImageModal: React.FC = () => {
    return <>
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label htmlFor="my-modal-4" className="modal cursor-pointer w-full">
            <label className="modal-box relative w-full h-full" htmlFor="">
                <Image src={"/images/products/logo_poitrine_gris.jpg"} alt={""} width={1000} height={1000} unoptimized></Image>
            </label>
        </label>

    </>

}