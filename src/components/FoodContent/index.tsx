import { FC } from "react";
import { FoodCardProps } from "../../types";
import { LoadingSpinner } from "../Loading";
import {
  Description,
  Difficulty,
  FoodContentContainer,
  FoodImageContainer,
  FoodInfoWrapper,
  FoodTitle,
  ImageTitle,
  MakingSteps,
  Step,
  TimeWrapper,
} from "./style";

export const FoodCard: FC<FoodCardProps> = ({
  recipe,
  image,
  isLoadingImage,
}) => {
  return (
    <FoodContentContainer>
      <FoodImageContainer>
        {isLoadingImage ? <LoadingSpinner /> : <img src={image} alt="food" />}
        {/* <img src={image} alt="food" />
        <ImageTitle>cooking with AMA</ImageTitle> */}
      </FoodImageContainer>
      <FoodInfoWrapper>
        <FoodTitle>{recipe?.title}</FoodTitle>
        <Description>{recipe?.description}</Description>
        <TimeWrapper>{recipe?.timeToCook}</TimeWrapper>
        <Difficulty>{recipe?.difficulty}</Difficulty>
        <MakingSteps>
          {recipe?.steps?.map((step, index) => (
            <Step key={step}>
              {`${index + 1}`} {step}
            </Step>
          ))}
        </MakingSteps>
      </FoodInfoWrapper>
    </FoodContentContainer>
  );
};
