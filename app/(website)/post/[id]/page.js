'use client'
import Image from "next/image";
import Link from "next/link";
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { getArticleById } from '@/lib/firebase/articles.services';
import { useParams } from 'next/navigation'
import Container from "@/components/container";


export default function ArticlePage() {
  const [article, setArticle] = useState({});
  /*  const router = useRouter(); */
  let data = useParams()

  useEffect(() => {

    if (data) {
      getArticleById(data.id).then(articleData => {
        // Verifica los datos del artículo
        setArticle(articleData);
      });


    }
  }, [setArticle]);

 




  return (

    <> 
        <Head>
        <title>{article.title}</title>
        <meta name="description" content={article.titulo} />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={article.titulo} />
        <meta property="og:description" content={article.titulo} />
        <meta property="og:image" content={article.img} />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={article.titulo} />
        <meta property="twitter:description" content={article.titulo} />
        <meta property="twitter:image" content={article.img} />
      </Head>
      <Container className="!pt-0">
        <div className="mx-auto max-w-screen-md ">
          <div className="flex justify-center">
            {/*  <CategoryLabel categories={post.categories} /> */}
          </div>

          <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
            {article.title}
          </h1>

          <div className="mt-3 flex justify-center space-x-3 text-gray-500 ">
            <div className="flex items-center gap-3">
              {/*   <div className="relative h-10 w-10 flex-shrink-0">
              {AuthorimageProps && (
                <Link href={`/author/${post.author.slug.current}`}>
                  <Image
                    src={AuthorimageProps.src}
                    alt={post?.author?.name}
                    className="rounded-full object-cover"
                    fill
                    sizes="40px"
                  />
                </Link>
              )}
            </div> */}
              <div>
                {/*  <p className="text-gray-800 dark:text-gray-400">
                <Link href={`/author/${post.author.slug.current}`}>
                  {post.author.name}
                </Link>
              </p> */}
                <div className="flex items-center space-x-2 text-sm">
                  <time
                    className="text-gray-500 dark:text-gray-400"
                    dateTime={article.fecha}>

                  </time>
                  {/*  <span>· {post.estReadingTime || "5"} min read</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
        {article.urlVideo ? (
          <video controls style={{ with: '100%', height: 'auto' }} >
            <source src={article.urlVideo} />
            Tu navegador no soporta el elemento de video.
          </video>
        ) : (
          <Image
            src={article.img}
            alt={article.title}
            loading="eager"
            fill
            sizes="800vw"

          />
        )}
      </div>

      <Container>
        <article className="mx-auto max-w-screen-md ">
          <div className="prose mx-auto my-3 dark:prose-invert prose-a:text-blue-600">
            {article.contenido}
            <div className='my-3'>
              <div className='d-block'>fecha: {new Date(article.fecha).toLocaleDateString('es-CR', { day: '2-digit', month: '2-digit', year: '2-digit' })}</div>
              <div className='d-block'>Autor: {article.autor}</div>
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
  );
}
