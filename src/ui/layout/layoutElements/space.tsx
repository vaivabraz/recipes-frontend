import styled from "styled-components";

export const VSpace = (props) => {
  return <VSpaceStyled height={props.height} {...props} />;
};

export const VSpaceStyled = styled.div`
  padding-top: ${(props) => (props.height ? props.height : 1)}rem;
`;

export const HSpace = (props) => {
  return <HSpaceStyled width={props.width} {...props} />;
};

export const HSpaceStyled = styled.div`
  padding-left: ${(props) => (props.width ? props.width : 1)}rem;
`;
