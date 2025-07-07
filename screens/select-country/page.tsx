import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Texts } from "../../components/text";
import { CURRENCIES } from "./mock-data";
import { ScreenWrapper } from "../../components/screen-wrapper";

export default function SelectCountryScreen() {
  const [currency, setCurrency] = useState(CURRENCIES[4].name);

  return (
    <ScreenWrapper>
      <>
        <Texts.primary title="Select Currency" />
        <View className=" flex-1 w-full rounded-3xl bg-white mt-12 p-3">
          <TextInput
            className="h-[52px] w-full rounded-2xl p-3.5 border border-[#1509332B] mt-1.5 text-base font-normal bg-white text-dark"
            placeholder="Search Currency"
          />
          {CURRENCIES.map(({ name }) => (
            <TouchableOpacity
              onPress={() => setCurrency(name)}
              key={name}
              className=" flex-row items-center gap-4 p-3"
            >
              <View
                className={`h-5 w-5 rounded-full flex-row items-center justify-center border ${
                  currency == name ? " border-dark" : "border-grey"
                }`}
              >
                {currency == name ? (
                  <View className="bg-dark rounded-full h-2.5 w-2.5" />
                ) : null}
              </View>
              <Text
                className={`${
                  currency == name ? "text-dark" : "text-grey"
                } text-base font-normal`}
              >
                {name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </>
    </ScreenWrapper>
  );
}
