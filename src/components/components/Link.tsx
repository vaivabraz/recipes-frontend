import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Colors } from "../../constants";

interface ILink {
  href: string;
  title: string;
}

export default ({ href, title }: ILink) => {
  const router = useRouter();
  const style = { color: Colors.DarkGreen };
  if (router.pathname.startsWith(href)) {
    style.color = Colors.ActiveColor;
  }

  return (
    <Link href={href} passHref>
      <Item style={style}>{title}</Item>
    </Link>
  );
};

const Item = styled.a`
  font-weight: 500;
`;
