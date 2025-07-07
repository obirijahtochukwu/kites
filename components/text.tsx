import { Text } from "react-native";

export const Texts = {
  primary: ({ title }: { title: string }) => (
    <Text className="text-[22px] font-boldm text-dark text-center">
      {title}
    </Text>
  ),
};
