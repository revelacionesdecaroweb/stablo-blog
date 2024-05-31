"use client"
import { useState, useEffect } from "react";
import { getAllArticles } from "@/lib/firebase/articles.services";
import Image from "next/image";

export default function Post() {
  const [articles, setArticles] = useState([]); // Inicializa el estado con una matriz vacía

  useEffect(() => {
    // Llama a getAllArticles y actualiza el estado con los resultados
    const fetchArticles = async () => {
      try {
        const fetchedArticles = await getAllArticles();
        setArticles(fetchedArticles);
        
      } catch (error) {
        console.error("Error al obtener los artículos:", error);
      }
    };
    fetchArticles();
  }, []); // Ejecuta esto solo una vez al montar el componente

  return (
    <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
      {/* Mapea los artículos y muestra su contenido */}
      {articles.map((article) => (
        <div key={article.id} className="overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800">
          <h2>{article.titulo}</h2>
          <Image 
            src={article.img}
            width={300}
            height={300}
          ></Image>
          
         
          
      
          {/* Agrega más campos según la estructura de tus artículos */}
        </div>
      ))}
    </div>
  );
}