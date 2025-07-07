import React, { useRef, useState } from "react";
import {
  Button,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Icons } from "../../components/icons";
import OurFinances from "./ui/our-finances";
import InvitePeople from "./ui/invite-people";
import Track from "./ui/track";
import { x, y } from "../../lib/utils";
import MainLayout from "../../components/main-layout";
import { useNavigation } from "@react-navigation/native";

export default function OnboardingScreen() {
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [<OurFinances />, <InvitePeople />, <Track />];
  const { width: screenWidth } = Dimensions.get("window");
  const { navigate } = useNavigation();

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / screenWidth);
    setCurrentIndex(newIndex);
  };

  return (
    <MainLayout>
      <View style={{ paddingBottom: y(66) }} className="h-full w-full flex-col">
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          {slides.map((slide, index) => (
            <View key={index} style={{ width: screenWidth }}>
              {slide}
            </View>
          ))}
        </ScrollView>
        <View style={{ paddingHorizontal: x(20) }} className="w-full">
          <View
            style={{ gap: x(8), height: y(4), width: x(64), marginTop: y(32) }}
            className="flex-row items-center justify-center mx-auto"
          >
            {slides.map((_, index) => (
              <View
                key={index}
                className={`${
                  currentIndex == index ? "bg-secondary" : "bg-grey opacity-40"
                }  rounded-full`}
                style={{
                  height: y(8),
                  width: currentIndex == index ? x(28) : x(8),
                }}
              />
            ))}
          </View>
          <TouchableOpacity
            onPress={() => navigate("Home")}
            style={{ gap: x(8), height: y(48), marginTop: y(48) }}
            className="flex-row items-center justify-center w-full rounded-full bg-secondary"
          >
            <Text className=" text-base font-medium text-white">
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </MainLayout>
  );
}
