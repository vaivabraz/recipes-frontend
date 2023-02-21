import React from "react";
import styled from "styled-components";
import { CategoryType } from "../../types";
import { Tag } from "../../ui";

type TagsListProps = {
  categories: CategoryType[];
};

const TagsList: React.FC<TagsListProps> = ({ categories }) => {
  return (
    <Container>
      {categories.map((i) => (
        <Tag key={i.id} id={i.id} text={i.title} />
      ))}
    </Container>
  );
};

export default TagsList;

const Container = styled.div`
  display: flex;
  gap: 12px;
`;
