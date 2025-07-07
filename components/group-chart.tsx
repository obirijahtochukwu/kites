import React from "react";
import { Text, View } from "react-native";
import { Icons } from "./icons";
import GroupedBarChart from "./bar-chart";

const TRANSACTIONTYPES = [
  { name: "Income", color: "#8552FF" },
  { name: "Expense", color: "#ABE39E" },
];

export default function GroupChart() {
  return (
    <View className="mt-6 w-full py-4 bg-white rounded-3xl flex-col gap-6">
      <View className=" flex-row items-center gap-2 px-4">
        <View className=" flex-row items-center gap-2 py-3 px-5 mr-auto border-dark/20 border rounded-full">
          <Text className="text-xs font-normal text-dark">Monthly</Text>
          <View className=" rotate-90">
            <Icons.arrow />
          </View>
        </View>
        {TRANSACTIONTYPES.map((prop) => (
          <View key={prop.name} className=" flex-row items-center gap-1">
            <View
              style={{ backgroundColor: prop.color }}
              className="h-2 w-2 rounded-full"
            />
            <Text className=" text-xs font-normal text-dark">{prop.name}</Text>
          </View>
        ))}
      </View>
      <GroupedBarChart />
    </View>
  );
}
