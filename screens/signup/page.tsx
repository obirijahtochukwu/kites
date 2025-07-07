import React from "react";
import { Text, View } from "react-native";
import { Icons } from "../../components/icons";
import Form from "./ui/form";

export default function SignupScreen() {
  return (
    <View
      className="pt-28 pb-10 px-5 h-full flex-col
   items-center"
    >
      <View className="mx-auto">
        <Icons.lock />
      </View>
      <Text className="mt-6 text-[22px] font-boldm text-dark text-center">
        Get Started with Cashio
      </Text>
      <Text className="mb-7 mt-2 text-base font-normal text-grey">
        Create your secure wallet in just a few steps.
      </Text>
      <Form />
      <View className="mt-auto flex-row flex-wrap items-center gap-1 justify-center">
        <Text className=" text-base font-normal text-grey">
          By creating an account, you agree to our
        </Text>
        <Text className=" text-base font-medium text-blue">
          Terms & Conditions and Privacy Policy.
        </Text>
      </View>
    </View>
  );
}
