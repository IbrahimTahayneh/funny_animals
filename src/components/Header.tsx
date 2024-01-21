/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { useRef, useState } from "react";
import { View, Text, LayoutChangeEvent } from "react-native";
import type { ViewStyle, StyleProp, ImageProps } from "react-native";

interface HeaderProps {
  style?: StyleProp<ViewStyle>;
  headerColor?: string;
  title?: string | React.ReactNode;
  leftImageSrc?: ImageProps["source"];
  rightImageSrc?: ImageProps["source"];
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  isLeftComponentExist?: boolean;
  isRightComponentExist?: boolean;
  testIDRightImg?: string;
  testIDLeftImg?: string;
  testIDHeaderTitle?: string;
}

export const Header: React.FC<HeaderProps> = (props) => {
  const headerColor = props.headerColor ? String(props.headerColor) : "#FFFFFF";

  const [, setHeight] = useState<number>(60);
  const ref = useRef<View>(null);

  const handleLayout = (event: LayoutChangeEvent) => {
    const newHeight = event.nativeEvent.layout.height;
    setHeight(newHeight);
  };

  return (
    <View
      style={[
        {
          elevation: 0,
          shadowColor: "#0A0A0A",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.1,
          shadowRadius: 1.0,
          backgroundColor: headerColor,
        },
        props.style,
      ]}
      className={"w-full min-h-[50]"}
    >
      <View className=" flex-row items-center flex-1 pt-1 min-h-[50]">
        {props.isLeftComponentExist ? (
          <View
            className=" min-w-[44], mr-2 justify-center"
            testID={props.testIDLeftImg}
          >
            {props.leftComponent}
          </View>
        ) : null}
        <View ref={ref} onLayout={handleLayout} className="flex-1">
          <Text
            className=" text-white text-center font-semibold text-xl"
            numberOfLines={2}
            testID={props.testIDHeaderTitle}
          >
            {props.title}
          </Text>
        </View>
        {props.isRightComponentExist ? (
          <View
            className=" min-w-[44], ml-2 justify-center"
            testID={props.testIDRightImg}
          >
            {props.rightComponent}
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default React.memo(Header);
