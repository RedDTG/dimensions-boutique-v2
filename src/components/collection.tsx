import Image from "next/image";
import { ProductCard } from '@/components/product'


type CollectionProps = {
    name: string,
    description: string,
    products: any[]
}

export const Collection: React.FC<CollectionProps> = (props) => {
    return (
        <div className="pb-20 flex flex-col gap-10">
            <div className="flex flex-col gap-6">
                <div className="flex justify-center">
                    <div className="sm:divider sm:w-3/4"><h2 className='text-3xl font-bold w-full text-center'>{props.name}</h2></div>
                </div>

                <p className='text-center'>
                    {props.description}
                </p>
            </div>


            <div className='flex justify-center flex-row flex-wrap gap-5'>
                {props.products.map((product: any) => (
                    <ProductCard key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
}