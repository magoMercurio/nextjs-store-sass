import Image from "next/image";
import Link from "next/link";
import styles from '@/sass/not-found.module.sass'

export default function NotFound() {
  return(
    <main className={styles.NotFound}>
      <h1 className={styles.NotFound__title}>404</h1>
      <Image
        src={'/images/404.png'}
        alt='404'
        width={300}
        height={300}
      />
      <h2 className={styles.NotFound__subtitle}>
        Parece que el Enlace se Escondio!!!
      </h2>
      <p className={styles.NotFound__description}>Pero nuestra tienda esta avierta las 24/7</p>
      <Link href={'/store'}
        className={styles.NotFound__link}
      >
        Vamos a Compras!!
      </Link>
    </main>
  )
}