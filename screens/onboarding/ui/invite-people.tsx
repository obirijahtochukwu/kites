import React from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { INVITE_PEOPLE } from "../mock-data";
import IntroTexts from "../../../components/intro-texts";
import { x, y } from "../../../lib/utils";

export default function InvitePeople() {
  return (
    <>
      <View
        style={{ marginTop: y(150), gap: y(14), height: y(329) }}
        className="w-full flex-col items-end justify-end"
      >
        {INVITE_PEOPLE.map(({ Icon, bg, title, desc }, idx) => (
          <View
            key={idx}
            style={{
              right: -(idx + 1) * x(40),
              width: x(353),
              padding: x(14),
              gap: x(7),
            }}
            className="flex-row items-center bg-white rounded-2xl relative"
          >
            <View
              style={{ backgroundColor: bg, width: x(60), height: y(60) }}
              className="flex items-center justify-center rounded-2xl"
            >
              <Icon />
            </View>
            <View>
              <Text
                style={{ fontSize: x(14) }}
                className="text-dark font-semibold"
              >
                {title}
              </Text>
              <Text
                style={{ fontSize: x(12) }}
                className=" text-grey font-normal"
              >
                {desc}
              </Text>
            </View>
          </View>
        ))}
      </View>
      <IntroTexts
        title="Invite Other People"
        desc="Connect all your accounts from any bank. Add
savings, credit cards, PayPal and more."
      />
    </>
  );
}
