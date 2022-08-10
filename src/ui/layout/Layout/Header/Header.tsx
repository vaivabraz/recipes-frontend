import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useQueryClient } from "@tanstack/react-query";

import { GetMeApiResponse } from "../../../../services/User";
import { reactQueryKeys } from "../../../../constants/reactQueryKeys";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import styles from "./header.module.scss";

type HeaderProps = {
  withMenu?: boolean;
};

export const Header = ({ withMenu }: HeaderProps) => {
  const theme = useTheme();
  const mediumBigSizeScreen = useMediaQuery(theme.breakpoints.up("sm"));

  const queryClient = useQueryClient();
  const user = queryClient.getQueryData<GetMeApiResponse>([
    reactQueryKeys.user,
  ]);

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
      title: user?.username,
    },
  ];

  if (!mediumBigSizeScreen) {
    return <MobileNavbar NavBarItems={NavBarItems} withMenu={withMenu} />;
  }

  return (
    <>
      {withMenu ? (
        <DesktopNavbar NavBarItems={NavBarItems} />
      ) : (
        <div className={styles["header--empty-navbar-row"]} />
      )}
      <div className={styles["header--post-header-gradient-row"]} />
    </>
  );
};
