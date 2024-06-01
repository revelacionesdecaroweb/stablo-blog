"use client"
import { useState, useEffect } from 'react';
import { getAllArticles } from '@/lib/firebase/articles.services';
import Image from 'next/image';
import Pagination from '@/components/blog/pagination';
import { useSearchParams } from 'next/navigation'; // Importa useSearchParams

export default function Post() {
  const [articles, setArticles] = useState([]);
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get('page'), 10) ||1 
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

  return (
    <div className='mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3'>
      {currentArticles.map((article) => (
        <div key={article.id} className='overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800'>
          <h2>{article.titulo}</h2>
          <Image src={article.img} width={300} height={300} alt={article.titulo}></Image>
        </div>
      ))}
      <Pagination
        pageIndex={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
      />
    </div>
  );
}