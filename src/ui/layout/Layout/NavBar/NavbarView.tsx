import { useContext } from "react";
import useWindowSize from "../../../../hooks/useWindowSize";
import { AppContext } from "../../../../store";
// import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

const NavbarView = () => {
  const { state } = useContext(AppContext);
  const NavBarItems: { href: string; title: string }[] = [
    {
      href: "/recipes",
      title: "Receptai",
    },
    {
      href: "/notes",
      title: "Užrašai",
    },
    {
      href: "/planner",
      title: "Planai",
    },
    {
      href: "/profile",
      title: state.user.username,
    },
  ];
  const size = useWindowSize();

  // if (size === "small") {
  //   return <MobileNavbar NavBarItems={NavBarItems} />;
  // }
  return <DesktopNavbar NavBarItems={NavBarItems} />;
};

export default NavbarView;
