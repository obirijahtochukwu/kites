import React from "react";
import { Text, View } from "react-native";
import { FORM } from "../mock-data";
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
      <Buttons.primary title="Log In" />
      <Text className=" text-base font-medium mt-5 text-blue mb-auto">
        Forgot Password?
      </Text>
    </>
  );
}
