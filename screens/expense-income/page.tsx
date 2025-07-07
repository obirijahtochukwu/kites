import React, { useState } from "react";
import { ScreenWrapper } from "../../components/screen-wrapper";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import IconBox from "../../components/icon-box";
import { Texts } from "../../components/text";
import { Icons } from "../../components/icons";
import { Buttons } from "../../components/buttons";
import { data } from "../select-category/mock-data";
import { useNavigation } from "@react-navigation/native";

export default function ExpenseIncomeScreen() {
  const { navigate } = useNavigation();
  const [tab, setTab] = useState("Expenses");

  return (
    <ScreenWrapper hideHorizontalPadding>
      <>
        <View className="px-5">
          <View className="flex-row items-center justify-between w-full">
            <IconBox left Icon={Icons.arrow} />
            <Texts.primary
              title={tab == "Expenses" ? "Add Expense" : "Add Income"}
            />
            <View className=" invisible">
              <IconBox Icon={Icons.notification} />
            </View>
          </View>
          <View className="w-full p-1 mt-5 rounded-full bg-white h-[58px] flex-row">
            {["Expenses", "Income"].map((name) => (
              <View
                key={name}
                className={`flex-1 flex-row items-center justify-center rounded-full h-full ${
                  tab == name ? " bg-secondary" : ""
                }`}
              >
                <Text
                  className={`${
                    tab == name ? " text-white" : " text-dark"
                  } text-[18px] font-boldm`}
                >
                  {name}
                </Text>
              </View>
            ))}
          </View>
        </View>
        <View className="flex-col mb-20 mt-16 items-center w-full">
          <TextInput
            className="w-full text-center text-[34px] font-boldm text-dark"
            value="$189.5"
          />
          <Text className="text-sm font-normal text-grey">Enter Amount</Text>
        </View>
        <View className="mt-auto h-20">
          <ScrollView
            horizontal={true}
            className="flex-1"
            contentContainerStyle={{ paddingHorizontal: 40 }}
            showsHorizontalScrollIndicator={false}
          >
            <View className="flex-row gap-2">
              {data.map(({ name, Icon }) => (
                <TouchableOpacity
                  onPress={() => navigate("SelectCategoryScreen")}
                  key={name}
                  className="flex-row items-center gap-1 py-2 px-4 mr-3 h-12 rounded-full bg-white"
                >
                  <Icon width={24} height={24} className="w-8 h-8" />
                  <Text className="text-sm font-normal text-dark">{name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
        <View className="px-5 w-full">
          <Buttons.primary
            title={tab == "Expenses" ? "Add Expense" : "Add Income"}
          />
        </View>
      </>
    </ScreenWrapper>
  );
}
