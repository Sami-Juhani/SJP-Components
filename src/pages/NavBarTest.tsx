import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { StickyNav } from "../components/StickyNav";
import { type Link } from "../components/StickyNav";
import LogoDevIcon from '@mui/icons-material/LogoDev';

export function NavBarTest() {
  const links: Link[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  const router = createBrowserRouter([
    {
      index: true,
      element: <StickyNav links={links} logo={<LogoDevIcon />} logoDescription="Sami Paananen" />,
    },
  ]);
  return <RouterProvider router={router} />;
}
