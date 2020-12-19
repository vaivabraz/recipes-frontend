import { Button, CategoriesBar } from "../../components";
import styled from "styled-components";

const SideContainer = () => {
  return (
    <Container>
      <ButtonContainer>
        <Button action={() => {}} text="Pridėti naują receptą" />
      </ButtonContainer>
      {/* <SearchContainer /> */}
      <CategoriesBar />
    </Container>
  );
};

const Container = styled.div`
  /* background-color: #f5f4f4; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
`;

const SearchContainer = styled.div`
  height: 6rem;
`;
const ButtonContainer = styled.div`
  margin: 0.5rem;
`;

export default SideContainer;
