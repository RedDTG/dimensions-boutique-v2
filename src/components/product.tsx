import { Product } from "@/models/product";
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
    product: Product
}

export const ProductCard: React.FC<ProductCardProps> = (props) => {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl border-2 border-base-300">
            <figure><Image src={"/images/products/" + props.product.image} width={1799} height={1799} alt={props.product.title} className='w-full rounded-xl' /></figure>
            <Link passHref className="absolute h-full w-full" href={'/products/' + props.product.id}>
                <div data-theme="dark" className="card card-body opacity-0 hover:opacity-100 hover:bg-opacity-90 h-full w-full bg-base-200 text-gray-200">

                    <h2 className="card-title pb-2">{props.product.title}</h2>
                    <p>{props.product.description}</p>
                    <div className="card-actions justify-between">
                        {props.product.artist ? <div className="italic">Par {props.product.artist.pseudo}</div> : null}
                        <div className="flex gap-2">
                            {
                                props.product.versions?.filter(version => version.color).map((version: { color?: { id: number, name: string } }) => (
                                    <div key={version.color?.id} className="badge badge-outline">{version.color?.name}</div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}