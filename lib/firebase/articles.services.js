import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "./environmen";






export async function getLastArticles() {
  const articles = collection(db, 'articles');
  // Ordena los artículos por fecha en orden descendente y limita a 4
  const q = query(articles, orderBy('fecha', 'desc'), limit(3));

  const results = await getDocs(q);
  return results.docs.map(doc => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
}


export async function getAllArticles(){
  let articles = (collection(db,'articles'));
  const q = query(articles, orderBy('fecha', 'desc'));
  const results = await getDocs(q);
  return results.docs.map(doc => {
          return {
                  id: doc.id,
                  ...doc.data(),
              
          };
  });

}


export const getArticleById = async (articleId) => {
  try {
    const docRef = app.firestore().collection('articulos').doc(articleId);
    const docSnapshot = await docRef.get();
    if (docSnapshot.exists) {
      return { id: docSnapshot.id, ...docSnapshot.data() };
    } else {
      console.warn('No se encontró ningún artículo con el ID proporcionado.');
      return null;
    }
  } catch (error) {
    console.error('Error al buscar el artículo por ID:', error);
    return null;
  }
};