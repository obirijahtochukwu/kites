import { Button, TextInput, TextInputProps, View } from "react-native";
import { Icons } from "./icons";

export const Input = {
  email: (props: TextInputProps) => (
    <TextInput
      {...props}
      className="h-14 w-full rounded-2xl p-3.5 border border-[#1509332B] mt-1.5 bg-white"
      keyboardType="email-address"
    />
  ),
  password: (props: TextInputProps) => {
    return (
      <View className="h-14 w-full rounded-2xl px-3.5 border border-[#1509332B] mt-1.5 bg-white items-center flex-row gap-3">
        <TextInput
          {...props}
          className="h-full flex-1"
          secureTextEntry={true}
        />
        <Icons.passwordToggle />
      </View>
    );
  },
};
