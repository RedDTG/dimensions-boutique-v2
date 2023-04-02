import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import useSWR from 'swr';

import { ProductCard } from '@/components/product'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {

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
      <main className='mt-20'>
        {/* <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <Image src={Img1} alt="logo" placeholder='blur' className='w-full'/>
          </div>
          <div id="item2" className="carousel-item w-full">
            <Image src={Img2} alt="logo" placeholder='blur' className='w-full'/>
          </div>
          <div id="item3" className="carousel-item w-full">
            <Image src={Img3} alt="logo" placeholder='blur' className='w-full'/>
          </div>
          <div id="item4" className="carousel-item w-full">
            <Image src={Img4} alt="logo" placeholder='blur' className='w-full'/>
          </div>
          <div className="absolute flex justify-center w-full py-2 gap-2 bottom-16">
            <a href="#item1" className="btn btn-xs">1</a>
            <a href="#item2" className="btn btn-xs">2</a>
            <a href="#item3" className="btn btn-xs">3</a>
            <a href="#item4" className="btn btn-xs">4</a>
          </div>
        </div> */}

        <Image src="/images/TshirtBg.jpg" width={8000} height={2700} alt="T-shirt background" className='w-full' />

        <div className='w-full py-28'>
          <h1 className='text-5xl font-bold text-center pb-24'>Dimensions - Boutique officielle</h1>

          <p className='mx-56 text-center'>
            Bienvenue dans la boutique en ligne Dimensions, où nous avons rassemblé pour vous les meilleurs produits dérivés de votre serveur Discord préféré !
            Si vous êtes un(e) passionné(e) de Dimensions, vous allez adorer notre sélection de vêtements, d&apos;accessoires, de mugs, de pins et de stickers, conçus pour satisfaire les plus exigeants d&apos;entre vous.
            <br />
            <br />
            Notre gamme de produits est conçue pour tous les styles et toutes les occasions, que vous cherchiez un sweat à capuche pour rester au chaud lors des soirées de gaming, un t-shirt pour afficher fièrement votre appartenance à Dimensions, ou encore un mug pour prendre votre café ou thé avec style.
            Nous avons également une sélection d&apos;accessoires pour les fans les plus dévoués, tels que des pins et des stickers pour personnaliser votre ordinateur portable, votre sac à dos ou même votre vélo.
            <br />
            <br />
            Sur Dimensions, nous sommes fiers de notre communauté passionnée et dévouée, et nous voulons que vous puissiez afficher votre appartenance à cette communauté partout où vous allez.
            C&apos;est pourquoi nous avons créé cette boutique en ligne, afin de vous offrir les meilleurs produits dérivés, tout en soutenant le développement et la croissance de notre serveur Discord car tous les bénéfices serviront à l&apos;organisation de notre évènement de rencontre annuelle.
            <br />
            <br />
            Alors n&apos;attendez plus et parcourez notre boutique en ligne pour trouver les articles qui correspondent le mieux à votre style et à votre personnalité et devenez dès maintenant un membre à part entière de la communauté Dimensions !
          </p>
        </div>

        <div className="w-full flex justify-center flex-col gap-10">

          <div className="divider"><h2 className='text-3xl font-bold w-full text-center'>Nouveautés 2023</h2></div>

          <div className='flex justify-center flex-row flex-wrap gap-5'>
            {dataProducts.map((product: any) => (
              product.isNew &&
              <ProductCard key={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
                versions={product.versions}
              />
            ))}
          </div>

          <div className='w-full flex justify-center'>
            <Link href={'/news'}>
              <button className="btn gap-2 max-w-fit">
                Plus
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="white" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full flex justify-center flex-col pt-28 pb-36 gap-10">

          <div className="divider"><h2 className='text-3xl font-bold w-full text-center'>Les Classiques</h2></div>

          <div className='flex justify-center flex-row flex-wrap gap-5'>
            {dataProducts.map((product: any) => (
              product.isPopular &&
              <ProductCard key={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
                versions={product.versions}
              />
            ))}
          </div>

          <div className='w-full flex justify-center'>
            <Link href={"/products"}>
              <button className="btn gap-2 max-w-fit">
                Plus
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="white" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
              </button>
            </Link>
          </div>
        </div>

      </main>
    </>
  )
}
