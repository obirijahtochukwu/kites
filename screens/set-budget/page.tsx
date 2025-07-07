import React from "react";
import { ScreenWrapper } from "./../../components/screen-wrapper";
import { Text, TextInput, View } from "react-native";
import { Texts } from "../../components/text";
import { Icons } from "../../components/icons";
import IconBox from "../../components/icon-box";
import { Buttons } from "../../components/buttons";

export default function SetBudgetScreen() {
  return (
    <ScreenWrapper>
      <>
        <View className="flex-row items-center justify-between w-full">
          <IconBox left Icon={Icons.arrow} />
          <Texts.primary title="Set Budget" />
          <View className=" invisible">
            <IconBox Icon={Icons.notification} />
          </View>
        </View>
        <View className="flex-row items-center w-full bg-white gap-3 rounded-2xl p-4 my-6">
          <View className="flex-row items-center justify-center bg-success/10 rounded-xl h-10 w-10">
            <Icons.money />
          </View>
          <View className="flex-col gap-0.5">
            <Text className=" text-grey text-xs font-normal">Total Blanca</Text>
            <Text className="text-base font-boldm text-dark">$450,00</Text>
          </View>
        </View>
        <View className="flex-col mb-auto mt-16 items-center w-full">
          <TextInput
            className="w-full text-center text-[34px] font-boldm text-dark"
            value="$189.5"
          />
          <Text className="text-sm font-normal text-grey">Enter Amount</Text>
        </View>
        <Buttons.primary title="Save" />
      </>
    </ScreenWrapper>
  );
}
