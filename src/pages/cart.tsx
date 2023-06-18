import { Product } from '@/models/product';
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'


export default function Cart() {

    const [cart, setCart] = useState<Product[]>([]);

    const key = 'cart';

    useEffect(() => {
        const cart: Product[] = JSON.parse(localStorage.getItem(key) || '{}');
        setCart(cart);
    }, [])

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(cart));
    }, [key, cart]);

    return (
        <>
            <Head>
                <title>Boutique Dimensions</title>
                <meta name="description" content="La boutique officielle du serveur Discord Dimensions" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='mt-20'>

                <div className="w-full flex justify-center flex-col pb-36">

                    <div className='w-full pt-20'>
                        <h1 className='text-5xl font-bold text-center pb-20'>Votre panier</h1>
                    </div>

                    <div className="overflow-x-auto w-full px-20">
                        <table className="table w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>
                                        {/* <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label> */}
                                    </th>
                                    <th>Produit</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((product: Product, index) => (
                                    <>
                                        <tr key={index}>
                                            <th>
                                                {/* <label>
                                                    <input type="checkbox" className="checkbox" />
                                                </label> */}
                                                1
                                            </th>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <figure><Image src={"/images/products/" + product.image} width={1799} height={1799} alt={product.title} className='w-full rounded-xl' /></figure>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{product.title}</div>
                                                        <div className="text-sm opacity-50">{product.versions[1].color.name}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                Zemlak, Daniel and Leannon
                                                <br />
                                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                            </td>
                                            <td>{product.size}</td>
                                            <th>
                                                <button className="btn btn-ghost btn-xs">details</button>
                                            </th>
                                        </tr>
                                    </>
                                ))}
                            </tbody>

                        </table>
                    </div>
                </div>
            </main>
        </>
    )
}
