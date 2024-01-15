import React, { memo } from "react";
import { SafeAreaView, StatusBar as RNStatusBar } from "react-native";

export interface StatusBarProps {
  children?: React.ReactNode | null;
  barStyle?: "dark-content" | "light-content";
  backgroundColor?: unknown;
  iphoneXBottomBgColor?: string;
}

// const RNStatusBar = styled.StatusBar<Pick<StatusBarProps, "backgroundColor">>`
//   background-color: ${(props) => props.backgroundColor || "transparent"};
// `;

// const TopSafeAreaView = styled.SafeAreaView<
//   Pick<StatusBarProps, "backgroundColor">
// >`
//   background-color: ${(props) => props.backgroundColor || "transparent"};
// `;

// const BottomSafeAreaView = styled.SafeAreaView<
//   Pick<StatusBarProps, "backgroundColor">
// >`
//   background-color: ${(props) => props.backgroundColor || "transparent"};
// `;

export const StatusBar = memo<StatusBarProps>((props) => {
  const backgroundColor = props.backgroundColor
    ? String(props.backgroundColor)
    : undefined;

  return (
    <>
      <RNStatusBar
        backgroundColor={backgroundColor || "#FFFFFF"}
        barStyle={props.barStyle || "light-content"}
      />
      <SafeAreaView
        style={{
          backgroundColor,
        }}
      />
      {props.children}
      <SafeAreaView
        style={{
          backgroundColor: props.iphoneXBottomBgColor || backgroundColor,
        }}
      />
    </>
  );
});
