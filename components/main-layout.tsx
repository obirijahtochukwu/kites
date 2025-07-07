import { JSX } from "react";
import { Image, ScrollView, View } from "react-native";

export default function MainLayout({ children }: { children: JSX.Element }) {
  return (
    <View className="bg-[#F0EFF2] min-h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="relative flex-1">
          <Image
            source={require("../assets/bg.png")}
            className="w-full h-4/6 absolute"
            resizeMode="cover"
          />
          {children}
        </View>
      </ScrollView>
    </View>
  );
}
