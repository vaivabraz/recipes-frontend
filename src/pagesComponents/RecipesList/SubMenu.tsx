import { Button, TextField } from "@mui/material";
import styled from "styled-components";
import CreateIcon from "@mui/icons-material/Create";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { ParsedUrlQueryInput } from "querystring";
import { reactQueryKeys } from "../../constants/reactQueryKeys";
import { GetMeApiResponse } from "../../services/User";
import { BREAKPOINTS, Tag } from "../../ui";
import { useScreenSizeUp } from "../../utils";
import { UserService } from "../../services";

type SubMenuProps = {
  query?: ParsedUrlQueryInput;
};

const SubMenu = ({ query }: SubMenuProps) => {
  const queryClient = useQueryClient();
  // const { userCategories } = queryClient.getQueryData<GetMeApiResponse>([
  //   reactQueryKeys.user,
  // ]);

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
              <Button variant="contained">Sukurti nauja</Button>
            ) : (
              <Button variant="contained" size="large">
                <CreateIcon />
              </Button>
            )}
          </Link>
          <SearchContainer>
            <TextField label="Paieska..." fullWidth />
          </SearchContainer>
        </RightColumnContainer>
      </FirstLineContainer>
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
`;

const SearchContainer = styled.div`
  padding-left: 24px;
  max-width: 230px;
  height: 100%;
`;

const RightColumnContainer = styled.div`
  display: flex;
`;

const FirstLineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  width: 100%;
  gap: 12px;
  padding-bottom: 12px;
  @media (max-width: ${BREAKPOINTS.small}) {
    flex-direction: column;
  }
`;

const SecondLineContainer = styled.div`
  display: flex;
  width: 100%;
`;
