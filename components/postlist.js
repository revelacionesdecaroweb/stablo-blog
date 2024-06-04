"use client"

import Image from "next/image";
import Link from "next/link";
import { cx } from "@/utils/all";
import { urlForImage } from "@/lib/sanity/image";
import { parseISO, format } from "date-fns";
import { PhotoIcon } from "@heroicons/react/24/outline";
import CategoryLabel from "@/components/blog/category";
import { useEffect, useState } from "react";
import { getAllArticles } from "@/lib/firebase/articles.services";


export default function PostList() {
  /* const imageProps = post?.mainImage
    ? urlForImage(post.mainImage)
    : null;
  const AuthorimageProps = post?.author?.image
    ? urlForImage(post.author.image)
    : null; */
    const [articles, setArticles] = useState([]);

    useEffect(() => {
      async function fetchArticles() {
        try {
          const allArticles = await getAllArticles();
          setArticles(allArticles);
        } catch (error) {
          console.error("Error fetching articles:", error);
        }
      }
  
      fetchArticles();
    }, []);
  return (
    <>
      {articles.map((article)=>{
          <div
          key={article.id}
          className={cx(
            "group cursor-pointer",
             "grid gap-10 md:grid-cols-2"
          )}>
          <div
            className={cx(
              " overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800"
            )}>
            <Link
              className={cx(
                "relative block",
              
              )}
              href={`/post/`}>
            
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
  
      {/*     <div className={cx( "flex items-center")}>
            <div>
              <CategoryLabel
                categories={post.categories}
                nomargin={minimal}
              />
              
              {/*   
                  href={`/post/${pathPrefix ? `${pathPrefix}/` : ""}${
                    post.slug.current
                  }`}> */}
                <h2
                className={cx(
                
                )}>
                <Link>
                  <span
                    className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom
        bg-no-repeat
        transition-[background-size]
        duration-500
        hover:bg-[length:100%_3px]
        group-hover:bg-[length:100%_10px]
        dark:from-purple-800 dark:to-purple-900">
                    {article.title}
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
      })}
    </>
  );
}







     {/*  <div className='grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 mb-auto w-full'>
      {currentArticles.map((article) => (
         <Link key={article.id} href={`/author`} >
        <div className={cx(
            "group cursor-pointer",
             "grid gap-10 md:grid-cols-2"
          )}>
            <div
            className={cx(
              " overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800"
            )}>
            <Link
              className={cx(
                "relative block",
              
              )}
              href={`/post/`}>
            
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
          <h2>{article.titulo}</h2>
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
  
          </div>  */}