import React from "react";
import { Text, View } from "react-native";
import { x, y } from "../lib/utils";

export default function IntroTexts({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <View style={{ paddingHorizontal: x(32) }} className=" mt-auto">
      <Text
        style={{ fontSize: x(22) }}
        className="font-boldm text-dark text-center"
      >
        {title}
      </Text>
      <Text
        style={{ marginTop: y(8), lineHeight: x(24) }}
        className="text-center font-normal text-base"
      >
        {desc}
      </Text>
    </View>
  );
}
