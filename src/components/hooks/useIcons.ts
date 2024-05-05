import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

/**
 * A hook that provides access to specific SVG icons.
 *
 * @returns An object containing a set of SVG icons.
 */
export default function useIcons() {
  /* ARROWS */
  const ArrowLeft = ArrowBackIosNewIcon;
  const ArrowRight = ArrowForwardIosIcon;

  return { arrows: { ArrowLeft, ArrowRight } };
}
