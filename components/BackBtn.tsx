import { Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import undoBtn from "@/assets/images/undo.png";
import { useRouter } from "expo-router";

interface AppLayoutHeaderProps {
  isBack?: boolean;
  title?: string;
}
const BackBtn: React.FC<AppLayoutHeaderProps> = ({
  isBack = true,
  title = "Add Drug",
}) => {
  const router = useRouter();

  const navigateToPreviousScreen = () => {
    router.back();
  };
  return (
    <View className="flex-row items-center mt-6">
      {isBack && (
        <TouchableOpacity onPress={navigateToPreviousScreen}>
          <Image
            source={undoBtn}
            className="w-8 h-8 object-contain"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
      <Text className="text-white text-[25px] font-medium leading-[16px] ml-4">
        {title}
      </Text>
    </View>
  );
};

export default BackBtn;
