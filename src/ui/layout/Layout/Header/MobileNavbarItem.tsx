import { Typography } from "@mui/material";
import Link from "next/link";

import OrangeSlices from "../../../../asset/svg/OrangeSlices";
import styles from "./header.module.scss";

type MobileNavbarProps = {
  href: string;
  title: string;
  onClick: (href) => void;
};

const MobileNavbarItem: React.FC<MobileNavbarProps> = ({
  href,
  title,
  onClick,
}) => {
  const handleClick = () => {
    onClick(href);
  };

  return (
    <Link href={href} passHref shallow={false}>
      <div className={styles["mobile-navBar-item"]}>
        <OrangeSlices />
        <a className={styles["mobile-navBar-item--link"]} onClick={handleClick}>
          <Typography variant="h4" color={"var(--SecondaryText)"}>
            {title}
          </Typography>
        </a>
      </div>
    </Link>
  );
};

export default MobileNavbarItem;
