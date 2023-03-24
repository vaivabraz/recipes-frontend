import {
  Button,
  ButtonTypeMap,
  ExtendButtonBase,
  TextField,
} from "@mui/material";
import styled from "styled-components";
import CreateIcon from "@mui/icons-material/Create";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { ParsedUrlQueryInput } from "querystring";
import { reactQueryKeys } from "../../constants/reactQueryKeys";
import { BREAKPOINTS, Tag, CategoriesList } from "../../ui";
import { useScreenSizeUp } from "../../utils";
import { UserService } from "../../services";

type SubMenuProps = {
  query?: ParsedUrlQueryInput;
};

const SubMenu = ({ query }: SubMenuProps) => {
  const { data } = useQuery([reactQueryKeys.user], UserService.getCurrentUser);

  const selectedCategory = data?.userCategories?.find(
    (j) => j.id === query.categories
  );

  const isBigScreen = useScreenSizeUp("md");

  return (
    <Container>
      <FirstLineContainer>
        <h2>Receptai</h2>
        <RightColumnContainer>
          <Link href="/recipes/createNewRecipe">
            {isBigScreen ? (
              <ButtonStyled variant="contained">Sukurti nauja</ButtonStyled>
            ) : (
              <ButtonStyled variant="contained" size="small">
                <CreateIcon />
              </ButtonStyled>
            )}
          </Link>
          <SearchContainer>
            <TextField label="Paieska..." fullWidth size="small" />
          </SearchContainer>
        </RightColumnContainer>
      </FirstLineContainer>
      <CategoriesList categoriesList={data.userCategories} />
      {selectedCategory && (
        <SecondLineContainer>
          <Tag text={selectedCategory?.title} removable />
        </SecondLineContainer>
      )}
    </Container>
  );
};

export default SubMenu;

const Container = styled.div`
  min-height: 112px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 36px;
  align-items: center;
  width: 100%;
  @media (max-width: ${BREAKPOINTS.small}) {
    padding: 24px 24px 12px 24px;
  }
`;

const SearchContainer = styled.div`
  padding-left: 12px;
  max-width: 230px;
  height: 100%;
  @media (max-width: ${BREAKPOINTS.small}) {
    width: 100%;
    max-width: unset;
  }
`;

const RightColumnContainer = styled.div`
  display: flex;
  @media (max-width: ${BREAKPOINTS.small}) {
    width: 100%;
  }
`;

const FirstLineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  width: 100%;
  gap: 16px;
  padding-bottom: 6px;
  @media (max-width: ${BREAKPOINTS.small}) {
    flex-direction: column;
  }
`;

const SecondLineContainer = styled.div`
  display: flex;
  width: 100%;
`;

const ButtonStyled: ExtendButtonBase<ButtonTypeMap<{}, "button">> = styled(
  Button
)`
  && {
    min-width: unset;
  }
`;
