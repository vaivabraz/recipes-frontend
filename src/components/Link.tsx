import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Colors } from "../constants";

interface ILink {
  href: string;
  title: string;
}

export default ({ href, title }: ILink) => {
  const router = useRouter();
  const style = { color: Colors.DarkGreen };
  if (router.pathname === href) {
    style.color = Colors.ActiveColor;
  }

  return (
    <Link href={href} passHref>
      <a style={style}>{title}</a>
    </Link>
  );
};
