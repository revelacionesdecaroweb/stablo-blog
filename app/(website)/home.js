"use client"
import Link from "next/link";
import Head from "next/head";
import Container from "@/components/container";
import Image from "next/image"; // Agrega esta importación
import { useState, useEffect } from 'react';
import { getLastArticles } from "@/lib/firebase/articles.services";
import { cx } from "@/utils/all";
export default function Post() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const fetchedArticles = await getLastArticles();
        setArticles(fetchedArticles);
      } catch (error) {
        console.error('Error al obtener los artículos:', error);
      }
    };
    fetchArticles();
  }, []);
  const articless = articles
  const fontSize = "large";
  const fontWeight = "normal"
  return (
    
    <>
         <head>
          <meta name="title" conten='Revelaciones de Caro' />
          <meta name="description" conten='Blog de Astrología y Filosofía' />
        </head>
      <Container>
      
        <>
          <div className='mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 lg-gap-10'>
            {articless.map((article) => (
              <div
                key={article.id}
                className={cx(
                  "group cursor-pointer",
                )}>
                <div
                  className={cx(
                    " overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800"
                  )}>
                  <Link
                    className={cx(
                      "relative block aspect-square",
                    )}
                   href={`/post/${article.id}`}>
                    <Image
                      src={article.img}
                      alt={article.titulo || "Thumbnail"}
                      className="object-cover transition-all"
                      fill
                      sizes="(max-width: 768px) 30vw, 33vw"
                    />
                    

                  </Link>
                </div>

                <h2
                  className={cx(
                    fontSize === "large" ? "text-2xl"
                      : minimal
                        ? "text-3xl"
                        : "text-lg",
                    fontWeight === "semibold leading-snug"
                      ? "line-clamp-2 font-medium  tracking-normal text-black"
                      : "font-semibold leading-snug tracking-tight",
                    "mt-2    dark:text-white"
                  )}>
                  <Link href={`/post/${article.id}`}>
                    <span
                      className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom
                    bg-no-repeat
                    transition-[background-size]
                    duration-500
                    hover:bg-[length:100%_3px]
                    group-hover:bg-[length:100%_10px]
                    dark:from-purple-800 dark:to-purple-900">
                      {article.titulo}
                    </span>
                  </Link>
                </h2>
              </div>
            ))}
          </div>
        </>
      </Container>
      <div className="mt-10 flex justify-center">
        <Link
          href="/archive"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
          <span>Ver más post</span>
        </Link>
      </div>
    </>
  );
}