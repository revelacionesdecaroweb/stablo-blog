"use client"
import Link from "next/link";
import Container from "@/components/container";
import Image from "next/image"; // Agrega esta importación
import { useState, useEffect } from 'react';
import { getLastArticles } from "@/lib/firebase/articles.services";
import { cx } from "@/utils/all";
import { LoaderCircle } from "lucide-react";

export default function Post() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setisLoading]=useState(true)
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const fetchedArticles = await getLastArticles();
        setArticles(fetchedArticles);
        setisLoading(false);
      } catch (error) {
        console.error('Error al obtener los artículos:', error);
      }
    };
    fetchArticles();
  }, []);

  const articless= articles
  const fontSize = "large";
  const fontWeight = "normal"
  return (


    <>

      {isLoading?(
         <div className="flex items-center justify-center h-screen">
         {/* Centrado vertical y horizontal */}
         <LoaderCircle className="text-blue-500 w-12 h-12 animate-spin" />
         {/* Aumenta el tamaño del spinner (ajusta el valor de w-12 y h-12 según tus necesidades) */}
       </div>
       
      ):(
        <>
        <Container>
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
        </Container>
         <div className="mt-10 flex justify-center">
         <div className="mt-10 flex justify-center">
<Link

  href="/archive"
  className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
  <span>Ver más post</span>
</Link>
</div>
         </div>
         </>
      )}
          
         
   

    </>
  );
}
