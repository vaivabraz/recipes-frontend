import { useState } from "react";
import { useRouter } from "next/router";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Typography } from "@mui/material";

import MobileNavbarItem from "./MobileNavbarItem";
import styles from "./header.module.scss";

type MobileNavbarProps = {
  NavBarItems: { href: string; title: string }[];
};

const MobileNavbar: React.FC<MobileNavbarProps> = ({ NavBarItems }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const router = useRouter();

  const handleMenuSelect = (href) => {
    if (href === router.pathname) {
      setMenuIsOpen(false);
    }
  };

  return (
    <div className={styles["mobile-navBar--container"]}>
      <IconButton
        aria-label="menu"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
        color="primary"
        size="large"
        className={styles["mobile-navBar--menu-button"]}
      >
        <MenuIcon />
      </IconButton>
      {menuIsOpen && (
        <div className={styles["mobile-navBar--menu-overlay"]}>
          <div className={styles["mobile-navBar--menu-body"]}>
            <a
              className={styles["mobile-navBar--back-button"]}
              onClick={() => setMenuIsOpen(!menuIsOpen)}
            >
              <ArrowBackIosNewIcon fontSize="small" color="secondary" />
              <Typography variant="h4" color="secondary">
                {"Uždaryti"}
              </Typography>
            </a>
            {NavBarItems.map((i) => (
              <MobileNavbarItem
                key={i.href}
                title={i.title}
                href={i.href}
                onClick={handleMenuSelect}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
