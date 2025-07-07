import React from "react";
import { ScreenWrapper } from "../../components/screen-wrapper";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Icons } from "../../components/icons";
import { PROFILE_SETTINGS } from "./mock-data";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <ScreenWrapper>
      <View className="w-full">
        <View className="flex-row items-center bg-white p-3.5 rounded-[20px] gap-3">
          <Image
            source={require("../../assets/user.png")}
            className=" w-14 h-14 rounded-full"
          />
          <View className="flex-col gap-0.5">
            <Text className=" text-sm font-semibold text-dark">Ethan Cole</Text>
            <Text className=" text-xs font-normal text-grey">
              ethancoleux@gmail.com
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("EditProfile")}
            className="flex-row items-center ml-auto bg-secondary/15 px-6 py-3 rounded-full gap-3"
          >
            <Text className=" text-sm font-medium text-dark">Edit</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center bg-[#9A75F0] p-4 rounded-[20px] gap-2.5 mt-4">
          <View className="flex-row items-center justify-center h-14 w-14 rounded-full bg-white/20">
            <Image
              source={require("../../assets/premium.png")}
              className=" w-6 h-6 rounded-full"
            />
          </View>
          <View className="">
            <Text className=" text-base font-semibold text-white">
              Premium Account
            </Text>
            <Text className=" text-sm font-normal text-white">
              Enjoy your premium features
            </Text>
          </View>
        </View>
        <View className="flex-col gap-5 mt-6">
          {PROFILE_SETTINGS.map((prop) => (
            <View key={prop.label}>
              <Text className=" text-sm font-normal text-dark">
                {prop.label}
              </Text>
              <View className="bg-white p-4 mt-3 rounded-[20px] w-full">
                {prop.settings.map(({ name, Icon }) => (
                  <View
                    key={name}
                    className="flex-row items-center py-3.5 gap-3"
                  >
                    <Icon width={20} height={20} />
                    <Text className=" text-sm font-normal text-dark mr-auto">
                      {name}
                    </Text>
                    <Icons.arrow width={20} height={20} />
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScreenWrapper>
  );
}
