import React from "react";
import { ScreenWrapper } from "../../components/screen-wrapper";
import { Image, View } from "react-native";
import IconBox from "../../components/icon-box";
import { Texts } from "../../components/text";
import { Icons } from "../../components/icons";
import Input from "./ui/input";
import { Buttons } from "../../components/buttons";

export default function EditProfileScreen() {
  return (
    <ScreenWrapper>
      <>
        <View className="flex-row items-center justify-between w-full">
          <IconBox left Icon={Icons.arrow} />
          <Texts.primary title="Edit profile" />
          <View className=" invisible">
            <IconBox Icon={Icons.notification} />
          </View>
        </View>
        <View className=" relative mt-7 mx-auto h-[102px] w-[102px] bg-white rounded-full">
          <Image
            source={require("../../assets/user.png")}
            className=" w-full h-full rounded-full"
          />
          <View className=" absolute -right-1 -bottom-1 h-10 w-10 bg-secondary rounded-full flex-row items-center justify-center">
            <Icons.camera />
          </View>
        </View>
        <View className="p-4 mt-10 bg-white rounded-3xl w-full mb-auto">
          <View className="flex-row gap-3.5 mb-4">
            <Input name="First name" placeholder="Ethan " />
            <Input name="Last name" placeholder="Cole" />
          </View>
          <Input name="Email" placeholder="ethancoleux@gmail.com " />
        </View>
        <Buttons.primary title="Update" />
      </>
    </ScreenWrapper>
  );
}
