import Head from 'next/head'
import Link from 'next/link'

export default function Apropos() {

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
                    <h1 className='text-5xl font-bold text-center pb-24'>A propos de nous</h1>

                    <div className='mx-56 text-center'>
                        Bienvenue sur la boutique de Dimensions, une communauté dynamique et passionnée qui s&apos;est rencontrée sur un serveur Discord éponyme en 2018. Depuis lors, notre communauté n&apos;a cessé de grandir pour rassembler plus de 200 membres, dont une cinquantaine de personnes investies.
                        <br />
                        <br />
                        <br />
                        L&apos;identité de notre serveur est ancrée dans l&apos;univers de l&apos;espace, un vaste territoire d&apos;exploration où chacun est libre de laisser sa marque. À travers des salons textuels et vocaux spécifiques, regroupés en dimensions, nous créons un espace unique pour nos membres. Ces dimensions représentent différentes catégories thématiques qui encouragent l&apos;interaction et l&apos;échange.
                        <br />
                        <br />
                        <br />
                        Chaque jour, notre communauté écrit son histoire en se rassemblant pour jouer ensemble, discuter de sujets variés, partager des projets artistiques et ludiques, et bien plus encore. Notre diversité de talents et d&apos;intérêts crée une mosaïque vivante où chacun trouve sa place.
                        <br />
                        <br />
                        <br />
                        Au cœur de notre communauté se trouve notre événement annuel tant attendu, le &ldquo;Meet Up&ldquo;. Ce rendez-vous incontournable est l&apos;occasion pour tous les membres, actifs ou non, de se retrouver pendant une semaine dans un lieu défini. C&apos;est une opportunité unique de renforcer les liens que nous avons tissés en ligne et de partager des moments inoubliables ensemble. Pour financer cet événement, nous utilisons les bénéfices générés par les ventes de nos t-shirts personnalisés. Ainsi, chaque membre peut participer au financement du &ldquo;Meet Up&ldquo; tout en recevant une contrepartie physique. Vous pouvez retrouver plus d&apos;informations sur la page des <Link href={'/benefices'} className='link'>bénéfices</Link>.
                        <br />
                        <br />
                        <br />
                        Notre communauté est plus qu&apos;un simple regroupement de personnes partageant des intérêts communs, nous formons un véritable collectif, unie par nos passions communes et notre désir de créer un espace inclusif, inspirant et amusant. Que vous soyez un artiste talentueux, un joueur passionné, un esprit curieux ou simplement à la recherche d&apos;une communauté chaleureuse, vous êtes le bienvenu parmi nous.
                        <br />
                        <br />
                        <br />
                        <Link className='link text-lg' href={'https://discord.com/invite/tbT7q2U'}>Venez vous aussi écrire votre histoire, partager vos idées et forger des amitiés durables.</Link>
                    </div>
                </div>

            </main>
        </>
    )
}
