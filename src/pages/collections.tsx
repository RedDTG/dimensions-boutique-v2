import { NextPage } from "next";
import Head from "next/head";
import useSWR from 'swr';

import Link from "next/link";
import { Collection } from "@/components/collection";


const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Collections: NextPage = () => {
    const { data: dataCollections, error: errorCollections } = useSWR('/api/collection', fetcher);

    if (errorCollections) return <div>Failed to load</div>;

    if (!dataCollections) return <div>Loading...</div>;
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
                    <h1 className='text-5xl font-bold text-center pb-20'>Nos collections</h1>

                    <p className='mx-56 text-center'>
                        Découvrez nos collections Dimensions ! Chacune est unique en son genre et inspirée des thèmes les plus populaires de notre serveur Discord. Choisissez votre collection préférée et assortissez vos produits avec vos amis pour montrer votre appartenance ensemble. Rejoignez la communauté Dimensions et affichez votre passion avec élégance.
                    </p>
                </div>
                <div className="w-full flex justify-center flex-col pb-36 gap-10">

                    {                        
                        dataCollections.map((collection: any) => (
                            <Collection key={collection.id} name={collection.name} description={collection.description} products={collection.products} />
                        ))
                    }

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

export default Collections;