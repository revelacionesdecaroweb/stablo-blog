

'use client'


import { useEffect, useState } from 'react';
import { getArticleById } from '@/lib/firebase/articles.services';
import { useParams } from 'next/navigation'
import ArticlePage from "./default";
import { LoaderCircle } from 'lucide-react';



export default function Layout() {
  let [article, setArticle] = useState({});
 
  let data = useParams()
  const [isLoading, setisLoading]=useState(true)
 

  useEffect(() => {
    if (data) {
   
      getArticleById(data.id).then(articleData => {
        // Verifica los datos del artículo
        setArticle(articleData);
        setisLoading(false);
       
      
      });


    }
   
  }, [setArticle]);


  


  return (
   <>
       {isLoading ? (
        // Muestra el spinner mientras se cargan los datos
        <div className="flex items-center justify-center h-screen">
        {/* Centrado vertical y horizontal */}
        <LoaderCircle className="text-blue-500 w-12 h-12 animate-spin" />
        {/* Aumenta el tamaño del spinner (ajusta el valor de w-12 y h-12 según tus necesidades) */}
      </div>
      ) : (
        <>

        <ArticlePage articleData={article} />
      
        </>
      
      )}
    </>
     
    
  );
  

}

