import React from "react";
import styled from "styled-components";
import { TextSection, Row, Text } from "../../ui";

type Props = {
  categories: string[];
};

const CategoriesList: React.FC<Props> = ({ categories }) => {
  if (!categories?.length) return null;
  return (
    <TextSection title="KATEGORIJOS: ">
      <Row>
        {categories?.map((category, index) => (
          <CategoryItem key={category} href="">
            <Text text={category} color="accent" />
            {index + 1 !== categories?.length ? ",  " : "."}
          </CategoryItem>
        ))}
      </Row>
    </TextSection>
  );
};

export default CategoriesList;

const CategoryItem = styled.a`
  display: flex;
  flex-direction: row;
  margin-right: 0.5rem;
`;
