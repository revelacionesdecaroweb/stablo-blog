import Container from '@/components/container';
import Image from "next/image";
import Link from "next/link";

 
import Head from 'next/head';

import  {Metadata}  from 'next'
 
export const  metadata = {
  title: '',
  description: ''
}
 



export default function ArticleMetatag({ articleData }) {
  

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
   </>
  )

}