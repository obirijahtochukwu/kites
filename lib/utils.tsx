import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const screenHeight = Dimensions.get("window").height;

export const x = (val: number) => {
  return val * (screenWidth / 393);
};

export const y = (val: number) => {
  return val * (screenHeight / 852);
};

export const groupIntoRows = (data: any[], count: number) => {
  const result = [];
  for (let i = 0; i < data.length; i += count) {
    result.push({
      row: data.slice(i, i + count),
    });
  }
  return result;
};
