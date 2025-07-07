import { useNavigation } from "@react-navigation/native";
import React, { Children, JSX } from "react";
import { TouchableOpacity, View } from "react-native";
import { SvgProps } from "react-native-svg";

export default function IconBox({
  Icon,
  left,
}: {
  Icon: (props: SvgProps) => React.JSX.Element;
  left?: boolean;
}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => left && navigation.goBack()}
      className={`${
        left && " rotate-180"
      } bg-white rounded-full h-14 w-14 flex items-center justify-center`}
    >
      <Icon />
    </TouchableOpacity>
  );
}
