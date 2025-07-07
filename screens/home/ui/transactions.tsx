import React from "react";
import { Text, View } from "react-native";
import { TRANSACTIONS } from "../mock-data";
import { Icons } from "../../../components/icons";
const chartData = [
  { value: 40, color: "#4f46e5", label: "Electronics" }, // Indigo
  { value: 30, color: "#10b981", label: "Clothing" }, // Emerald
  { value: 20, color: "#f59e0b", label: "Books" }, // Amber
  { value: 10, color: "#ef4444", label: "Other" }, // Red
];

export default function Transactions() {
  return (
    <>
      <View className=" flex-row items-center justify-between mt-5 mb-4">
        <Text className=" text-base font-semibold text-dark">
          Recent Transactions
        </Text>
        <Text className=" text-sm font-medium text-grey">See All</Text>
      </View>

      <View className="flex-col gap-3 pb-20">
        {TRANSACTIONS.map(({ title, date, amount, Icon }) => (
          <View
            key={title}
            className="flex-row items-center gap-4 bg-white rounded-2xl p-3.5"
          >
            <Icon />
            <View className=" flex-col gap-1">
              <Text className=" text-sm font-semibold text-dark">{title}</Text>
              <Text className=" text-xs font-normal text-grey">{date}</Text>
            </View>
            <View className="flex-row items-center gap-2 ml-auto">
              <Text className=" font-normal text-sm text-danger">
                -$5,631.22
              </Text>
              <Icons.arrow />
            </View>
          </View>
        ))}
      </View>
    </>
  );
}
