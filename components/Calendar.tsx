import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { format, addDays, startOfWeek } from "date-fns";

// Define the props type for TypeScript
interface CalendarProps {
  startDate?: Date; // Optional start date, defaults to today
  numDays?: number; // Number of days to display
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  onDateSelect?: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({
  startDate = new Date(),
  numDays = 9,
  weekStartsOn = 1,
  onDateSelect,
}) => {
  const today = new Date();
  // Start from the beginning of the week based on startDate
  const weekStart = startOfWeek(startDate, { weekStartsOn });
  // Generate an array of dates starting from the week's start
  const dates: Date[] = Array.from({ length: numDays }, (_, index) =>
    addDays(weekStart, index)
  );
  // Generate day names (e.g., "Mon", "Tue") based on the dates
  const days: string[] = dates.map((date) => format(date, "EEE"));
  // Generate date numbers (e.g., 1, 2, 3) based on the dates
  const dateNumbers: number[] = dates.map((date) => date.getDate());

  return (
    <View className="p-4">
      {/* Month and Year */}
      <Text className="text-[20px] font-medium">
        {format(startDate, "MMMM yyyy")}
      </Text>
      {/* Days and Dates */}
      <View className="flex-row justify-between mt-2">
        {days.map((day: string, index: number) => (
          <View key={`${day}-${dateNumbers[index]}`} className="items-center">
            <Text className="text-[14px] font-medium">{day}</Text>
            <TouchableOpacity
              onPress={() => onDateSelect && onDateSelect(dates[index])}
              className={`w-8 h-8 rounded-full justify-center items-center mt-1 ${
                dates[index].getDate() === today.getDate() &&
                dates[index].getMonth() === today.getMonth() &&
                dates[index].getFullYear() === today.getFullYear()
                  ? "bg-purple-500 h-6 w-6"
                  : "bg-transparent"
              }`}
              accessibilityLabel={`Select date ${dateNumbers[index]} ${day}`}
              accessibilityRole="button"
            >
              <Text
                className={`text-[14px] font-medium ${
                  dates[index].getDate() === today.getDate() &&
                  dates[index].getMonth() === today.getMonth() &&
                  dates[index].getFullYear() === today.getFullYear()
                    ? "text-white"
                    : "text-gray-700"
                }`}
              >
                {dateNumbers[index]}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Calendar;
