import { useEffect, useRef, useState } from "react";
import styles from "./MediaScoller.module.css";
import { cc } from "../../utils/cc";
import useIcons from "../hooks/useIcons";

export type Media = {
  id: string;
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
};

export type MediaScrollerOptions = {
  blurred: boolean;
};

type MediaScrollerProps = {
  data: Media[];
  options?: Partial<MediaScrollerOptions>;
};

const DEFAULT_MEDIASCROLLER_OPTIONS = {
  blurred: true,
};

export function MediaScroller({ data, options = DEFAULT_MEDIASCROLLER_OPTIONS }: MediaScrollerProps) {
  const [activeDataIndex, setActiveDataIndex] = useState(0);
  const activeDataRef = useRef<HTMLImageElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const firstRenderDoneRef = useRef(false);
  const { ArrowLeft, ArrowRight } = useIcons().arrows;

  useEffect(() => {
    if (activeDataRef.current === null || scrollerRef.current === null) return;
    const scrollerMiddle =
      scrollerRef.current?.getBoundingClientRect().width / 2 - activeDataRef.current?.getBoundingClientRect().width / 2;
    const x = activeDataRef.current.offsetLeft - scrollerMiddle;
    const y = activeDataRef.current.offsetTop;

    scrollerRef.current?.scrollTo({ top: y, left: x, behavior: firstRenderDoneRef.current ? "smooth" : undefined });

    firstRenderDoneRef.current = true;
  }, [activeDataIndex, activeDataRef, scrollerRef]);

  return (
    <>
      <section className={styles.mediaContainer}>
        <button
          className={styles.prevBtn}
          type="button"
          onClick={() => {
            setActiveDataIndex((d) => {
              if (d === 0) return data.length - 1;
              return d - 1;
            });
          }}
        >
          <ArrowLeft />
        </button>
        <div className={styles.mediaScroller} ref={scrollerRef}>
          {data.map((item, index) => (
            <img
              className={cc(
                item.id === data[activeDataIndex].id && styles.activeImage,
                options.blurred && styles.blurred
              )}
              key={item.id}
              src={item.imgSrc}
              alt={item.imgAlt}
              ref={item.id === data[activeDataIndex].id ? activeDataRef : null}
              onClick={() => setActiveDataIndex(index)}
            />
          ))}
        </div>
        <button
          className={styles.nextBtn}
          type="button"
          onClick={() => {
            setActiveDataIndex((d) => {
              if (d == data.length - 1) return 0;
              return d + 1;
            });
          }}
        >
          <ArrowRight />
        </button>
      </section>
      <div className={styles.activeData}>
        <h3>{data[activeDataIndex].title}</h3>
        <span>{data[activeDataIndex].description}</span>
      </div>
    </>
  );
}
