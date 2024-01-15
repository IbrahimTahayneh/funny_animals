import React from "react";
import {
  Platform,
  View,
  ViewStyle,
  KeyboardAvoidingView,
  ScrollView,
  ScrollViewProps,
} from "react-native";
import { StatusBar, Loading, Header, StatusBarProps } from "../components";
import { cn } from "../utils/theme.utils";

export interface ScreenProps extends StatusBarProps {
  children?: React.ReactNode | null;
  style?: ViewStyle;
  className?: string;
  barStyleBackgroundColor?: StatusBarProps["backgroundColor"];
  scrollable?: boolean;
  isLoading?: boolean;
  withHeader?: boolean;
  headerTitle?: string | React.ReactNode;
  headerColor?: string;
  headerLeftComponent?: React.ReactNode | null;
  headerRightComponent?: React.ReactNode | null;
  headerLeftImageSrc?: unknown; //TODO:fix it
  headerRightImageSrc?: unknown; //TODO:fix it
  testIDRightImg?: string;
  testIDLeftImg?: string;
  testIDHeaderTitle?: string;
  onPressHeaderLeft?: () => void;
  onPressHeaderRight?: () => void;
  withKeyboardAvoidingView?: boolean;
  keyboardShouldPersistTaps?: ScrollViewProps["keyboardShouldPersistTaps"]; //TODO:fix it
}

export const Screen = React.memo<ScreenProps>(
  ({ withHeader = true, ...rest }) => {
    const _renderContents = (): React.ReactNode => (
      <View style={rest.style} className={cn("flex-1", rest.className)}>
        {withHeader ? (
          <Header
            title={rest.headerTitle}
            headerColor={rest.headerColor}
            onLeftPress={rest.onPressHeaderLeft}
            onRightPress={rest.onPressHeaderRight}
            leftComponent={rest.headerLeftComponent}
            rightComponent={rest.headerRightComponent}
            testIDHeaderTitle={rest.testIDHeaderTitle}
            testIDLeftImg={rest.testIDLeftImg}
            testIDRightImg={rest.testIDRightImg}
            isLeftComponentExist={true}
            isRightComponentExist={true}
          />
        ) : null}
        {rest.children}
      </View>
    );

    const getContainers = () => {
      let containers = _renderContents();

      if (rest.scrollable) {
        containers = (
          <ScrollView
            keyboardShouldPersistTaps={rest.keyboardShouldPersistTaps}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            alwaysBounceVertical={false}
            bounces={false}
          >
            {containers}
          </ScrollView>
        );
      }

      if (rest.withKeyboardAvoidingView) {
        containers = (
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : undefined}
          >
            {containers}
          </KeyboardAvoidingView>
        );
      }

      return containers;
    };

    return (
      <StatusBar
        backgroundColor={
          rest.barStyleBackgroundColor || rest.style?.backgroundColor
        }
        barStyle={rest.barStyle}
        iphoneXBottomBgColor={rest.iphoneXBottomBgColor}
      >
        {getContainers()}
        {rest.isLoading ? <Loading /> : null}
      </StatusBar>
    );
  }
);
