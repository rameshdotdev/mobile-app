import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";

import BackBtn from "../components/BackBtn";
import Button from "../components/Button";
import Calendar from "../components/Calendar";
import Icon from "react-native-vector-icons/MaterialIcons";

// Import images
import capsule from "@/assets/images/capsule.png";
import injection from "@/assets/images/injection.png";
import drug from "@/assets/images/drug.png";
import pill from "@/assets/images/pill.png";
import roundedPill from "@/assets/images/rounded-pill.png";
import AppLayout from "@/Layouts/AppLayout";

// Define the type for a medicine item
interface Medicine {
  name: string;
  image: any;
  isSelected: boolean;
  mg: string;
}

const AddDrugScreen: React.FC = () => {
  const router = useRouter();

  // State for form inputs
  const [drugName, setDrugName] = useState("DOLO 650mg");
  const [dosage, setDosage] = useState("Single Dose e.g., 1 Tablet");
  const [timing, setTiming] = useState("After break fast");
  const [doseCount, setDoseCount] = useState("01");
  const [remindIn, setRemindIn] = useState("5m");
  const [notificationRing, setNotificationRing] = useState("5sec");
  const [selectedMedicineIndex, setSelectedMedicineIndex] = useState(0);

  // Options for timing, remind me, and notification ring
  const timingOptions = ["After lunch", "Empty stomach", "After break fast"];
  const remindInOptions = ["10m", "20m", "30m", "15m", "5m"];
  const notificationRingOptions = ["2sec", "20sec", "30sec", "15sec", "5sec"];

  // List of medicines
  const medicines: Medicine[] = [
    {
      name: "DOLO 650mg",
      image: capsule,
      isSelected: true,
      mg: "650mg",
    },
    {
      name: "Cetryzon 10mg",
      image: pill,
      isSelected: false,
      mg: "650mg",
    },
    {
      name: "Paracetamol",
      image: roundedPill,
      isSelected: false,
      mg: "650mg",
    },
    {
      name: "Insulin",
      image: injection,
      isSelected: false,
      mg: "650mg",
    },
  ];

  // Handle medicine selection
  const handleMedicineSelect = (index: number) => {
    setSelectedMedicineIndex(index);
    setDrugName(medicines[index].name);
  };

  // Handle date selection from the Calendar
  const handleDateSelect = (date: Date) => {
    console.log("Selected date:", date);
  };

  // Handle the "Next" button press
  const handleNext = () => {
    router.push({
      pathname: "/medication-schedule",
      params: {
        newDrug: JSON.stringify({
          name: drugName,
          take: doseCount,
          time: "8:00am",
          timing: timing,
          image: medicines[selectedMedicineIndex].image,
        }),
      },
    });
  };

  return (
    <AppLayout classNames="bg-[#AE63FF]">
      <AppLayout.Header>
        <BackBtn />
      </AppLayout.Header>
      <AppLayout.Content>
        <ScrollView className="flex-1">
          {/* Calendar */}
          <Calendar numDays={7} onDateSelect={handleDateSelect} />

          {/* Drug Selection */}
          <View className="flex-row justify-around items-center px-4 py-2">
            {medicines.map((medicine, index) => (
              <TouchableOpacity
                key={medicine.name}
                onPress={() => handleMedicineSelect(index)}
                className={`w-[65px] h-[65px] rounded-full items-center justify-center ${
                  selectedMedicineIndex === index
                    ? "bg-secondary"
                    : "bg-gray-200"
                }`}
              >
                {selectedMedicineIndex === index && (
                  <View className="absolute top-0 right-0 w-6 h-6 bg-[#22c55e] rounded-full items-center justify-center">
                    <Icon name="check" size={20} color="#FFF" />
                  </View>
                )}
                <Image
                  source={medicine.image}
                  className="w-14 h-14"
                  resizeMode="contain"
                />
              </TouchableOpacity>
            ))}
          </View>

          {/* Drug Details */}
          <View className="px-4 mt-4">
            <Text className="text-[20px] font-semibold">{drugName}</Text>
            <View className="flex-row items-center mt-1">
              <Text className="text-[14px] text-gray-500">{dosage}</Text>
              <Icon name="arrow-drop-down" size={20} color="gray" />
            </View>

            {/* Timing Options */}
            <View className="flex-row justify-between mt-4">
              {timingOptions.map((option) => (
                <TouchableOpacity
                  key={option}
                  onPress={() => setTiming(option)}
                  className={`rounded-full px-4 py-2 ${
                    timing === option ? "bg-black" : "bg-gray-200"
                  }`}
                >
                  <Text
                    className={`text-[12px] ${
                      timing === option ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Dose Information */}
            <View className="flex-row items-center mt-4 bg-white rounded-xl">
              <View className="mr-4">
                <Text className="text-[20px] font-medium">Dose 01</Text>
              </View>
              <View className="flex-row flex-1 items-center bg-white rounded-tl-lg shadow-card ">
                <View className="mx-2">
                  <Image
                    source={medicines[selectedMedicineIndex].image}
                    className="w-14 h-14"
                    resizeMode="contain"
                  />
                </View>
                <View className="p-2 flex-1 bg-background text-white">
                  <Text className="text-[16px] font-semibold">{drugName}</Text>
                  <Text className="text-[13px] font-medium text-white">
                    {medicines[selectedMedicineIndex].mg}
                  </Text>
                  <Text className="text-[13px] font-medium text-white">
                    Taken: {doseCount}
                  </Text>
                  <Text className="text-[13px] font-medium text-white">
                    {timing}
                  </Text>
                </View>
              </View>
            </View>
            <Text className="text-[16px] font-medium mt-1 text-end ml-auto text-customGray">
              8:00 am
            </Text>
            {/* Remind Me Options */}
            <View className="mt-1">
              <Text className="text-[20px] font-medium">Remind me</Text>
              <View className="flex-row justify-between mt-2">
                {remindInOptions.map((option) => (
                  <TouchableOpacity
                    key={option}
                    onPress={() => setRemindIn(option)}
                    className={`rounded-full w-12 h-6 justify-center items-center ${
                      remindIn === option ? "bg-black" : "bg-gray-200"
                    }`}
                  >
                    <Text
                      className={`text-[12px] ${
                        remindIn === option ? "text-white" : "text-gray-700"
                      }`}
                    >
                      {option}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Notification Ring Options */}
            <View className="mt-4">
              <Text className="text-[20px] font-medium">Notification Ring</Text>
              <View className="flex-row justify-between mt-2">
                {notificationRingOptions.map((option, index) => (
                  <TouchableOpacity
                    key={`${option}-${index}`}
                    onPress={() => setNotificationRing(option)}
                    className={`rounded-full w-12 h-6 justify-center items-center ${
                      notificationRing === option ? "bg-black" : "bg-gray-200"
                    }`}
                  >
                    <Text
                      className={`text-[12px] ${
                        notificationRing === option
                          ? "text-white"
                          : "text-gray-700"
                      }`}
                    >
                      {option}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>

          {/* Next Button */}
          <View className="p-4">
            <Button title="Next" onPress={handleNext} />
          </View>
        </ScrollView>
      </AppLayout.Content>
    </AppLayout>
  );
};

export default AddDrugScreen;
