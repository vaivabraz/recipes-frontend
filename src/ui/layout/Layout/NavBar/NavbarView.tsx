import { useQueryClient } from "react-query";
import useWindowSize from "../../../../hooks/useWindowSize";
import { GetMeApiResponse } from "../../../../services/User";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

const NavbarView = () => {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData<GetMeApiResponse>("user");

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
      title: user.username,
    },
  ];
  const size = useWindowSize();

  if (size === "small") {
    return <MobileNavbar NavBarItems={NavBarItems} />;
  }
  return <DesktopNavbar NavBarItems={NavBarItems} />;
};

export default NavbarView;
