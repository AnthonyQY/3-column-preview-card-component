import ImageSedan from "./icon-sedans.svg";
import ImageSuvs from "./icon-suvs.svg";
import ImageLuxury from "./icon-luxury.svg";
import styles from "./Card.module.scss";

export default function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.block__sedan}>
        <img className={styles.image} src={ImageSedan.src} alt="A sedan." />
        <h1 className={styles.title}>SEDANS</h1>
        <p className={styles.description}>
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </p>
        <button className={styles.button__learn__sedan}>Learn More</button>
      </div>
      <div className={styles.block__suvs}>
        <img className={styles.image} src={ImageSuvs.src} alt="A SUV." />
        <h1 className={styles.title}>SUVS</h1>
        <p className={styles.description}>
          Take an SUV for its spacious interior, power, and versatility. Perfect
          for your next family vacation and off-road adventures.
        </p>
        <button className={styles.button__learn__suv}>Learn More</button>
      </div>
      <div className={styles.block__luxury}>
        <img
          className={styles.image}
          src={ImageLuxury.src}
          alt="A luxury vehicle."
        />
        <h1 className={styles.title}>LUXURY</h1>
        <p className={styles.description}>
          Cruise in the best car brands without the bloated prices. Enjoy the
          enhanced comfort of a luxury rental and arrive in style.
        </p>
        <button className={styles.button__learn__luxury}>Learn More</button>
      </div>
    </div>
  );
}
