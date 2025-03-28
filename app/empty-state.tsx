import React from "react";
import { View, Text, Image } from "react-native";
import { useRouter } from "expo-router";

import emptyStateIllustration from "@/assets/images/doctors.png";
import AppLayout from "@/Layouts/AppLayout";
import BackBtn from "@/components/BackBtn";
import Calendar from "@/components/Calendar";
import Button from "@/components/Button";

const EmptyStateScreen: React.FC = () => {
  const router = useRouter();

  const navigateToAddDrug = () => {
    router.push("/add-drug");
  };
  const handleDateSelect = (date: Date) => {
    console.log("Selected date:", date);
    // Add logic to filter medications by the selected date
  };
  return (
    <AppLayout>
      <AppLayout.Header>
        <BackBtn />
      </AppLayout.Header>
      <AppLayout.Content>
        {/* Calendar */}
        <Calendar onDateSelect={handleDateSelect} numDays={7} />

        {/* Empty State Content */}
        <View className="flex-1 items-center justify-center px-4">
          <Image
            source={emptyStateIllustration}
            className="w-64 h-64"
            resizeMode="contain"
          />
          <Text className="text-[28px] text-center mt-4 capitalize">
            PLEASE FOLLOW YOUR MEDICINE
          </Text>
          <Text className="text-[14px] text-gray-500 text-center mt-2">
            Taking your medications exactly when your body needs them is vital.
            But sometimes, you just forget.
          </Text>
        </View>
        <View className="p-4">
          <Button title="Add a Medicine" onPress={navigateToAddDrug} />
        </View>
      </AppLayout.Content>
    </AppLayout>
  );
};

export default EmptyStateScreen;
