import React from "react";
import { SafeAreaView } from "react-native";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
  VictoryGroup,
} from "victory-native";

const data = [
  { quarter: "Jan", productA: 13000, productB: 9000 },
  { quarter: "Feb", productA: 16500, productB: 12000 },
  { quarter: "Mar", productA: 14250, productB: 8500 },
  { quarter: "Apr", productA: 19000, productB: 11000 },
  { quarter: "May", productA: 19000, productB: 15000 },
  { quarter: "Jun", productA: 10000, productB: 19000 },
];

const yTickValues = () => {
  const maxValue = Math.max(
    ...data.map((item) => Math.max(item.productA, item.productB))
  );
  const step = Math.ceil(maxValue / 3 / 1000) * 1000; // Divide by 3 to get 4 steps (0, step, 2*step, 3*step)
  return [0, step, 2 * step, 3 * step];
};
const GroupedBarChart = () => {
  return (
    <SafeAreaView className="pl-2">
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={{ x: 30 }}
        height={200}
        padding={{ top: 5, left: 50, right: 50, bottom: 30 }}
      >
        <VictoryAxis
          style={{
            axis: { stroke: "transparent" },
            grid: { stroke: "transparent" },
            ticks: { stroke: "transparent" },
            tickLabels: { fontSize: 12, fontFamily: "normal", padding: 5 },
          }}
          tickValues={data.map(({ quarter }) => quarter)}
          tickFormat={data.map(({ quarter }) => quarter)}
        />

        <VictoryAxis
          dependentAxis
          style={{
            axis: { stroke: "transparent" },
            ticks: { stroke: "transparent" },
            tickLabels: { fontSize: 12, fontFamily: "normal", padding: 5 },
            grid: { stroke: "transparent" },
          }}
          tickValues={yTickValues()}
          tickFormat={(y) => `$${y / 1000}k`}
        />

        <VictoryGroup offset={20}>
          <VictoryBar
            data={data}
            x="quarter"
            y="productA"
            style={{
              data: {
                fill: "#ABE39E",
                width: 15,
              },
            }}
            cornerRadius={{ top: 8, bottom: 8 }}
          />

          <VictoryBar
            data={data}
            x="quarter"
            y="productB"
            style={{
              data: {
                fill: "#8552FF",
                width: 15,
              },
            }}
            cornerRadius={{ top: 8, bottom: 8 }}
          />
        </VictoryGroup>
      </VictoryChart>
    </SafeAreaView>
  );
};

export default GroupedBarChart;
