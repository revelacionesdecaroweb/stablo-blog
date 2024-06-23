"use client"
import { useState, useEffect } from 'react';
import { getAllArticles } from '@/lib/firebase/articles.services';
import { cx } from "@/utils/all";
import Image from 'next/image';
import Pagination from "@/components/blog/pagination";
 // Importa useSearchParams
import Link from 'next/link';
 import { useRouter, useSearchParams } from 'next/navigation'; 

export default  function Post() {
  const [articles, setArticles] = useState([]);
  const router = useRouter(); 
  const searchParams = useSearchParams(); 
  const POSTS_PER_PAGE= 6
  const pageIndex = parseInt(searchParams.get('page'), 10) || 1;
  const startIndex = (pageIndex - 1) * POSTS_PER_PAGE;
  const endIndex = pageIndex * POSTS_PER_PAGE;
  const isFirstPage = pageIndex === 1;
  const isLastPage = (pageIndex * POSTS_PER_PAGE) >= articles.length;
  const currentArticles = articles.slice(startIndex, endIndex);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const fetchedArticles = await getAllArticles();
        setArticles(fetchedArticles);
        setArticles(fetchedArticles);
     
      } catch (error) {
        setArticles([])
      }
    };
    fetchArticles();
  }, [pageIndex]); 
 const handlePageChange = (newPage) => {
   router.push(`/?page=${newPage}`);
  
  
};

  return (

    <>
      <div className='mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3'>
        {currentArticles.map((article) => (
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
              <Link
                className={cx(
                  "relative block aspect-square",

                )}
                href={`/metatag/${article.id}`}> tag
                
                
              </Link>
            </div>


            <h2
               className={cx(
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

      <Pagination
        pageIndex={pageIndex}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        onPageChange={(newPage) => router.push(`/?page=${newPage}`)}
      />
  
    </>
  );
}
