import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

const DonutChart = ({
  value1 = 20,
  value2 = 60,
  size = 200,
  strokeWidth = 20,
  gapAngle = 5, // gap in degrees at each collision point
}) => {
  // Calculate total and proportions
  const total = value1 + value2;
  const proportion1 = total > 0 ? value1 / total : 0;
  const proportion2 = total > 0 ? value2 / total : 0;

  // Chart parameters
  const radius = (size - strokeWidth) / 2;
  const center = size / 2;
  const circumference = 2 * Math.PI * radius;

  // Calculate angles accounting for two gaps
  const availableAngle = 360 - 2 * gapAngle; // Two gaps: one after each arc
  const angle1 = proportion1 * availableAngle;
  const angle2 = proportion2 * availableAngle;

  // Arc path generator
  const getArcPath = (startAngle: number, endAngle: number) => {
    const startRad = ((startAngle - 90) * Math.PI) / 180; // Rotate -90deg to start at top
    const endRad = ((endAngle - 90) * Math.PI) / 180;

    const x1 = center + radius * Math.cos(startRad);
    const y1 = center + radius * Math.sin(startRad);

    const x2 = center + radius * Math.cos(endRad);
    const y2 = center + radius * Math.sin(endRad);

    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

    return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`;
  };

  return (
    <View
      className=" mx-auto
    flex-col items-center"
    >
      <Svg width={size} height={size}>
        {/* Full background circle (shows unused space) */}
        <Circle
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          fill="transparent"
        />

        {/* First value arc */}
        {proportion1 > 0 && (
          <Path
            d={getArcPath(0, angle1)}
            stroke="#ABE39E"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            fill="transparent"
          />
        )}

        {/* Second value arc with gap offset */}
        {proportion2 > 0 && (
          <Path
            d={getArcPath(angle1 + gapAngle, angle1 + gapAngle + angle2)}
            stroke="#8552FF"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            fill="transparent"
          />
        )}
      </Svg>
      <View className=" absolute h-60 w-60 top-5 flex-col items-center justify-center gap-1">
        <Text className=" text-sm font-normal text-grey">
          Expense Total in July
        </Text>
        <Text className=" text-[32px] font-boldm text-dark">
          ${value1 + value2}
        </Text>
      </View>
    </View>
  );
};

export default DonutChart;
