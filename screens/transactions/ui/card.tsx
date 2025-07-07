import React, { JSX } from "react";
import { Text, View } from "react-native";
import { Icons } from "../../../components/icons";
import { SvgProps } from "react-native-svg";

export default function Card({
  Icon,
  name,
  date,
  amount,
}: {
  Icon: (e: SvgProps) => JSX.Element;
  name: string;
  date: string;
  amount: string;
}) {
  return (
    <View className=" flex-row items-center gap-4">
      <View className=" bg-gray h-11 w-11 rounded-full flex-row items-center justify-center">
        <Icon />
      </View>
      <View className="flex-col gap-1">
        <Text className=" text-sm text-dark font-semibold">{name}</Text>
        <Text className="text-xs font-normal text-grey">{date}</Text>
      </View>
      <View className="flex-row items-center gap-2 ml-auto">
        <Text className=" font-normal text-sm text-dark">{amount}</Text>
        <Icons.arrow />
      </View>
    </View>
  );
}
