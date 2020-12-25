import { Layout } from "../components";
import styled from "styled-components";

const CreateNewRecipe = () => {
  return (
    <Layout>
      <BodyContainer>
        <Title>
          <h1>Sukurti nauja recepta</h1>
        </Title>
      </BodyContainer>
    </Layout>
  );
};

const BodyContainer = styled.div``;

export default CreateNewRecipe;

const Title = styled.div`
  padding: 4rem 3rem;
`;
