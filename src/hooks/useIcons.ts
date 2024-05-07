import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import CloseIcon from "@mui/icons-material/Close";

/**
 * A hook that provides access to specific SVG icons.
 *
 * @returns An object containing a set of SVG icons.
 */
export default function useIcons() {
  /* ARROWS */
  const ArrowLeft = ArrowBackIosNewIcon;
  const ArrowRight = ArrowForwardIosIcon;
  const SuccessIcon = CheckCircleOutlineIcon;
  const ErrorIcon = ErrorOutlineIcon;
  const WarningIcon = WarningAmberIcon;
  const NotificationIcon = NotificationsNoneIcon;

  return { arrows: { ArrowLeft, ArrowRight }, status: { SuccessIcon, ErrorIcon, WarningIcon, NotificationIcon }, action: { CloseIcon } };
}
