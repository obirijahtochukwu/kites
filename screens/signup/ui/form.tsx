import React from "react";
import { Text, View } from "react-native";
import { FORM, SOCIALS } from "../mock-data";
import { Input } from "../../../components/inputs";
import { Buttons } from "../../../components/buttons";

export default function Form() {
  return (
    <>
      <View className="flex-col gap-3 w-full mb-6">
        {FORM.map((prop, idx) => (
          <View key={idx} className="">
            <Text className="text-sm font-normal capitalize text-grey">
              {prop.name}
            </Text>
            ytyu
            {idx < 1 ? (
              <Input.email placeholder={prop.placeholder} />
            ) : (
              <Input.password placeholder={prop.placeholder} />
            )}
          </View>
        ))}
      </View>
      <Buttons.primary title="Sign Up" />
      <View className="mt-5 flex-row items-center gap-1">
        <Text className=" text-base font-normal text-grey">
          Already have an account?
        </Text>
        <Text className=" text-base font-medium text-blue">Log In</Text>
      </View>
      <View className="flex-row items-center my-6 gap-3">
        <View className="h-px flex-1 bg-dark/15" />
        <Text className=" text-base font-normal text-grey">Or</Text>
        <View className="h-px flex-1 bg-dark/15" />
      </View>
      <View className="flex-row items-center gap-3 mb-10">
        {SOCIALS.map(({ name, Icon }) => (
          <View
            key={name}
            className="flex-1 flex-row items-center justify-center gap-3 h-[50px] rounded-full bg-white"
          >
            <Icon />
            <Text className=" text-base font-medium text-dark">{name}</Text>
          </View>
        ))}
      </View>
    </>
  );
}
