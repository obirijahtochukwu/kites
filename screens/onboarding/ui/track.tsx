import React from "react";
import { Image, View } from "react-native";
import IntroTexts from "../../../components/intro-texts";
import { x, y } from "../../../lib/utils";

export default function Track() {
  return (
    <>
      <View
        style={{ marginTop: y(100), height: y(392), width: x(353) }}
        className="bg-gren-400 flex-col items-end justify-end ml-auto"
      >
        <Image
          source={require("../../../assets/track.png")}
          className=" h-full"
        />
      </View>
      <IntroTexts
        title="Track your Spending"
        desc="Track and analyse spending immediately through our bank connection."
      />
    </>
  );
}
