import React from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Icons } from "../../../components/icons";
import IntroTexts from "../../../components/intro-texts";
import { x, y } from "../../../lib/utils";
// import { Icons } from "../../components/icons";

export default function OurFinances() {
  return (
    <>
      <View style={{ paddingHorizontal: x(20) }}>
        <View style={{ marginTop: y(128), height: y(324) }} className="w-full">
          <View
            style={{ width: x(60), height: y(60) }}
            className="absolute left-1/2 -translate-x-1/2  bg-white rounded-[20px] flex-row justify-center items-center"
          >
            <Icons.shop />
          </View>
          <View
            style={{ width: x(60), height: y(60), top: y(60) }}
            className="absolute top-[60px] left-0 bg-white rounded-[20px] flex-row justify-center items-center"
          >
            <Icons.education />
          </View>
          <View
            style={{ width: x(60), height: y(60), top: y(60) }}
            className="absolute top-[60px] right-0 bg-white rounded-[20px] flex-row justify-center items-center"
          >
            <Icons.home />
          </View>
          <View
            style={{ width: x(60), height: y(60), bottom: y(60), left: x(30) }}
            className="absolute bg-white rounded-[20px] flex-row justify-center items-center"
          >
            <Icons.car />
          </View>
          <View
            style={{ width: x(60), height: y(60), bottom: y(60), right: x(30) }}
            className="absolute bg-white rounded-[20px] flex-row justify-center items-center"
          >
            <Icons.travel />
          </View>
          <View
            style={{ width: x(60), height: y(60) }}
            className="absolute left-1/2 -translate-x-1/2 bottom-0 bg-white rounded-[20px] flex-row justify-center items-center"
          >
            <Icons.speaker />
          </View>
          <View
            style={{ width: x(104), height: y(104) }}
            className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bottom-0 bg-white rounded-full flex-row justify-center items-center"
          >
            <Image source={require("../../../assets/intro.png")} className="" />
          </View>
        </View>
      </View>
      <IntroTexts
        title="Your Finances in One Place"
        desc="Get the big picture on all your money. Connect your bank, track cash,
          or import data."
      />
    </>
  );
}
