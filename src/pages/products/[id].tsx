import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export const getServerSideProps = async (context: any) => {

    try {
        const res = await fetch(process.env.BASE_URL + `/api/product/` + context.query.id?.toString())
        const data: Product = await res.json()

        if (!data) {
            throw "No data"
        }

        return { props: data }

    } catch (error) {
        return { redirect: { permanent: false, destination: "/" } }
    }

}

type ProductsIndexProps = InferGetServerSidePropsType<typeof getServerSideProps>

const ProductsIndex: NextPage<ProductsIndexProps> = (props) => {

    const dataProduct = props

    const [version, setVersion] = useState(props.versions[0]);

    // console.log(dataProduct.versions.find((version) => version === color)?.image);

    const onVersionChange = (e: any) => {
        const version = dataProduct.versions.find((version) => version.color.id === parseInt(e.target.value));

        if (version) {
            setVersion(version);
        }
    }

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
                    <figure className="max-w-xl"><Image src={"/images/products/" + version.image} width={1000} height={1000} alt={dataProduct.title} unoptimized={true} className='w-full rounded-xl' /></figure>

                    <div className="divider divider-horizontal my-24"></div>
                    <div className="flex flex-col items-center flex-1 gap-16">
                        <div className="flex flex-col gap-10 items-center w-full">
                            <h2 className="font-bold text-4xl">{dataProduct.title}</h2>
                            <p className="w-3/4 text-center">{dataProduct.description}</p>
                        </div>
                        <div className="flex flex-row w-full px-20 justify-center gap-16">
                            <div className="flex flex-col gap-14 flex-1 flex-grow max-w-lg">
                                <div className="flex flex-col items-center">
                                    <div className="divider mx-16">Tailles</div>
                                    <div className="flex gap-3 flex-wrap justify-center">
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
                                <div className="flex flex-col items-center">
                                    <div className="divider mx-16">Couleurs</div>
                                    <div className="flex gap-3 flex-col justify-center">
                                        <div className="flex flex-row items-center gap-5">
                                            {
                                                dataProduct.versions.map((v, index) => {
                                                    return (
                                                        <input key={index} type="radio" name="radio-8" className="radio radio-lg checked:border-blue-400 border-2"
                                                            id={v.color.id.toString()}
                                                            value={v.color.id}
                                                            onChange={onVersionChange}
                                                            checked={v.color.id === version.color.id}
                                                            style={{ backgroundColor: v.color.hex }}
                                                        />
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="divider divider-horizontal"></div>
                            <div className="flex flex-col items-center justify-center flex-1 flex-grow w-full gap-14  max-w-lg">
                                <div className="flex flex-col items-center gap-16 w-full">
                                    <div className="flex flex-col items-center gap-5 w-full">
                                        <div className="divider mx-16">Commander</div>
                                        <h2 className="font-bold text-3xl">{version.price}€</h2>
                                    </div>
                                    <div className="flex flex-col gap-16">
                                        <div className="flex flex-row gap-5 items-center">
                                            <p className="text-center">Couleur : <b>{version.color.name}</b></p>
                                            <select className="select select-bordered max-w-xs">
                                                <option disabled selected>Taille</option>
                                                <option>XXS</option>
                                                <option>XS</option>
                                                <option>S</option>
                                                <option>M</option>
                                                <option>L</option>
                                                <option>XL</option>
                                                <option>XXL</option>
                                                <option>3XL</option>
                                                <option>4XL</option>
                                            </select>
                                        </div>
                                        <button className="btn btn-primary">Ajouter au panier</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
}

export default ProductsIndex;