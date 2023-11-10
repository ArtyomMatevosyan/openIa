import { FC, useState } from "react";
import OpenAI from "openai";
import { RequestContent, SendButton, TextAreaWrapper } from "./style";
import { TextAreaProps } from "../../types/index";

const openai = new OpenAI({
  apiKey: "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",
  organization: "org-oJqA3X89TZTCik3UCUQadzTQ",
  dangerouslyAllowBrowser: true,
});

export const TextArea: FC<TextAreaProps> = ({
  setReceivedData,
  setIsLoading,
  setImage,
  setIsLoadingImage,
}) => {

  const [textAreaValue, setTextAreaValue] = useState("");

  const getImage = async (text: string) => {
    setIsLoadingImage(true);

    try {
      const response = await openai.images.generate({
        prompt: text,
        size: "256x256",
        n: 1,
      });
      setImage(response.data[0].url || "");
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoadingImage(false);
    }
  };

  const handleClickButton = async (content: string) => {
    setIsLoading(true);
    try {
      const chatCompletion = await openai.chat.completions.create({
        messages: [
          {
            role: "user",
            content: `Can you please create recipe based on this ingredients ${content}.Please reply in json format using this structure title as string, description string, steps array of string and timeToCook as string, difficulty as string and an image url of that food as string`,
          },
        ],
        model: "gpt-3.5-turbo",
      });
      setReceivedData(chatCompletion.choices[0].message.content);
      const title = JSON.parse(
        chatCompletion.choices[0].message.content || ""
      ).title;
      getImage(title);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <RequestContent>
      <TextAreaWrapper
        onChange={(e) => {
          setTextAreaValue(e.target.value);
        }}
        value={textAreaValue}
        rows={4}
        cols={50}
        placeholder="Enter Ingredients"
      />
      <SendButton onClick={() => handleClickButton(textAreaValue)}>
        Send
      </SendButton>
    </RequestContent>
  );
};
