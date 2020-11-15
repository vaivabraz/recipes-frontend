import React from "react";
import styled from "styled-components";
import { RecipeCard } from "../";
import { RecipesListHardcoded } from "../../hardcodedData";

const RecipesList = () => {
    return (
        <MainContainer>
            <TitleContainer>
                <h1>Receptai</h1>
            </TitleContainer>
            <List>
                {RecipesListHardcoded.map((recipe) => (
                    <RecipeCard key={recipe.slug} recipe={recipe} />
                ))}
            </List>
        </MainContainer>
    );
};

const MainContainer = styled.main``;

const TitleContainer = styled.div`
    height: 6rem;
    align-items: center;
    justify-content: center;
`;

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

export default RecipesList;
