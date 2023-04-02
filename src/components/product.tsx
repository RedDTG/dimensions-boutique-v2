import Image from "next/image";

type ProductCardProps = {
    title: string,
    description: string,
    image: string,
    versions?: { color: { id: number, name: string } }[]
}

export const ProductCard: React.FC<ProductCardProps> = (props) => {
    console.log(props.image)
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl border-2 border-base-300">
            <figure><Image src={"/images/products/" + props.image} width={1799} height={1799} alt={props.title} className='w-full rounded-xl' /></figure>
            <div data-theme="dark" className="card card-body absolute opacity-0 hover:opacity-100 hover:bg-opacity-90 h-full w-full bg-base-200 text-gray-200">
                <h2 className="card-title pb-2">{props.title}</h2>
                <p>{props.description}</p>
                <div className="card-actions justify-end">
                    {
                        props.versions?.map((version: { color: { id: number, name: string } }) => (
                            <div key={version.color.id} className="badge badge-outline">{version.color.name}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}