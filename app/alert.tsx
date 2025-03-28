import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import alertIllustration from "@/assets/images/doctors.png";
import capsule from "@/assets/images/capsule.png";
import watch from "@/assets/images/watch.png";
import capsuleTree from "@/assets/images/capsule_tree.png";

const AlertScreen: React.FC = () => {
  const router = useRouter();

  const handleDismiss = () => {
    router.push("/");
  };

  return (
    <LinearGradient colors={["#AE63FF", "#EFE1FD"]} className="flex-1 pt-6">
      <View className="relative h-screen">
        <View>
          <Image
            source={alertIllustration}
            className="w-[150px] h-[150px] mx-auto"
            resizeMode="contain"
          />
        </View>
        <Text className="text-center text-[40px] font-bold text-white">
          ALERT!
        </Text>
        <Text className="text-center text-[28px] leading-[29px] font-bold text-white">
          Please follow your
        </Text>
        <Text className="text-center text-[28px] leading-[29px] font-bold text-white">
          medicine
        </Text>
        <Text className="text-center text-[14px] leading-[29px] text-white">
          Taking your medications exactly when your
        </Text>
        <Text className="text-center text-[14px] leading-[29px] text-white">
          body needs them is vital. But sometimes, you 
        </Text>
        <Text className="text-center text-[14px] leading-[29px] text-white">
          just forget. 
        </Text>
        <View>
          {/* Dose Information */}
          <View className="w-[70%] ml-auto mt-6">
            <View className="flex-row items-center bg-white rounded-tl-lg shadow-card ">
              <View className="mx-2">
                <Image
                  source={capsule}
                  className="w-14 h-14"
                  resizeMode="contain"
                />
              </View>
              <View className="p-2 flex-1 bg-background text-white">
                <Text className="text-[16px] font-semibold">DOLO 650mg</Text>
                <Text className="text-[13px] font-medium text-white">
                  650mg
                </Text>
                <Text className="text-[13px] font-medium text-white">
                  Taken: 1
                </Text>
                <Text className="text-[13px] font-medium text-white">
                  After breakfast
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Image
          source={watch}
          resizeMode="contain"
          className="w-[300px] h-[300px] absolute -left-8 bottom-0"
        />
        <Image
          source={capsuleTree}
          resizeMode="contain"
          className="w-[268px] h-[215px] absolute -right-12 bottom-0"
        />
      </View>
    </LinearGradient>
  );
};

export default AlertScreen;
