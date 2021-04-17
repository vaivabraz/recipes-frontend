import styled from "styled-components";
import { HSpace } from "../../";
import Link from "next/link";

import OrangeSlices from "../../../../asset/svg/OrangeSlices";
import { Text } from "../../../components";

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
      <LinkContainer>
        <OrangeSlices />
        <HSpace />
        <a onClick={handleClick}>
          <Text type={"h4"} text={title} />
        </a>
      </LinkContainer>
    </Link>
  );
};

const LinkContainer = styled.div`
  background-color: var(--Background);
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding: 1rem 3rem;
  margin: 0.5rem 2rem;
  border: var(--BorderLine);
  box-shadow: var(--Shadow);
  border-radius: var(--BorderRadius);
`;

export default MobileNavbarItem;
