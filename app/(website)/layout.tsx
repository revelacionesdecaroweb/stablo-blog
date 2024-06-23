

import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import { urlForImage } from "@/lib/sanity/image";
import Navbar from "@/components/navbar";


/* async function sharedMetaData(articleData) {
  const settings = await getSettings(articleData);

  return {
 
    title: {
      default:
        settings?.title ||
        "Revelaciones de Caro",
    
    },
    description:
      settings?.description ||
      "Blog de Filosofía y Astrología",
    keywords: ["Blog", "Filosofía", "Astrología", "Enseñamza de vida"],
    authors: [{ name: "Carolina" }],
    canonical: settings?.url,
    openGraph: {
      images: [
        {
          url:
            urlForImage(settings?.openGraphImage)?.src ||
            "https://firebasestorage.googleapis.com/v0/b/blog-ca662.appspot.com/o/perfil.jpg?alt=media&token=42a2a5d7-f5b6-4b9b-b511-8b04b699354d",
          width: 800,
          height: 600
        }
      ]
    },
    twitter: {
      title: settings?.title || "Revelaciones de Caro",
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
} */

  import  {Metadata}  from 'next'
 
export const  metadata = {
  title: 'Blog de Caro',
  description: ''
}
 



export default async function Layout({ children, articleData }) {
  const settings = await getSettings(articleData);
  return (
    <>
      <Navbar {...settings} />

      <div>{children}</div>

      <Footer {...settings} />
    </>
  );
}
// enable revalidate for all pages in this layout
// export const revalidate = 60;