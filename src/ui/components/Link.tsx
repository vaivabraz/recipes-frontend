import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Box } from "@mui/system";
interface ILink {
  href: string;
  title: string;
  bold?: boolean;
}

const EnhancedLink = ({ href, title, bold }: ILink) => {
  const router = useRouter();
  const className = router.pathname.startsWith(href) ? "Accent" : "";

  return (
    <Link href={href} passHref>
      <Item className={className} bold={bold}>
        <Box
          sx={{
            backgroundColor: router.pathname.startsWith(href)
              ? "var(--new-york-pink)"
              : "",
            width: "10px",
            height: "10px",
            borderRadius: "5px",
            margin: "3px",
          }}
        />
        {title}
      </Item>
    </Link>
  );
};
export default EnhancedLink;
const Item = styled.a`
  display: flex;
  align-items: center;
  font-weight: ${(props) => (props.bold ? 500 : null)};
  color: var(--Text);
  &.Accent {
    color: var(--AccentColor);
  }
`;
