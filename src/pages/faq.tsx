import Head from 'next/head'
import Link from 'next/link'

export default function Faq() {

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
                    <h1 className='text-5xl font-bold text-center pb-24'>Foire aux questions</h1>

                    <div className='mx-72 text-center'>
                        <div className='font-bold text-lg'>Qu&apos;est-ce que c&apos;est ?</div>
                        Sur ce site, vous trouverez des goodies en lien avec notre serveur Discord, ainsi que des moyens pour les acheter. Tous les designs ont été créés par des membres de ce serveur, et la confection des produits est réalisée par des fabricants tiers proposant des options de personnalisation. Nous ne fabriquons pas nous-mêmes les produits. Plus d&apos;informations sur la page <Link href={'/conception'} className='link'>Conception</Link>.
                        <br />
                        <br />
                        <br />
                        <div className='font-bold text-lg'>Comment ça marche ?</div>
                        Pour commander nos produits, vous pouvez envoyer le montant total de votre commande à notre Paypal (présent sur chaque page de produit) en renseignant les informations suivantes :
                        <br />
                        <br />
                        <div className='flex flex-col items-center gap-2'>
                            <ul className='list-disc list-outside text-left flex flex-col gap-1'>
                                <li>Votre pseudo Discord</li>
                                <li>Les produits que vous souhaitez</li>
                                <li>Les tailles de chaque produit</li>
                                <li>Les coloris de chaque produit</li>
                                <li>Le sexe pour chaque produit (H ou F)</li>
                            </ul>
                        </div>
                        <br />
                        <br />
                        <div className='font-bold text-lg'>Où va l&apos;argent ?</div>
                        Dimensions n&apos;est pas enregistrée en tant qu&apos;association ou tout autre organisme similaire. L&apos;argent généré par ces ventes servira UNIQUEMENT à financer notre événement annuel : le &ldquo;Meet Up&ldquo;. Il s&apos;agit d&apos;une rencontre qui se déroule une fois par an, en été, et qui invite tous les membres de notre serveur, actifs ou non, à se réunir pendant une semaine dans un endroit défini. Comprenez que ce genre d&apos;événement est coûteux, c&apos;est pourquoi nous proposons aux membres un moyen de participer à son financement tout en recevant une contrepartie physique. Plus d&apos;informations sur la page <Link href={'/benefices'} className='link'>Bénéfices</Link>.
                        <br />
                        <br />
                        <br />
                        <div className='font-bold text-lg'>Comment obtenir sa commande ?</div>
                        Afin de proposer les produits au meilleur prix tout en faisant une marge, nous les commandons groupés à nos fabricants et les récupérons directement à leurs entrepôts lorsque cela est possible. Nous remettons les articles uniquement en main propre. Par exemple, lors du &ldquo;Meet Up&ldquo;, nous pouvons vous fournir vos commandes directement ou les remettre à une personne de votre connaissance qui pourra vous les transmettre. Comprenez que cette contrainte est nécessaire pour vous proposer des produits à des prix raisonnables. Si vous ne pouvez pas récupérer votre commande pour une raison quelconque, veuillez contacter un administrateur afin qu&apos;il puisse l&apos;expédier. Veuillez noter que des frais supplémentaires peuvent s&apos;appliquer.
                        <br />
                        <br />
                        <br />
                        <div className='font-bold text-lg'>Comment me faire rembourser ?</div>
                        Nous ne sommes pas en mesure de rembourser votre commande. Veuillez prendre le temps de lire et d&apos;appliquer les instructions lors de votre commande et de vérifier soigneusement les produits sélectionnés pour éviter toute erreur.
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className='text-xl font-bold'>Pour toute autre question, n&apos;hesitez pas à contacter un administrateur du serveur Dimensions via le serveur Discord !</div>
                    </div>
                </div>

            </main>
        </>
    )
}
