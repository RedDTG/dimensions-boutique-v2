import { NextPage } from "next";
import Head from "next/head";
import useSWR from 'swr';

import { ProductCard } from '@/components/product'

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ProductsIndex: NextPage = () => {
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
            <main>
                <div className='w-full py-28'>
                    <h1 className='text-5xl font-bold text-center pb-20'>Tous les produits</h1>

                    <p className='mx-10 md:mx-32 lg:mx-56 text-center'>
                        Bienvenue dans la section où vous trouverez notre sélection complète de produits dérivés de Dimensions. Nous avons tout ce dont vous avez besoin pour afficher fièrement votre amour pour notre communauté, de t-shirts en passant par les accessoires. Parcourez notre collection complète et trouvez les articles qui correspondent le mieux à votre style et à votre personnalité.
                    </p>
                </div>
                <div className="w-full flex justify-center flex-col pb-36 gap-10">

                    <div className='flex justify-center flex-row flex-wrap gap-5'>
                        {dataProducts.map((product: any) => (
                            <ProductCard key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </>

    );
}

export default ProductsIndex;