import React from "react";
import { ScreenWrapper } from "../../components/screen-wrapper";
import { Text, View } from "react-native";
import { Texts } from "../../components/text";
import GroupChart from "../../components/group-chart";
import { TRANSACTIONTYPES } from "./mock-data";
import { Icons } from "../../components/icons";
import Card from "./ui/card";
import DonutChart from "../../components/donut-chart";

export default function TransactionScreen() {
  return (
    <ScreenWrapper>
      <View className="w-full">
        <Texts.primary title="Transactions" />
        <GroupChart />
        <View className="my-5 w-full p-4 bg-white rounded-3xl flex-col gap-4">
          {TRANSACTIONTYPES.map((prop) => (
            <Card key={prop.name} {...prop} />
          ))}
        </View>
        <View className="w-full px-4 py-6 bg-white rounded-3xl flex-col gap-5">
          <DonutChart
            value1={300}
            value2={645}
            size={240}
            strokeWidth={15}
            gapAngle={10}
          />
          <View className=" flex-col gap-4">
            <Text className=" text-[17px] font-semibold text-dark">
              Top Spending
            </Text>
            <Card
              Icon={Icons.invoice}
              name="Bills & Utilities"
              date="$120 more than June"
              amount="$301.99"
            />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}
