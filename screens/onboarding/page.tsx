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
import { Icons } from "../../components/icons";
import OurFinances from "./ui/our-finances";
import InvitePeople from "./ui/invite-people";
import Track from "./ui/track";
import { x, y } from "../../lib/utils";

export default function OnboardingScreen() {
  return (
    <View style={{ paddingBottom: y(66) }} className="h-full w-full flex-col">
      {/* <OurFinances /> */}
      <InvitePeople />
      {/* <Track /> */}
      <View style={{ paddingHorizontal: x(20) }} className="w-full">
        <View
          style={{ gap: x(8), height: y(4), width: x(64), marginTop: y(32) }}
          className="flex-row items-center justify-center mx-auto"
        >
          <View
            className=" bg-secondary rounded-full"
            style={{ height: y(8), width: x(28) }}
          />
          <View
            className=" bg-grey opacity-40 rounded-full"
            style={{ height: y(8), width: x(8) }}
          />
          <View
            className=" bg-grey opacity-60 rounded-full"
            style={{ height: y(8), width: x(8) }}
          />
        </View>
        <View
          style={{ gap: x(8), height: y(48), marginTop: y(48) }}
          className="flex-row items-center justify-center w-full rounded-full bg-secondary"
        >
          <Text className=" text-base font-medium text-white">Get Started</Text>
        </View>
      </View>
    </View>
  );
}
