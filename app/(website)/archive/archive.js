"use client"
import { useState, useEffect } from 'react';
import { getAllArticles } from '@/lib/firebase/articles.services';
import { cx } from "@/utils/all";
import Image from 'next/image';
import Pagination from '@/components/blog/pagination';
import { useSearchParams } from 'next/navigation'; // Importa useSearchParams
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import Link from 'next/link';

export default function Post() {
  const [articles, setArticles] = useState([]);
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get('page'), 6) || 1
  const POSTS_PER_PAGE = 6;

  // Convierte el parámetro de página a un número y actualiza el estado


  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const fetchedArticles = await getAllArticles();
        setArticles(fetchedArticles);
      } catch (error) {
        console.error('Error al obtener los artículos:', error);
      }
    };
    fetchArticles();
  }, []); // Elimina la dependencia router.isReady

  // Calcula el número total de páginas
  const totalPages = Math.ceil(articles.length / POSTS_PER_PAGE);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  // Obtiene los artículos para la página actual
  const currentArticles = articles.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  // Función para cambiar la página
  const handlePageChange = (newPage) => {
    setSearchParams({ page: newPage.toString() });
  };

  const fontSize = "large";
  const  fontWeight = "normal"
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
                href={`/`}>

                <Image
                  src={article.img}

                  alt={article.titulo || "Thumbnail"}

                  className="object-cover transition-all"
                  fill
                  sizes="(max-width: 768px) 30vw, 33vw"
                />
                )
              </Link>
            </div>


            <h2
               className={cx(
                fontSize === "large" ? "text-2xl" 
                  : minimal
                  ? "text-3xl"
                  : "text-lg",
                fontWeight === "normal"
                  ? "line-clamp-2 font-medium  tracking-normal text-black"
                  : "font-semibold leading-snug tracking-tight",
                "mt-2    dark:text-white"
              )}>
              <Link href={`/`}>
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

            {/*   <div className="hidden">
                {post.excerpt && (
                  <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                    <Link
                      href={`/post/${
                        pathPrefix ? `${pathPrefix}/` : ""
                      }${post.slug.current}`}>
                      {post.excerpt}
                    </Link>
                  </p>
                )}
              </div> */}

            {/*     <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                <Link href={`/author/${post?.author?.slug?.current}`}>
                  <div className="flex items-center gap-3">
                    <div className="relative h-5 w-5 flex-shrink-0">
                      {post?.author?.image && (
                        <Image
                          src={AuthorimageProps.src}
                          alt={post?.author?.name}
                          className="rounded-full object-cover"
                          fill
                          sizes="20px"
                        />
                      )}
                    </div>
                    <span className="truncate text-sm">
                      {post?.author?.name}
                    </span>
                  </div>
                </Link>
                <span className="text-xs text-gray-300 dark:text-gray-600">
                  &bull;
                </span>
                <time
                  className="truncate text-sm"
                  dateTime={post?.publishedAt || post._createdAt}>
                  {format(
                    parseISO(post?.publishedAt || post._createdAt),
                    "MMMM dd, yyyy"
                  )}
                </time>
              </div>
            </div>
          </div> */}
          </div>
        ))}

      </div>

      {/* pagination */}

      <div className='flex justify-center mt-10'>
        <Pagination
          pageIndex={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          isFirstPage={isFirstPage}
          isLastPage={isLastPage}
        />
      </div>

    </>
  );
}
