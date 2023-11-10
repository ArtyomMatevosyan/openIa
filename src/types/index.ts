export type Recipe = {
  description?: string;
  difficulty?: string;
  image?: string;
  steps?: string[];
  timeToCook?: string;
  title?: string;
};

export type FoodCardProps = {
  recipe: Recipe;
  image: string;
  isLoadingImage: boolean;
};

export type TextAreaProps = {
  setReceivedData: React.Dispatch<React.SetStateAction<string | null>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setImage: React.Dispatch<React.SetStateAction<string>>;
  setIsLoadingImage: React.Dispatch<React.SetStateAction<boolean>>;
};
