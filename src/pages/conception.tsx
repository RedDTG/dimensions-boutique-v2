import Head from 'next/head'
import Link from 'next/link'

export default function Conception() {

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
                    <h1 className='text-5xl font-bold text-center pb-24'>Conception de nos T-shirts</h1>

                    <div className='mx-10 md:mx-32 lg:mx-56 text-center'>
                        Nous sommes fiers de proposer des designs uniques et authentiques créés par des artistes talentueux de notre communauté. Nous croyons en l&apos;importance de soutenir les artistes locaux et de mettre en valeur leur travail exceptionnel. C&apos;est pourquoi nous collaborons avec des créateurs passionnés qui partagent notre vision artistique. Vous pouvez retrouver la liste des artistes avec lesquels nous travaillons sur <Link href={'/artistes'} className='link'>notre page dédiée</Link>.
                        <br />
                        <br />
                        <br />
                        Pour donner vie à nos designs, nous nous fournissons chez <Link href={'https://mistertee.fr/'} className='link'>mistertee.fr</Link>, un fabricant français de renom spécialisé dans les t-shirts. Nous avons sélectionné avec soin leur modèle de t-shirt personnalisé épais, le Sol’s Imperial. Ce t-shirt fait partie d&apos;une gamme intermédiaire, offrant un confort et une résistance supérieures, le tout à un prix abordable.
                        <br />
                        <br />
                        <br />
                        Le Sol’s Imperial présente un col rond simple et des manches courtes, en faisant un basique essentiel doté d&apos;une coupe classique indémodable. Sa polyvalence et sa durabilité en font un choix idéal pour type d&apos;utilisateurs.
                        <br />
                        <br />
                        <br />
                        <div className='flex flex-col items-center gap-2'>
                            <p className='font-semibold text-lg'>Voici quelques caractéristiques clés des T-shirts Sol’s Imperial :</p>
                            <br />
                            <ul className='list-disc list-outside text-left flex flex-col gap-1'>
                                <li>100% coton semi-peigné Ringspun*, offrant un toucher doux et un excellent résultat d&apos;impression.</li>
                                <li>Maille Jersey, grammage 190g/m2, offrant à la fois souplesse et résistance</li>
                                <li>Coupe tubulaire, sans coutures sur les flancs, pour un ajustement parfait</li>
                                <li>Manches courtes pour une liberté de mouvement optimale</li>
                                <li>Col rond avec bord côte élasthanne pour un confort accru</li>
                                <li>Double surpiqûre à l&apos;encolure, aux bas des manches et à la base du t-shirt, assurant une qualité durable</li>
                            </ul>
                            <br />
                            <i>*sauf les coloris chinés auxquels sont ajoutés du polyester pour créer l’effet texturé.</i>
                        </div>
                        <br />
                        <br />
                        Nous nous engageons à vous offrir des produits de qualité, tout en tenant compte de l&apos;impact environnemental et des conditions de travail éthiques. C&apos;est pourquoi nous sommes fiers de proposer une marque comme Sol’s, une marque française qui se démarque par ses produits basiques et incontournables à prix raisonnables. Sol’s possède également la certification Oeko-Tex pour la totalité de ses produits, garantissant ainsi leur innocuité pour la santé et l&apos;environnement. De plus, en tant que membre de la Fair Wear Foundation depuis 2014, Sol’s s&apos;engage à faire respecter un code de conditions de travail éthiques à tous ses partenaires de production et de logistique.
                    </div>
                </div>
            </main>
        </>
    )
}
