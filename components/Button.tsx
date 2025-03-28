import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="rounded-[11px] mt-6"
      accessibilityLabel={title}
      accessibilityRole="button"
      style={{
        backgroundColor: "#AE63FF",
        paddingBlock: 8,
        width: "100%",
        borderRadius: 11,
      }}
    >
      <Text className="text-white text-center text-[24px] font-medium">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
