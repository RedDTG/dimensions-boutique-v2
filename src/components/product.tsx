import Image from "next/image";

type ProductCardProps = {
    title: string,
    description: string,
    imgUrl: string,
    colors?: { id: number, name: string }[]
}

export const ProductCard: React.FC<ProductCardProps> = (props) => {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl border-2 border-base-300">
            <figure><Image src={props.imgUrl} width={2000} height={1000} alt={props.title} className='w-full rounded-xl' /></figure>
            <div data-theme="dark" className="card card-body absolute opacity-0 hover:opacity-100 hover:bg-opacity-90 h-full w-full bg-base-200 text-gray-200">
                <h2 className="card-title">{props.title}</h2>
                <p>{props.description}</p>
                <div className="card-actions justify-end">
                    {
                        props.colors?.map((color: { id: number, name: string }) => (
                            <div key={color.id} className="badge badge-outline">{color.name}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}