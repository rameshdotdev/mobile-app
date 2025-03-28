import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import AppLayout from "@/Layouts/AppLayout";
import BackBtn from "../components/BackBtn";
import Calendar from "../components/Calendar";
import Button from "../components/Button";

// Import images
import capsule from "@/assets/images/capsule.png";
import pills from "@/assets/images/pill.png";
import roundedPill from "@/assets/images/rounded-pill.png";
import bluePill from "@/assets/images/yellow-capsule.png";

// Define the type for a medication item
interface Medication {
  name: string;
  take: string;
  time: string;
  timing: string;
  image: any;
}

const MedicationScheduleScreen: React.FC = () => {
  const router = useRouter();
  const { newDrug } = useLocalSearchParams();
  const [notificationEnabled, setNotificationEnabled] = useState(true);

  // Parse the new drug if it exists
  const parsedNewDrug = newDrug ? JSON.parse(newDrug as string) : null;

  // Sample schedule data (including the new drug if passed)
  const initialSchedule: Medication[] = [
    {
      name: "DOLO 650mg",
      take: "01",
      time: "10:00 am",
      timing: "After break fast",
      image: capsule,
    },
    {
      name: "Cetryzon 10mg",
      take: "01",
      time: "10:00 am",
      timing: "After break fast",
      image: roundedPill,
    },
    {
      name: "DOLO 650mg",
      take: "01",
      time: "2:00 pm",
      timing: "After break fast",
      image: bluePill,
    },
    {
      name: "Cetryzon 10mg",
      take: "01",
      time: "2:00 pm",
      timing: "After break fast",
      image: pills,
    },
  ];

  // Add the new drug to the schedule if it exists
  const scheduleData = parsedNewDrug
    ? [...initialSchedule, parsedNewDrug]
    : initialSchedule;

  // Group medications by time
  const groupedSchedule = scheduleData.reduce((acc, med) => {
    const time = med.time;
    if (!acc[time]) {
      acc[time] = [];
    }
    acc[time].push(med);
    return acc;
  }, {} as { [key: string]: Medication[] });

  // Convert grouped schedule to an array for rendering
  const schedule: { time: string; medications: Medication[] }[] = Object.keys(
    groupedSchedule
  )
    .sort() // Sort times for consistent display
    .map((time) => ({
      time,
      medications: groupedSchedule[time],
    }));

  const toggleNotification = () => {
    setNotificationEnabled(!notificationEnabled);
  };

  const handleDone = () => {
    router.push("/alert");
  };

  const handleDateSelect = (date: Date) => {
    console.log("Selected date:", date);
    // Add logic to filter medications by the selected date if needed
  };

  return (
    <AppLayout>
      <AppLayout.Header>
        <BackBtn />
      </AppLayout.Header>
      <AppLayout.Content>
        <ScrollView className="flex-1">
          {/* Calendar */}
          <Calendar numDays={7} onDateSelect={handleDateSelect} />

          {/* Notification Toggle */}
          <View className="flex-row justify-between items-center px-4 mt-4">
            <Text className="text-[16px] font-medium capitalize">
              NOTIFICATION
            </Text>
            <TouchableOpacity
              onPress={toggleNotification}
              className={`w-12 h-6 rounded-full justify-center items-center ${
                notificationEnabled ? "bg-green-500" : "bg-gray-300"
              }`}
              accessibilityLabel="Toggle notifications"
              accessibilityRole="switch"
              accessibilityState={{ checked: notificationEnabled }}
            >
              <View
                className={`bg-white w-4 h-4 rounded-full absolute ${
                  notificationEnabled ? "right-1" : "left-1"
                }`}
              />
            </TouchableOpacity>
          </View>

          {/* Schedule */}
          {schedule.map((slot, index) => (
            <View key={index} className="px-4 mt-4 flex-row flex-1 gap-2">
              <View className="flex-col justify-center items-center">
                <Text className="text-[16px] font-medium">{slot.time}</Text>
                <View className="flex-1 w-px bg-background" />
              </View>
              <View className="mt-2 flex-1 bg-background rounded-xl shadow-card overflow-hidden">
                {slot.medications.map((med, medIndex) => (
                  <View key={medIndex}>
                    <View className="flex-row items-center bg-white">
                      <View className="p-4">
                        <Image
                          source={med.image}
                          className="w-12 h-12 mr-4"
                          resizeMode="contain"
                        />
                      </View>
                      <View className="flex-1 bg-background p-4">
                        <Text className="text-[16px] font-semibold text-white">
                          {med.name}
                        </Text>
                        <Text className="text-[14px] text-white">
                          Taken: {med.take}
                        </Text>
                        <Text className="text-[14px] text-white">
                          {med.timing}
                        </Text>
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          ))}

          {/* Done Button */}
          <View className="p-4">
            <Button onPress={handleDone} title="Done" />
          </View>
        </ScrollView>
      </AppLayout.Content>
    </AppLayout>
  );
};

export default MedicationScheduleScreen;
