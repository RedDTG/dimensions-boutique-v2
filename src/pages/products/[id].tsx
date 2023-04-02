import { NextPage } from "next";
import Head from "next/head";
import useSWR from 'swr';
import Image from "next/image";

import { useRouter } from "next/router";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ProductsIndex: NextPage = () => {

    const router = useRouter()
    const { id } = router.query

    const { data: dataProduct, error: errorProduct } = useSWR('/api/product/' + id?.toString(), fetcher);

    if (errorProduct) return <div>Failed to load</div>;

    if (!dataProduct) return <div>Loading...</div>;
    return (
        <>
            <Head>
                <title>Boutique Dimensions</title>
                <meta name="description" content="La boutique officielle du serveur Discord Dimensions" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='mt-20'>
                <div className="flex flex-row py-20">
                    <figure className="max-w-xl"><Image src={"/images/products/" + dataProduct.image} width={1000} height={1000} alt={dataProduct.title} unoptimized={true} className='w-full rounded-xl' /></figure>

                    <div className="divider divider-horizontal my-24"></div>
                    <div className="flex flex-col items-center flex-1 gap-10">
                        <h2 className="font-bold text-4xl">{dataProduct.title}</h2>
                        <p className="w-3/4 text-center">{dataProduct.description}</p>
                        <div className="flex flex-col w-3/5 items-center">
                            <div className="divider">Tailles</div>
                            <div className="flex gap-3">
                                <kbd className="kbd">XXS</kbd>
                                <kbd className="kbd">XS</kbd>
                                <kbd className="kbd">S</kbd>
                                <kbd className="kbd">M</kbd>
                                <kbd className="kbd">L</kbd>
                                <kbd className="kbd">XL</kbd>
                                <kbd className="kbd">XXL</kbd>
                                <kbd className="kbd">3XL</kbd>
                                <kbd className="kbd">4XL</kbd>
                            </div>
                        </div>
                        <div className="flex flex-col w-3/5 items-center">
                            <div className="divider">Couleurs</div>
                            <div className="flex gap-3">
                                {/* <div>
                                    <input type="radio" name="radio-8" className="radio radio-error" checked />
                                    <input type="radio" name="radio-8" className="radio radio-error" checked />
                                    <input type="radio" name="radio-8" className="radio radio-error" checked />
                                    <input type="radio" name="radio-8" className="radio radio-error" checked />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default ProductsIndex;