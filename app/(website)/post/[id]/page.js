

'use client'
import Image from "next/image";
import Link from "next/link";
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { getArticleById } from '@/lib/firebase/articles.services';
import { useParams } from 'next/navigation'
import Container from "@/components/container";
import ArticlePage from "./default";


export default function Layout() {
  let [article, setArticle] = useState({});
  /*  const router = useRouter(); */
  let data = useParams()

  const getItems = async () => {
    try {

    
     
    } catch (error) {

    }
  }

  useEffect(() => {
    if (data) {

      getArticleById(data.id).then(articleData => {
        // Verifica los datos del artículo
        setArticle(articleData);
      });


    }
   
  }, [setArticle]);

 
  
  return (
  
     
     <ArticlePage articleData={article}></ArticlePage> 
  
  );
}

