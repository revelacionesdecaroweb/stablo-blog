import { collection, getDocs } from "firebase/firestore";
import { db } from "./environmen";
/* export const getAllArticles = async()=>{
    try{
      const querySnapshot= await db.firestore.collection('articles').get();
      const articles = querySnapshot.docs.map((doc)=>({
        id: doc.id,
        ...doc.data(),   
      }))
      return articles;
      
    }catch(error){
        console.error(error)
        return [];
    }
}
 */
export async function getAllArticles(){
  let articles = (collection(db,'articles'));

  const results = await getDocs(articles);
  return results.docs.map(doc => {
          return {
                  id: doc.id,
                  ...doc.data(),
                  // Only plain objects can be passed to Client Components from Server Components
              
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