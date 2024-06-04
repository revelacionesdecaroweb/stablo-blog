"use client"
import Link from "next/link";
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

  const articless = articles;
  const fontSize = "large";
  const  fontWeight = "normal"
  return (
    <>
       <Container>

       <>
      <div className='mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3'>


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

  

    </>

</Container>
<Link

href="/archive"
className="flex justify-center mt-10' items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
<span>Ver todos los post</span>
</Link>
    </>
  );
}
