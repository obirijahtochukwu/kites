import { Button, Text, TouchableOpacity, View } from "react-native";

export const Buttons = {
  primary: ({ title }: { title: string }) => (
    <TouchableOpacity className=" w-full h-[50px] rounded-full bg-secondary flex-row items-center justify-center">
      <Text className=" text-white font-medium text-base">{title}</Text>
    </TouchableOpacity>
  ),
};
