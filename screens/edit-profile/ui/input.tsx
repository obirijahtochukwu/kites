import React from "react";
import { Text, TextInput, View } from "react-native";

export default function Input({
  name,
  placeholder,
}: {
  name: string;
  placeholder: string;
}) {
  return (
    <View className="flex-1">
      <Text className=" text-sm font-normal text-grey">{name}</Text>
      <TextInput
        placeholder={placeholder}
        className="text-base font-normal text-dark border border-dark/15 rounded-xl p-3.5 mt-2"
      />
    </View>
  );
}
