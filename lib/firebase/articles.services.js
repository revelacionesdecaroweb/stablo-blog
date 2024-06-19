import { collection, getDocs, query, orderBy, limit, getDoc,doc} from "firebase/firestore";
import { db } from "./environmen";







/* export async function getLastArticles() {
  const articles = collection(db, 'articles');
  // Ordena los artículos por fecha en orden descendente y limita a 4
  const q = query(articles, orderBy('fecha', 'desc'), limit(6));

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
 */

// Función para obtener los últimos 6 artículos
export async function getLastArticles() {
  const articlesRef = collection(db, 'articles');
  const q = query(articlesRef, orderBy('fecha', 'desc'), limit(2));
  const results = await getDocs(q);
  const articles = results.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return articles; // Devuelve solo los últimos 6 artículos
}

// Función para obtener todos los artículos excepto los últimos 6
export async function getAllArticles() {
  const articlesRef = collection(db, 'articles');
  const q = query(articlesRef, orderBy('fecha', 'desc'));
  const results = await getDocs(q);
  const allArticles = results.docs.map(doc => ({ id: doc.id, ...doc.data() }));
 

  return allArticles
  
}


export const getArticleById = async (id) => {
  try {
   /*  const docRef = db.collection('articulos').doc(id); */
     const docRef = doc(db,'articles',id);
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
      console.log('Datos del artículo:',docSnapshot.data())
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