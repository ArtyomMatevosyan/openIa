import styled from "styled-components";

export const FoodContentContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const FoodImageContainer = styled.div`
  width: 30%;
  height: 100%;
  background: #dda15e;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
`;
export const FoodInfoWrapper = styled.div`
  width: calc(70% - 24px);
  height: calc(100% - 24px);
  background: #fefae0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 12px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
`;

export const FoodTitle = styled.div`
  font-size: 32px;
`;

export const Description = styled.div`
  font-size: 24px;
`;

export const TimeWrapper = styled.div`
  font-size: 24px;
`;

export const Difficulty = styled.div`
  font-size: 24px;
`;
export const MakingSteps = styled.div``;
export const Step = styled.div``;

export const ImageTitle = styled.div`
  font-size: 48px;
  color: white;
  text-transform: uppercase;
`;
