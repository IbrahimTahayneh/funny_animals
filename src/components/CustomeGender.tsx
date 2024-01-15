import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

interface CustomGenderProps {
  isSelected: boolean;
  onPress: () => void;
  backgroundColor: string;
  ImageComponents: React.ReactNode;
}

export const CustomGender: React.FC<CustomGenderProps> = ({
  isSelected,
  onPress,
  backgroundColor,
  ImageComponents,
}) => {
  const containerColor = isSelected ? backgroundColor : `${backgroundColor}80`; // Adding 80 for 50% opacity
  const borderColor = isSelected ? `${backgroundColor}80` : "transparent";

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.container,
          { backgroundColor: containerColor, borderColor: borderColor },
        ]}
      >
        {ImageComponents}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 140,
    padding: 15,
    borderRadius: 100,
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
  },
});
