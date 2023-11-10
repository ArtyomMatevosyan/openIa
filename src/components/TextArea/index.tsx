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
    const response = await openai.images.generate({
      prompt: text,
      size: "256x256",
      n: 1,
    });
    setImage(response.data[0].url || "");
    setIsLoadingImage(false);
  };

  const sendRequest = async (content: string) => {
    setIsLoading(true);
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
    setIsLoading(false);
    getImage(title);
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
      <SendButton onClick={() => sendRequest(textAreaValue)}>Send</SendButton>
    </RequestContent>
  );
};
