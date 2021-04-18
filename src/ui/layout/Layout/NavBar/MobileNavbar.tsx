import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";

import MenuButton from "../../../../asset/svg/MenuButton";
import Back from "../../../../asset/svg/Back";
import { ButtonSvg, Text } from "../../../components";
import MobileNavbarItem from "./MobileNavbarItem";

type MobileNavbarProps = {
  NavBarItems: { href: string; title: string }[];
};

const MobileNavbar: React.FC<MobileNavbarProps> = ({ NavBarItems }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const router = useRouter();
  const currentHistory = NavBarItems.find((i) =>
    router.pathname.startsWith(i.href)
  ) || { href: "", title: "" };

  const handleMenuSelect = (href) => {
    if (href === router.pathname) {
      setMenuIsOpen(false);
    }
  };

  return (
    <NavbarContainer>
      <TextContainer>
        <Link href={currentHistory.href} passHref>
          <a>
            <Text type={"h4"} text={currentHistory.title} />
          </a>
        </Link>
      </TextContainer>
      <Button Icon={MenuButton} onClick={() => setMenuIsOpen(!menuIsOpen)} />
      {menuIsOpen && (
        <MenuColumn>
          <MenuHeader>
            <Button Icon={Back} onClick={() => setMenuIsOpen(!menuIsOpen)} />
          </MenuHeader>

          <MenuBody>
            {NavBarItems.map((i) => (
              <MobileNavbarItem
                key={i.href}
                title={i.title}
                href={i.href}
                onClick={handleMenuSelect}
              />
            ))}
          </MenuBody>
        </MenuColumn>
      )}
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  height: 4rem;
  width: 100%;
  background-color: var(--HeaderBackground);
  box-shadow: var(--Shadow);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  margin-bottom: 1rem;
`;

const MenuHeader = styled.div`
  height: 4rem;
  padding: 1rem 2.5rem;
  display: flex;
`;

const TextContainer = styled.button`
  background-color: transparent;
`;

const Button = styled(ButtonSvg)`
  background-color: transparent;
  svg {
    fill: var(--Text);
  }
`;

const MenuColumn = styled.div`
  flex-direction: column;
  position: fixed;
  background-color: var(--HeaderBackground);
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
`;

const MenuBody = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10rem;
  height: 100%;
`;

export default MobileNavbar;
