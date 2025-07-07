import React from "react";
import { ScreenWrapper } from "../../components/screen-wrapper";
import { Text, View } from "react-native";
import IconBox from "../../components/icon-box";
import { Icons } from "../../components/icons";
import { formattedDate } from "./mock-data";
import Transactions from "./ui/transactions";

export default function HomeScreen() {
  return (
    <ScreenWrapper>
      <View className="w-full">
        <View className="flex-row items-center justify-between mb-10">
          <IconBox Icon={Icons.setting} />
          <View className="flex-row items-center gap-3">
            <Icons.calender />
            <Text className="text-base font-medium text-dark">
              {formattedDate}
            </Text>
          </View>
          <IconBox Icon={Icons.notification} />
        </View>
        <Text className="text-center text-sm font-normal text-grey tracking-wider">
          This Month Spend
        </Text>
        <Text className="text-center text-dark text-[34px] font-boldm -tracking-[1px]">
          $313.31
        </Text>
        <View className="flex-row items-center justify-center gap-1">
          <Icons.tradeDown />
          <Text className=" text-xs font-normal text-dark">
            67% below last month
          </Text>
        </View>
        <View className="flex-row items-center gap-3 bg-white rounded-2xl p-3.5 mt-10 mb-5">
          <View className="flex-row items-center justify-center bg-gray rounded-full h-11 w-11">
            <Icons.wallet />
          </View>
          <Text className=" text-sm font-normal text-dark">
            Spending Wallet
          </Text>
          <View className="flex-row items-center gap-3 ml-auto">
            <Text className=" font-normal text-sm text-dark">$5,631.22</Text>
            <Icons.arrow />
          </View>
        </View>
        <Transactions />
      </View>
    </ScreenWrapper>
  );
}
