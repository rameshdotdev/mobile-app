import React, { ReactNode } from "react";
import { View, Text, StatusBar } from "react-native";

// Define the props type for TypeScript
interface AppLayoutProps {
  children: ReactNode;
  classNames?: string;
}

interface AppLayoutHeaderProps {
  children: ReactNode;
  classNames?: string;
}

interface AppLayoutComponent extends React.FC<AppLayoutProps> {
  Header: React.FC<AppLayoutHeaderProps>;
  Content: React.FC<AppLayoutProps>;
}

// Main AppLayout Component
const AppLayout: AppLayoutComponent = ({ children, classNames }) => {
  return (
    <View className={`relative flex-1 bg-[#AE63FF] ${classNames}`}>
      <StatusBar barStyle="light-content" backgroundColor="#AE63FF" />
      {children}
    </View>
  );
};

// Header Sub-Component
const Header: React.FC<AppLayoutHeaderProps> = ({ children, classNames }) => {
  return (
    <View className={`p-6 ${classNames}`}>
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
      {children}
    </View>
  );
};

// Content Sub-Component
const Content: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <View className="bg-white rounded-t-[35px] flex-1 overflow-hidden">
      {children}
    </View>
  );
};

// Attach sub-components to AppLayout
AppLayout.Header = Header;
AppLayout.Content = Content;

export default AppLayout;
