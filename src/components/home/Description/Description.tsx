import styles from './Description.module.sass';
import Image from 'next/image';
import { PLACEHOLDER_IMAGE } from './placeholder'



export const Description = () => {
  return (
    <section className={styles.Description}>

      <div className={styles.Description__imageContainer}>
      <Image
        src="/images/description.jpeg"
        alt="products marketplace"
        fill
        placeholder='blur'
        blurDataURL={PLACEHOLDER_IMAGE}
      />

      </div>
      <div className={styles.Description__text}>
        <h2>Bring the future today</h2>
        <p>Future World: Your Gateway to Tomorrow&#39;s Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
      </div>
    </section>
  )
}