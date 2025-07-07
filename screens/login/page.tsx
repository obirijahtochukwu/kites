import React from "react";
import { Text, View } from "react-native";
import { Icons } from "../../components/icons";
import Form from "./ui/form";

export default function LoginScreen() {
  return (
    <View
      className="pt-28 pb-10 px-5 h-full flex-col
   items-center"
    >
      <View className="mx-auto">
        <Icons.user />
      </View>
      <Text className="mt-6 text-[22px] font-boldm text-dark text-center">
        Welcome back to Cashio
      </Text>
      <View className="px-7">
        <Text className="mb-7 mt-2 text-base font-normal text-grey text-center">
          Securely access your wallet and manage your money with ease.
        </Text>
      </View>
      <Form />
      <View className=" flex-row items-center gap-1">
        <Text className=" text-base font-normal text-grey">
          Don’t have an account?
        </Text>
        <Text className=" text-base font-medium text-blue">Sign Up</Text>
      </View>
    </View>
  );
}
