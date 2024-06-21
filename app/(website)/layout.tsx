import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import { urlForImage } from "@/lib/sanity/image";
import Navbar from "@/components/navbar";
import Head from "next/head";

import {Metadata}  from 'next'
 
export const metadata: Metadata = {
  title: 'Blog de Caro',
  description: '...',
}


/*   async function sharedMetaData(articleData) {
  

  return {
    // enable this for resolving opengraph image
    // metadataBase: new URL(settings.url),
    title: {
      default:
        articleData.titulo ||
        "Revelaciones de Caro",
      template: "%s | Stablo"
    },
    description:
    articleData.tituloon ||
      "Blog de Filosofía y Astrología",
    keywords: ["Next.js", "Sanity", "Tailwind CSS"],
    authors: [{ name: "Surjith" }],
   
    openGraph: {
      images: [
        {
          url:
          articleData.img ||
            "https://firebasestorage.googleapis.com/v0/b/blog-ca662.appspot.com/o/perfil.jpg?alt=media&token=42a2a5d7-f5b6-4b9b-b511-8b04b699354d",
          width: 800,
          height: 600
        }
      ]
    },
    twitter: {
      title: articleData.titulo|| "Revelaciones de Caro",
      card: "summary_large_image"
    },
    robots: {
      index: true,
      follow: true
    }
  };
} 

 export async function generateMetadata({ articleData }) {
  return await sharedMetaData(articleData);
}   */ 


  
export default   function Layout({ children}) {
 
  return (
    <>


  
      <Navbar  />

      <div>{children}</div>

      <Footer  />
    </>
  );
}
// enable revalidate for all pages in this layout
// export const revalidate = 60;
