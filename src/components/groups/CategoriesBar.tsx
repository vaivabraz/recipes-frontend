import React from "react";
import styled from "styled-components";

const CategoriesBar = () => {
  return (
    <SideContainer>
      <h3>Kategorijos</h3>
      <CategoriesList>
        <li>
          <a>sriubos</a>
        </li>
        <li>
          <a>lengva tara tara</a>
        </li>
        <li>
          <a>sunku</a>
        </li>
      </CategoriesList>
    </SideContainer>
  );
};

const SideContainer = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.5rem;
`;

const CategoriesList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  li {
    padding-top: 0.5rem;
  }
`;

export default CategoriesBar;
