import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import pills from "@/assets/images/pill.png";
import capsule from "@/assets/images/capsule.png";
import capsule_tree from "@/assets/images/capsule_tree.png";

import { Link } from "expo-router";
import Calendar from "@/components/Calendar";

// Define the type for a medication item
interface Medication {
  name: string;
  take: string;
  time: string;
  image: any;
}

const MedicationReminderScreen: React.FC = () => {
  const medications: Medication[] = [
    {
      name: "DOLO 650mg",
      take: "01",
      time: "10am & 8pm",
      image: capsule,
    },
    {
      name: "Cetryzon 10mg",
      take: "01",
      time: "10am, 2pm & 8pm",
      image: pills,
    },
    {
      name: "DOLO 650mg",
      take: "01",
      time: "10am & 8pm",
      image: capsule,
    },
    {
      name: "Cetryzon 10mg",
      take: "01",
      time: "10am, 2pm & 8pm",
      image: pills,
    },
    {
      name: "DOLO 650mg",
      take: "01",
      time: "10am & 8pm",
      image: capsule,
    },
  ];

  const [reminders, setReminders] = useState<boolean[]>(
    medications.map(() => true)
  );

  const toggleReminder = (index: number) => {
    const newReminders = [...reminders];
    newReminders[index] = !newReminders[index];
    setReminders(newReminders);
  };
  const handleDateSelect = (date: Date) => {
    console.log("Selected date:", date);
    // Add logic to filter medications by the selected date
  };
  return (
    <View className="flex-1 bg-[#AE63FF]">
      <StatusBar barStyle="light-content" backgroundColor="#AE63FF" />
      {/* Header */}
      <View className="p-6 pr-0 relative min-h-[220px]">
        <View className="flex-row justify-between">
          <View>
            <View className="flex-row items-center gap-2">
              <View className="w-[35px] h-[35px] bg-cyan-400 rounded-full" />
              <View>
                <Text className="text-white text-[16px] font-medium leading-[16px]">
                  Hi,
                </Text>
                <Text className="text-white text-[16px] font-medium leading-[16px]">
                  Venkatasai
                </Text>
              </View>
            </View>
            <View>
              <Text className="text-white leading-[31px] text-[32px] font-semibold mt-4">
                Pill's remind
              </Text>
              <Text className="text-white leading-[31px] text-[32px] font-semibold">
                for YOU!
              </Text>
            </View>
            <TouchableOpacity
              className="bg-white rounded-lg px-4 py-2 my-3 self-start"
              accessibilityLabel="Get notification for medication reminders"
              accessibilityRole="button"
            >
              <Text className="text-black font-medium text-[13px]">
                Get Notification
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Image
              source={capsule_tree}
              className="absolute right-0 top-0 w-48 h-48"
              resizeMode="contain"
            />
          </View>
        </View>
      </View>

      <View className="bg-white rounded-t-[35px] flex-1">
        {/* Calendar */}
        <Calendar onDateSelect={handleDateSelect} />

        {/* Medication List */}
        <View className="flex-row justify-between items-center px-4">
          <Text className="text-[30px] font-medium">Today</Text>
          <View className="flex-row items-center gap-2">
            <Text className="text-[18px] font-medium">Add Drug</Text>
            <TouchableOpacity
              className="bg-purple-500 rounded-full w-10 h-10 justify-center items-center"
              accessibilityLabel="Add a new drug"
              accessibilityRole="button"
            >
              <Link href={"/empty-state"}>
                <Icon name="add" size={24} color="white" />
              </Link>
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={medications}
          keyExtractor={(item: Medication, index: number) =>
            `${item.name}-${index}`
          }
          renderItem={({
            item,
            index,
          }: {
            item: Medication;
            index: number;
          }) => (
            <View
              className="bg-white rounded-xl p-4 mb-4 flex-row items-center gap-2"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 8,
                elevation: 4,
              }}
            >
              <View className=" border-r border-gray-400">
                <Image
                  source={item.image}
                  className="w-14 h-14"
                  resizeMode="contain"
                />
              </View>
              <View className="flex-1">
                <Text className="text-[21px] font-medium">{item.name}</Text>
                <Text className="text-[18px] leading-[20px] text-gray-500">
                  Take: {item.take}
                </Text>
                <Text className="text-[18px] leading-[20px] text-gray-500">
                  Time: {item.time}
                </Text>
                <View className="flex-row justify-between items-center ">
                  <Text className="text-[18px]  text-gray-500">Remind ME</Text>
                  <TouchableOpacity
                    onPress={() => toggleReminder(index)}
                    className={`w-12 h-6 rounded-full justify-center items-center ${
                      reminders[index] ? "bg-green-500" : "bg-gray-300"
                    }`}
                    accessibilityLabel={`Toggle reminder for ${item.name}`}
                    accessibilityRole="switch"
                    accessibilityState={{ checked: reminders[index] }}
                  >
                    <View
                      className={`bg-white w-4 h-4 rounded-full absolute ${
                        reminders[index] ? "right-1" : "left-1"
                      }`}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
          className="px-4 mt-4"
        />
      </View>
    </View>
  );
};

export default MedicationReminderScreen;
