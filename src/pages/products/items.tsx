import { NextPage } from "next";
import Head from "next/head";
import useSWR from 'swr';

import { ProductCard } from '@/components/product'
import Link from "next/link";


const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Items: NextPage = () => {
    const { data: dataProducts, error: errorProducts } = useSWR('/api/product', fetcher);

    if (errorProducts) return <div>Failed to load</div>;

    if (!dataProducts) return <div>Loading...</div>;
    return (
        <>
            <Head>
                <title>Boutique Dimensions</title>
                <meta name="description" content="La boutique officielle du serveur Discord Dimensions" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='mt-20'>
                <div className='w-full py-28'>
                    <h1 className='text-5xl font-bold text-center pb-20'>Les accessoires</h1>

                    <p className='mx-56 text-center'>
                        Ajoutez une touche de style à votre look avec notre sélection d&apos;accessoires Dimensions. De notre gamme de pins et de stickers aux mugs élégants et pratiques, nos accessoires sont conçus pour les fans les plus dévoués. Parcourez notre sélection d&apos;accessoires et trouvez les articles qui correspondent le mieux à votre style et à votre personnalité.
                    </p>
                </div>
                <div className="w-full flex justify-center flex-col pb-36 gap-10">

                    <div className='flex justify-center flex-row flex-wrap gap-5'>
                        {dataProducts.map((product: any) => (
                            product.type.id == 2 &&
                            <ProductCard key={product.id}
                                product={product}
                            />
                        ))}
                    </div>

                    <div className='w-full flex justify-center'>
                        <Link href={"/products"}>
                            <button className="btn gap-2 max-w-fit">
                                Autres produits
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="white" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </main>
        </>

    );
}

export default Items;