
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document{
    render(){
        <head>
        <title>Revelaciones De Caro</title>
          {/* Metadatos para Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Revelaciones De Caro" />
          <meta name="twitter:description" content="Blog de Filosofía y Astrología" />
          {/* ... Agrega más metadatos de Twitter según tus necesidades ... */}
  
          {/* Metadatos para Facebook */}
          <meta name="title" content="Revelaciones De Caro" />
          <meta  name="description"  content="Blog de Filosofía y Astrología" />
           <meta name="image" content="https://firebasestorage.googleapis.com/v0/b/blog-ca662.appspot.com/o/perfil.jpg?alt=media&token=42a2a5d7-f5b6-4b9b-b511-8b04b699354d"/>
          <meta name="image:alt" content="https://firebasestorage.googleapis.com/v0/b/blog-ca662.appspot.com/o/perfil.jpg?alt=media&token=42a2a5d7-f5b6-4b9b-b511-8b04b699354d"/>
          <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/blog-ca662.appspot.com/o/perfil.jpg?alt=media&token=42a2a5d7-f5b6-4b9b-b511-8b04b699354d"/>
          {/* ... Agrega más metadatos de Facebook según tus necesidades ... */}
      
        </head>
    }

}

export default MyDocument;