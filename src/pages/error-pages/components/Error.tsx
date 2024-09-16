import Center from "@components/commons/Center";
import Lottie from "lottie-react";
import Text from "@components/commons/Text";
import cat from "@assets/lotties/cat.json";

interface Props {
  code: string | number;
  description: string;
}

export function Error({ code, description }: Props) {
  return (
    <Center>
      <div className="flex flex-col items-center w-[300px] text-center">
        <Lottie animationData={cat} />
        <h1 className="text-8xl">{code}</h1>
        <Text className="text-muted-foreground">{description}</Text>
      </div>
    </Center>
  );
}
