import { JSX } from "react";
import { ScrollView, View } from "react-native";
import MainLayout from "./main-layout";

export const ScreenWrapper = ({
  hideHorizontalPadding,
  children,
}: {
  hideHorizontalPadding?: boolean;
  children: JSX.Element;
}) => (
  <MainLayout>
    <View
      className={`${hideHorizontalPadding || "px-5"} pt-20 pb-44 h-full flex-col
      items-center`}
    >
      {children}
    </View>
  </MainLayout>
);
