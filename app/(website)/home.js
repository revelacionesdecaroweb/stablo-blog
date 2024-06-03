"use client"
import Link from "next/link";
import Container from "@/components/container";
import Image from "next/image"; // Agrega esta importación
import { useState, useEffect } from 'react';
import { getLastArticles } from "@/lib/firebase/articles.services";

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

  const articless = articles;

  return (
    <>
       <Container>

<div className='mt-10 flex flex-col items-center'>

  <div className='grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 mb-auto w-full'>

    {articless.map((article) => (
      <Link href={`/author`}>
        <div key={article.id} className='flex flex-col overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800'>
          <h2>article.titulo</h2>
          <div className='flex-grow'>
            <Image src={article.img}

              layout='responsive'
              width={200} height={100}
              objectFit='cover'
              alt={article.titulo} />
          </div>
        </div>
      </Link>
    ))}
  </div>

</div>

</Container>
<Link

href="/archive"
className="flex justify-center mt-10' items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
<span>Ver todos los post</span>
</Link>
    </>
  );
}
