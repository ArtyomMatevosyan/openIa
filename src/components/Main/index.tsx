import { useState } from "react";
import { FoodCard } from "../FoodContent";
import { LoadingSpinner } from "../Loading";
import { TextArea } from "../TextArea";
import { Content, FooterContent, RecipeContent } from "./styles";

export const Main = () => {
  const [receivedData, setReceivedData] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingImage, setIsLoadingImage] = useState<boolean>(false);
  const [image, setImage] = useState<string>("");

  return (
    <Content>
      <TextArea
        setReceivedData={setReceivedData}
        setIsLoading={setIsLoading}
        setImage={setImage}
        setIsLoadingImage={setIsLoadingImage}
      />
      <RecipeContent>
        {isLoading && <LoadingSpinner />}
        {receivedData && !isLoading && (
          <FoodCard
            recipe={JSON.parse(receivedData || "")}
            image={image}
            isLoadingImage={isLoadingImage}
          />
        )}
      </RecipeContent>
      <FooterContent>&copy; 2023 AMA Consulting. All right is reserved.</FooterContent>
    </Content>
  );
};
