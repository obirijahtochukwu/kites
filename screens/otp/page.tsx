import React from "react";
import { Text, TextInput, View } from "react-native";
import { Icons } from "../../components/icons";
import { Buttons } from "../../components/buttons";

export default function OtpScreen() {
  return (
    <View
      className="pt-28 pb-10 px-5 h-full flex-col
      items-center"
    >
      <View className="mx-auto">
        <Icons.otp />
      </View>
      <Text className="mt-10 text-[22px] font-boldm text-dark text-center">
        Set Your Secure PIN
      </Text>
      <View className="px-10">
        <Text className="mb-7 mt-2 text-center text-base font-normal text-grey">
          Add a 4 digit PIN to protect your wallet and quick access.
        </Text>
      </View>
      <View className=" flex-row gap-3 mb-auto">
        {[0, 0, 0, 0].map((e, idx) => (
          <TextInput
            key={idx}
            defaultValue={`${e}`}
            className="p-3.5 border text-center border-dark/15 flex-1 rounded-2xl h-14"
          />
        ))}
      </View>
      <Buttons.primary title="Set Pin" />
    </View>
  );
}
