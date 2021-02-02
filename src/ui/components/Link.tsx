import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Colors } from "../../constants";

interface ILink {
  href: string;
  title: string;
  bold?: boolean;
}

export default ({ href, title, bold }: ILink) => {
  const router = useRouter();
  const style = { color: Colors.Text };
  if (router.pathname.startsWith(href)) {
    style.color = Colors.AccentColor;
  }

  return (
    <Link href={href} passHref>
      <Item bold={bold} style={style}>
        {title}
      </Item>
    </Link>
  );
};

const Item = styled.a`
  font-weight: ${(props) => (props.bold ? 500 : null)};
`;
