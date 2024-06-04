import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";
export default function About({ authors, settings }) {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        Sobre mi
      </h1>
      <div className="text-center">

        <p>
          Astróloga-Tarotista con más de 30 años de experiencia en consultas, talleres, cursos, seminarios, programas de radio y televisión.
        </p>
      </div>

      {/*    <div className="mb-16 mt-6 grid grid-cols-3 gap-5 md:mb-32 md:mt-16 md:gap-16">
        {authors.slice(0, 3).map(author => {
          const imageProps = urlForImage(author?.image) || null;
          return (
            <div
              key={author._id}
              className="relative aspect-square overflow-hidden rounded-md bg-slate-50 odd:translate-y-10 odd:md:translate-y-16">
              <Link href={`/author/${author?.slug}`}>
                {imageProps && (
                  <Image
                    src={imageProps?.src}
                    alt={author?.name || " "}
                    fill
                    sizes="(max-width: 320px) 100vw, 320px"
                    className="object-cover"
                  />
                )}
              </Link>
            </div>
          );
        })}
      </div> */}

      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        <p>Investigadora y estudiosa de temas filosóficos, holístico y espirituales</p>
        <p>
          Procuro estar en constante aprendizaje para brindarles contenido e información de calidad a través de nuestro sitio web, así como también asesoría personalizada a través de la Astrología y el Tarot con la mayor empatía y apoyo espiritual.
        </p>


        <p>
          <Link href="/contacto">Mantente en contacto</Link>
        </p>
      </div>
      <div className="flex p-2">
        <div className="w-1/4 youtube">
          <a href="https://www.youtube.com/@revelacionesdecaro" target="_blank" rel="noreferrer">
            <img src="https://firebasestorage.googleapis.com/v0/b/blog-ca662.appspot.com/o/iconos%2Fyoutube_4494485.png?alt=media&token=c712a602-66c4-47fa-8a20-7a616a6a1b99" loading="lazy" alt="youtube" />
          </a>
        </div>
        <div className="w-1/4 facebook">
          <a href="https://www.facebook.com/groups/717152485846700" target="_blank" rel="noreferrer">
            <img src="https://firebasestorage.googleapis.com/v0/b/blog-ca662.appspot.com/o/iconos%2Ffacebook-logo_2504792.png?alt=media&token=cb0ce98c-7148-44e0-824e-966f8de84ae2" loading="lazy" alt="facebook" />
          </a>
        </div>
        <div className="w-1/4 instagram">
          <a href="https://www.instagram.com/revelacionesdecaro/" target="blank" rel="noreferrer">
            <img src="https://firebasestorage.googleapis.com/v0/b/blog-ca662.appspot.com/o/iconos%2Finstagram_4494489.png?alt=media&token=39323f0a-f0a6-4892-9960-020a7633c25f" loading="lazy" alt="instagram" />
          </a>
        </div>
        <div className="w-1/4 twitter">
          <a href="https://twitter.com/carorevela/" target="blank" rel="noreferrer">
            <img src="https://firebasestorage.googleapis.com/v0/b/blog-ca662.appspot.com/o/iconos%2Ftwitter_5969020.png?alt=media&token=51501e23-e068-4bea-9f0c-48874c731fb3" loading="lazy" alt="twitter" />
          </a>
        </div>
        <div className="w-1/4 ticktock">
          <a href="https://www.tiktok.com/@revelacionesdecaro?_t=8hxlOKxZgJh&_r=1&fbclid=IwAR3e4EUYxdtr4LhZsBS-cSt8YqSQRFpLCVti8HxtZsnQJc3svrv8MbjpwMM"
            target="_blank" rel="noreferrer">
            <img src="https://firebasestorage.googleapis.com/v0/b/blog-ca662.appspot.com/o/iconos%2Ftik-tok_4782345.png?alt=media&token=ae5b81c8-715e-4079-9af5-cc8902ab89ea" loading="lazy" alt="tik-tok" />
          </a>
        </div>
        <div className="w-1/4 threads">
          <a href="https://www.threads.net/@revelacionesdecaro?fbclid=IwAR0yYmIEYEDLo-GmoiS-ha4Gd_VVGCkzAvY4tBWjN5vwiZnNtBqGOzFIIs8"
            target="_blank" rel="noreferrer">
            <img src="https://firebasestorage.googleapis.com/v0/b/blog-ca662.appspot.com/o/iconos%2Fthreads.png?alt=media&token=449b7a0d-c9bd-44fb-97f3-a928fc006257" loading="lazy" alt="threads" />
          </a>
        </div>








      </div>
    </Container>
  );
}
