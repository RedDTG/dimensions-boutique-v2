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
            <main>
                <div className='w-full py-28'>
                    <h1 className='text-5xl font-bold text-center pb-20'>Les sweats à capuche</h1>

                    <p className='mmx-10 md:mx-32 lg:mx-56 text-center'>
                        Restez au chaud lors des longues soirées de gaming avec nos sweats à capuche Dimensions. Designés avec amour, nos sweats à capuche sont confortables et durables, parfaits pour tous les fans qui veulent rester à l&apos;aise tout en représentant leur serveur Discord préféré.
                    </p>
                </div>
                <div className="w-full flex justify-center flex-col pb-36 gap-10">

                    <div className='flex justify-center flex-row flex-wrap gap-5'>
                        {dataProducts.map((product: any) => (
                            product.type.id == 1 &&
                            <ProductCard key={product.id}
                                product={product}
                            />
                        ))}
                    </div>

                    <div className='w-full flex justify-center'>
                        <Link passHref href={"/products"}>
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