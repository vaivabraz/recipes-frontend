import React from "react";
import styled from "styled-components";
import { Colors } from "../../constants";
import { useRouter } from "next/router";

interface IRecipeCard {
    recipe: {
        image: string;
        title: string;
        slug: string;
    };
}

const RecipeCard = ({ recipe }: IRecipeCard) => {
    const router = useRouter();
    const image = recipe?.image || "/salad.jpg";
    const title = recipe.title;

    const handleOnClick = () => {
        router.replace(`/recipes/${recipe.slug}`);
    };
    return (
        <Card onClick={handleOnClick}>
            <TitleContainer>
                <Title>{title}</Title>
            </TitleContainer>
            <Image src={image} title={title} alt={title} />
        </Card>
    );
};

const Card = styled.button`
    background-color: white;
    border: 1px ${Colors.Border} solid;
    width: 21rem;
    height: 30rem;
    margin: 0.5rem;

    &:hover {
        border: 1px ${Colors.DarkBorder} solid;
        background-color: ${Colors.SoftGrey};
        text-shadow: 0 0 0.3px black;
    }
`;

const Image = styled.img`
    border: 1px ${Colors.Border} solid;
    max-width: 92%;
    &:hover {
        max-width: 98%;
    }
`;

const TitleContainer = styled.div`
    height: 7.5rem;
    padding: 0.5rem;
    align-items: center;
    justify-content: center;
    display: flex;
`;

const Title = styled.p``;

export default RecipeCard;
