import { View, Text } from "react-native";
import BottomNavBar from "../components/BottomNavBar";

export default function Index() {
  return (
    <View className="flex-1 bg-[#F5F3EE]">
      <View className="flex-1 items-center justify-center">
        <Text>App is running</Text>
      </View>
      <BottomNavBar active="home" />
    </View>
  );
}