import { JSX } from "react";
import { ScrollView, View } from "react-native";
import MainLayout from "./main-layout";
import { useRoute } from "@react-navigation/native";
import { SCREENS } from "./nav";

export const ScreenWrapper = ({
  hideHorizontalPadding,
  children,
}: {
  hideHorizontalPadding?: boolean;
  children: JSX.Element;
}) => {
  const { name } = useRoute();

  const isFullScreen = SCREENS.filter(
    (screen) => screen.route === name
  )?.length;

  return (
    <MainLayout>
      <View
        className={`${hideHorizontalPadding || "px-5"} ${
          isFullScreen ? "pb-56" : "pb-14"
        } pt-20 h-full flex-col
      items-center `}
      >
        {children}
      </View>
    </MainLayout>
  );
};
