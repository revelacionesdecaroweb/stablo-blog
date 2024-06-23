
import Container from '@/components/container';
import Image from "next/image";
import Link from "next/link";

 
import Head from 'next/head';

import  {Metadata}  from 'next'
 
export const  metadata = {
  title: '',
  description: ''
}
 



export default function ArticlePage({ articleData }) {
  
  metadata.title = articleData.titulo;
  metadata.description = articleData.titulo;
 
  return (
    <>
       <head>
        <title>{articleData.title}</title>
        <meta name="description" content={articleData.titulo} />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={articleData.titulo} />
        <meta property="og:description" content={articleData.titulo} />
        <meta property="og:image" content={articleData.img} />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={articleData.titulo} />
        <meta property="twitter:description" content={articleData.titulo} />
        <meta property="twitter:image" content={articleData.img} />
      </head>
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
            alt={articleData.titulo}
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