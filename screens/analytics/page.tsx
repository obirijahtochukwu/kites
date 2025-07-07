import React from "react";
import { ScreenWrapper } from "./../../components/screen-wrapper";
import { Text, View } from "react-native";
import { Texts } from "../../components/text";
import GroupChart from "../../components/group-chart";
import { ANALYTICS, HISTORY } from "./mock-data";

export default function AnalyticScreen() {
  return (
    <ScreenWrapper>
      <View className="w-full">
        <Texts.primary title="Analytics" />
        <GroupChart />
        <View className="flex-row items-center gap-3 p-3 bg-white rounded-2xl mt-4 mb-5">
          {ANALYTICS.map(({ color, amount, label, Icon }) => (
            <View
              key={label}
              className=" flex-1 flex-row items-center gap-3 bg-gray p-2 rounded-xl"
            >
              <View
                style={{ backgroundColor: color }}
                className="h-11 w-11 flex-row items-center justify-center rounded-xl"
              >
                <Icon />
              </View>
              <View>
                <Text className=" text-base font-boldm text-dark">
                  {amount}
                </Text>
                <Text className=" text-grey text-xs font-normal">{label}</Text>
              </View>
            </View>
          ))}
        </View>
        <Text className=" text-[17px] font-semibold text-dark">History</Text>
        <View className=" flex-col gap-3 mt-4">
          {HISTORY.map((prop, idx) => (
            <View key={idx} className="bg-white p-3.5 rounded-2xl">
              <View className="flex-row justify-between items-center">
                <Text className="text-xs font-normal text-grey">Date</Text>
                <Text className=" text-success font-medium text-sm">
                  {prop.in}
                </Text>
              </View>
              <View className="flex-row justify-between items-center mt-1">
                <Text className=" text-sm font-medium text-dark">
                  {prop.date}
                </Text>
                <Text className=" text-danger font-medium text-sm">
                  {prop.in}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScreenWrapper>
  );
}
