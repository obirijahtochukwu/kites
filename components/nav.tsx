// components/Nav.tsx
import React, { useState } from "react";
import { View, TouchableOpacity, Text, Dimensions } from "react-native";
import { Icons } from "./icons";

const SCREENS = [
  { name: "Home", route: "Home", Icon: Icons.home },
  {
    name: "Transaction",
    route: "Transactions",
    Icon: Icons.transactionHistory,
  },
  { name: "Analytics", route: "Analytics", Icon: Icons.Analytics },
  { name: "Account", route: "Profile", Icon: Icons.account },
];

export default function Nav({ state, navigation }) {
  const [display, setDisplay] = useState(false);
  const { height, width } = Dimensions.get("window");

  return (
    <>
      {/* Floating Action Button */}
      <TouchableOpacity
        onPress={() => setDisplay(!display)}
        style={{ top: height - 136, left: (width - 56) / 2 }}
        className="absolute h-14 w-14 bg-dark rounded-full z-10 flex-row items-center justify-center"
      >
        <Icons.Add width={20} height={20} color={"white"} />
        {display ? (
          <View className="relative">
            <View
              style={{ elevation: 1 }}
              className="absolute h-[52px] w-[52px] bg-white rounded-full z-10 left-4 bottom-7 flex-row items-center justify-center"
            >
              <Icons.casout />
            </View>
            <View
              style={{ elevation: 1 }}
              className="absolute h-[52px] w-[52px] bg-white rounded-full z-10 right-10 bottom-7 flex-row items-center justify-center"
            >
              <Icons.cashin />
            </View>
          </View>
        ) : null}
      </TouchableOpacity>

      {/* Navigation Background */}
      <View style={{ top: height - 108 }} className="absolute">
        <Icons.nav width={width} height={108} />
      </View>

      {/* Tab Items */}
      <View
        style={{ top: height - 85 }}
        className="absolute flex-row items-center w-full gap-7 pb-10 px-5"
      >
        {SCREENS.map(({ Icon, name, route }, idx) => {
          const isActive = state.index === idx;

          return (
            <TouchableOpacity
              key={idx}
              onPress={() => navigation.navigate(route)}
              className={`${idx == 2 && "ml-auto"} flex-col items-center`}
              activeOpacity={0.7}
            >
              <Icon
                width={idx === 0 ? 25 : 20}
                height={idx === 0 ? 20 : 20}
                fill={isActive ? "#6366F1" : "white"}
                stroke={isActive ? "#6366F1" : "black"}
              />
              <Text
                className="mt-2 text-xs"
                style={{ color: isActive ? "#6366F1" : "#000000" }}
              >
                {name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
}
