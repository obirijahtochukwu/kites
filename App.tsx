import { StatusBar } from "expo-status-bar";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import "./global.css";
import { Icons } from "./components/icons";
import { data } from "./mock-data";

export default function App() {
  return (
    <ScrollView className="bg-[#030107] relative">
      <View
        style={{ elevation: 15 }}
        className="absolute top-0 bg-[7A35EB40] w-full h-[3070px] rounded-full shadow-2xl shadow-gray-500 overflow-idden"
      >
        <View className="relative">
          <Image
            source={require("./assets/bg.png")}
            className=" h-[1000px] -top-[300px] w-full absolute"
          />
          <Image
            source={require("./assets/bg.png")}
            className=" h-[1000px] -top-[300px] w-full absolute"
          />
        </View>
        <View className="relative">
          <Image
            source={require("./assets/bg.png")}
            className=" h-[1000px] -top-[300px] w-full absolute"
          />
          <Image
            source={require("./assets/bg.png")}
            className=" h-[1000px] -top-[300px] w-full absolute"
          />
        </View>
        <View className="relative mt-[500px] overflow-hidden h-[500px] opacity-10">
          <Image
            source={require("./assets/bg.png")}
            className=" h-[1000px] -top-[600px] w-full absolute"
          />
          <Image
            source={require("./assets/bg.png")}
            className=" h-[1000px] -top-[600px] w-full absolute"
          />
        </View>
        <View className="relative mt-[35px] overflow-hiddn h-[500px] opacity-[0.07] w-full bg-green-900">
          <Image
            source={require("./assets/bg.png")}
            className=" h-[1900px] -top-[900px] w-full absolute"
          />
          <Image
            source={require("./assets/bg.png")}
            className=" h-[1900px] -top-[900px] w-full absolute"
          />
        </View>
      </View>

      <View className="h-full pt-14 px-4">
        <View className="flex-row items-center justify-between">
          <View className=" flex items-center justify-center h-14 w-14 rounded-full bg-[#7A35EB40] border-white/25 border">
            <Icons.arrow />
          </View>
          <Text className=" text-white text-2xl">All Category</Text>
          <View className=" flex items-center justify-center h-14 w-14 rounded-full bg-[#7A35EB40] border-white/25 border">
            <Icons.theme />
          </View>
        </View>
        <View className="my-5 flex-row gap-3">
          <View className="h-12 flex-1 flex-row items-center bg-[#30155F] backdrop-blur-md rounded-full gap-1 pl-3.5 pr-3">
            <Icons.search />
            <TextInput
              className=" flex-1 text-base font-normal placeholder:text-[#A4A4A6]"
              placeholder="Search"
            ></TextInput>
          </View>
          <View className="flex items-center justify-center h-12 w-12 rounded-full bg-[#7A35EB40] border-white/25 border">
            <Icons.filter />
          </View>
        </View>
        <View
          style={{ elevation: 5 }}
          className="flex-col z-50 gap-3 backdrop-blur-md"
        >
          {data.map((prop, idx) => (
            <View className="flex-row flex-wrap gap-3">
              {prop.row.map(({ name, Icon }, idx) => (
                <View className="flex-1 flex-row items-center gap-2 h-16 py-2 px-3.5 bg-[#7A35EB0F] rounded-2xl">
                  <View className="flex items-center justify-center h-12 w-12 rounded-full bg-[#7A35EB1F]">
                    <Icon />
                  </View>
                  <TextInput className=" text-base font-semibold text-white">
                    {name}
                  </TextInput>
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
      <View className="flex-row items-center justify-center h-32 w-full bg-[#0D0519] fixed bottom-9">
        <View className="flex-row border rounded-full border-[#7A35EB66] gap-0.5">
          <View className="flex items-center justify-center h-14 w-14 rounded-full bg-[#7A35EB1F]">
            <Icons.home />
          </View>
          <View className="flex items-center justify-center h-14 w-14 rounded-full bg-[#7A35EB1F]">
            <Icons.flower />
          </View>
          <View className="flex items-center justify-center h-14 w-14 rounded-full bg-[#7A35EB]">
            <Icons.nav />
          </View>
          <View className="h-14 w-44 rounded-full bg-[#7A35EB1F] flex-row items-center justify-between pl-4 pr-1">
            <Text className="text-base font-normal text-white">Message</Text>
            <View className="flex items-center justify-center h-12 w-12 rounded-full">
              <Icons.mic />
            </View>
          </View>
        </View>
      </View>
      <StatusBar />
    </ScrollView>
  );
}
