import { useEffect, useRef, useState } from "react";
import styles from "./InfiniteMediaScoller.module.css";
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
  blurred: false,
};

export function InfiniteMediaScroller({ data, options = DEFAULT_MEDIASCROLLER_OPTIONS }: MediaScrollerProps) {
  const [scrollerData, setScrollerData] = useState<Media[]>();
  const [activeDataIndex, setActiveDataIndex] = useState<number>();
  const [isScrolling, setIsScrolling] = useState(false);
  const activeDataRef = useRef<HTMLImageElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const firstRenderDoneRef = useRef(false);
  const resetRef = useRef(false);
  const startResetPoint = useRef<number>();
  const endResetPoint = useRef<number>();
  const startIndex = useRef<number>(0);
  const { ArrowLeft, ArrowRight } = useIcons().arrows;

  // useEffect(() => {
  //   if (activeDataRef.current === null || scrollerRef.current === null) return;
  //   const scrollerMiddle =
  //     scrollerRef.current?.getBoundingClientRect().width / 2 - activeDataRef.current?.getBoundingClientRect().width / 2;
  //   const x = activeDataRef.current.offsetLeft - scrollerMiddle;
  //   const y = activeDataRef.current.offsetTop;

  //   scrollerRef.current?.scrollTo({ top: y, left: x, behavior: firstRenderDoneRef.current ? "smooth" : undefined });

  //   firstRenderDoneRef.current = true;
  // }, [activeDataIndex, activeDataRef, scrollerRef]);

  useEffect(() => {
    if (scrollerRef.current == null) return;
    const startMockData = data.slice().map((d) => ({ ...d, id: crypto.randomUUID() }));
    const endMockData = data.slice().map((d) => ({ ...d, id: crypto.randomUUID() }));

    const extendedData = [...endMockData, ...data, ...startMockData];
    setScrollerData(extendedData);

    startIndex.current = Math.ceil(extendedData.length / 2);
    startResetPoint.current = startIndex.current - data.length;
    endResetPoint.current = startIndex.current + data.length;

    setActiveDataIndex(startIndex.current);

    scrollerRef.current.style.transition = "none";
    scrollerRef.current.style.setProperty("--scrollerIndex", startIndex.current.toString());
    firstRenderDoneRef.current = true;
  }, [data, startIndex, scrollerRef]);

  function onLeftClick() {
    if (scrollerRef.current == null || isScrolling || scrollerData === undefined) return;
    setIsScrolling(true);
    const prevIndex = parseInt(getComputedStyle(scrollerRef.current).getPropertyValue("--scrollerIndex"));

    if (prevIndex === startIndex.current) scrollerRef.current.style.transition = "transform 250ms ease-in";

    if (prevIndex > 0) {
      scrollerRef.current.style.setProperty("--scrollerIndex", (prevIndex - 1).toString());
      setActiveDataIndex(prevIndex - 1);
    } else {
      scrollerRef.current.style.setProperty("--scrollerIndex", startIndex.toString());
      setActiveDataIndex(startIndex.current);
    }

    if (prevIndex - 1 === startResetPoint.current) resetRef.current = true;
  }

  function onRightClick() {
    if (scrollerRef.current == null || isScrolling || scrollerData === undefined) return;
    setIsScrolling(true);
    const prevIndex = parseInt(getComputedStyle(scrollerRef.current).getPropertyValue("--scrollerIndex"));

    if (prevIndex === startIndex.current) scrollerRef.current.style.transition = "transform 250ms ease-in";

    if (prevIndex < scrollerData.length - 1) {
      scrollerRef.current.style.setProperty("--scrollerIndex", (prevIndex + 1).toString());
      setActiveDataIndex(prevIndex + 1);
    } else {
      scrollerRef.current.style.setProperty("--scrollerIndex", startIndex.current.toString());
      setActiveDataIndex(startIndex.current);
    }

    if (prevIndex + 1 === endResetPoint.current) resetRef.current = true;
  }

  function onTransitionEnd() {
    setIsScrolling(false);

    if (resetRef.current && scrollerRef.current) {
      scrollerRef.current.style.setProperty("--scrollerIndex", startIndex.current.toString());
      scrollerRef.current.style.transition = "none";
      setActiveDataIndex(startIndex.current);
      resetRef.current = false;
    }
  }

  return (
    <>
      <section className={styles.carouselContainer}>
        <button className={styles.prevBtn} type="button" onClick={onLeftClick}>
          <ArrowLeft />
        </button>
        <div className={styles.carouselScroller} ref={scrollerRef} onTransitionEnd={onTransitionEnd}>
          {scrollerData != undefined &&
            activeDataIndex != undefined &&
            scrollerData.map((item, index) => (
              <img
                className={cc(
                  item.id === scrollerData[activeDataIndex].id && styles.activeImage,
                  options.blurred && styles.blurred
                )}
                key={item.id}
                src={item.imgSrc}
                alt={item.imgAlt}
                ref={item.id === scrollerData[activeDataIndex].id ? activeDataRef : null}
                onClick={() => setActiveDataIndex(index)}
              />
            ))}
        </div>
        <button className={styles.nextBtn} type="button" onClick={onRightClick} disabled={isScrolling}>
          <ArrowRight />
        </button>
      </section>
      {activeDataIndex != undefined && scrollerData != undefined && (
        <div className={styles.activeData}>
          <h3>{scrollerData[activeDataIndex].title}</h3>
          <span>{scrollerData[activeDataIndex].description}</span>
        </div>
      )}
    </>
  );
}
