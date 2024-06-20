
/* import Head from 'next/head'; */

import Container from '@/components/container';
import Image from "next/image";
import Link from "next/link";

 async function sharedMetaData({ articleData}) {
  

  return {
    // enable this for resolving opengraph image
    // metadataBase: new URL(settings.url),
    title: {
      default:
        articleData.titulo 
    },
    description:
      settings?.description ,
  
    authors:articleData.auto,
    openGraph: {
      images: [
        {
          url:
          articleData.img,
          width: 800,
          height: 600
        }
      ]
    },
    twitter: {
      title:  articleData.titulo
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export async function generateMetadata({ params }) {
  return await sharedMetaData(params);
}  

export default function ArticlePage({ articleData }) {

  return (
    <>
      
      <Container className="!pt-0">
        <div className="mx-auto max-w-screen-md ">
          <div className="flex justify-center">

          </div>

          <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
            {articleData.titulo}
          </h1>

          <div className="mt-3 flex justify-center space-x-3 text-gray-500 ">
            <div className="flex items-center gap-3">

              <div>

                <div className="flex items-center space-x-2 text-sm">
                  <time
                    className="text-gray-500 dark:text-gray-400"
                    dateTime={articleData.fecha}>

                  </time>

                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
        {articleData.urlVideo ? (
          <video controls style={{ with: '100%', height: 'auto' }} >
            <source src={articleData.urlVideo} />
            Tu navegador no soporta el elemento de video.
          </video>
        ) : (
          <Image
            src={articleData.img}
            alt={articleData.title}
            loading="eager"
            fill
            sizes="800vw"

          />
        )}
      </div>

      <Container>
        <article className="mx-auto max-w-screen-md ">
          <div className="prose mx-auto my-3 dark:prose-invert prose-a:text-blue-600">
            {articleData.contenido}
            <div className='my-3'>
              <div className='d-block'>fecha: {new Date(articleData.fecha).toLocaleDateString('es-CR', { day: '2-digit', month: '2-digit', year: '2-digit' })}</div>
              <div className='d-block'>Autor: {articleData.autor}</div>
            </div>
          </div>
          <div className="mb-7 mt-7 flex justify-center">

            <Link
              href="/"
              className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500 ">
              ← Ver todo los Post
            </Link>
          </div>


        </article>
      </Container>

    </>
  )

}