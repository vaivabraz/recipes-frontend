import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
interface ILink {
  href: string;
  title: string;
  bold?: boolean;
}

export default ({ href, title, bold }: ILink) => {
  const router = useRouter();
  const className = router.pathname.startsWith(href) ? "Accent" : "";

  return (
    <Link href={href} passHref>
      <Item className={className} bold={bold}>
        {title}
      </Item>
    </Link>
  );
};

const Item = styled.a`
  font-weight: ${(props) => (props.bold ? 500 : null)};
  color: var(--Text);
  &.Accent {
    color: var(--AccentColor);
  }
`;
