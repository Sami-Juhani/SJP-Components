import { TypeWriter, TypeWriterOptions } from "./TypeWriter";
import styles from "./FancyHero.module.css";

const DEFAULT_TYPEWRITER_OPTIONS: TypeWriterOptions = {
  x: "10%",
  y: "50%",
  typingSpeed: 100,
  eraseSpeed: 50,
  endDelay: 4000,
  startDelay: 2000,
};

export type FancyHeroProps = {
  imgSrc: string;
  paragraph: string | string[];
  typeWriterOptions?: TypeWriterOptions
};

export function FancyHero({ imgSrc, paragraph, typeWriterOptions }: FancyHeroProps) {
  return (
    <section className={styles.heroContainer}>
      <img src={imgSrc} />
      <TypeWriter
        paragraph={paragraph}
        options={{ ...DEFAULT_TYPEWRITER_OPTIONS, ...typeWriterOptions }}
      />
    </section>
  );
}
