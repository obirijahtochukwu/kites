import React from "react";
import { ScreenWrapper } from "./../../components/screen-wrapper";
import { Text, TextInput, View } from "react-native";
import { Texts } from "../../components/text";
import IconBox from "../../components/icon-box";
import { Icons } from "../../components/icons";
import { CATEGORIES } from "./mock-data";

export default function SelectCategoryScreen() {
  return (
    <ScreenWrapper>
      <View className="w-full">
        <View className="flex-row items-center justify-between">
          <IconBox left Icon={Icons.arrow} />
          <Texts.primary title="Select Category" />
          <View className=" invisible">
            <IconBox Icon={Icons.notification} />
          </View>
        </View>
        <View className="flex-row items-center gap-2 h-[52px] w-full bg-white rounded-full px-3.5 my-6">
          <Icons.search />
          <TextInput
            className="flex-1 h-full text-sm font-normal text-dark"
            placeholder="Search for Categories"
          />
        </View>
        <View className="flex-col gap-4">
          {CATEGORIES.map((prop, idx) => (
            <View key={idx} className="flex-row">
              {prop.row.map(({ name, Icon }, idx) => (
                <View key={idx} className="flex-1">
                  <View className=" h-16 w-16 bg-white rounded-2xl flex-row items-center justify-center mx-auto mb-2">
                    <Icon />
                  </View>
                  <Text className=" text-center text-sm font-normal text-dark">
                    {name}
                  </Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
    </ScreenWrapper>
  );
}
