import { NextPage } from "next";
import Head from "next/head";
import useSWR from 'swr';
import Image from "next/image";


import Link from "next/link";
import { Artist } from "@/models/artist";


const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Artists: NextPage = () => {
    const { data: dataArtists, error: errorArtists } = useSWR('/api/artist', fetcher);

    if (errorArtists) return <div>Failed to load</div>;

    if (!dataArtists) return <div>Loading...</div>;

    dataArtists.sort((a: { id: number; }, b: { id: number; }) => (a.id > b.id) ? -1 : 1)
    
    return (
        <>
            <Head>
                <title>Boutique Dimensions</title>
                <meta name="description" content="La boutique officielle du serveur Discord Dimensions" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='mt-20  mx-10'>
                <div className='w-full py-20'>
                    <h1 className='text-5xl font-bold text-center pb-10'>Nos artistes</h1>

                    <p className='mx-40 text-center'>
                        Découvrez les profils talentueux des artistes qui ont collaboré avec passion pour créer les produits de cette boutique. On les remercie évidemment encore une fois pour leur patience, leur créativité et le temps qu&apos;ils ont accordé à élaborer ces magnifiques designs. N&apos;hésitez pas aller faire un tour sur leurs réseaux réspectifs !
                    </p>
                </div>
                <div className="w-full flex justify-center flex-row gap-16 gap-y-8 pb-32 flex-wrap">

                    {
                        dataArtists.map((artist: Artist) => (
                            <div key={artist.id} className="card lg:card-side w-1/2 max-w-xl h-1/6 bg-base-100 shadow-xl border-2 border-base-300">
                                <figure className="h-full"><Image src={"/images/artists/" + artist.image} width={1000} height={1000} alt={artist.image} className='rounded-l-xl w-32 h-32' /></figure>
                                <div className="card-body p-3 text-center items-center w-1/2">
                                    <h2 className="card-title">{artist.pseudo}</h2>
                                    <p  className="italic">&quot;{artist.bio}&quot;</p>
                                    <div className="card-actions justify-center flex flex-row gap-4">
                                        { artist.website ? <Link href={artist.website}><Image src={"/images/networks/website.png"} width={25} height={25} alt={"Website"} /></Link> : null }
                                        { artist.instagram ? <Link href={artist.instagram}><Image src={"/images/networks/instagram.webp"} width={25} height={25} alt={"Instagram"} /></Link> : null }
                                        { artist.twitter ? <Link href={artist.twitter}><Image src={"/images/networks/twitter.webp"} width={25} height={25} alt={"Twitter"} /></Link> : null }
                                        { artist.youtube ? <Link href={artist.youtube}><Image src={"/images/networks/youtube.png"} width={25} height={25} alt={"Youtube"} /></Link> : null }
                                        { artist.twitch ? <Link href={artist.twitch}><Image src={"/images/networks/twitch.png"} width={25} height={25} alt={"Twitch"} /></Link> : null }
                                        { artist.facebook ? <Link href={artist.facebook}><Image src={"/images/networks/facebook.webp"} width={25} height={25} alt={"Facebook"} /></Link> : null }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </main>
        </>

    );
}

export default Artists;