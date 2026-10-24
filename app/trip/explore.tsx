import { View, Text } from "react-native";
import TripTopTabs from "../../components/TripTopTabs";

export default function Explore() {
  return (
    <View className="flex-1 bg-white">
      <TripTopTabs active="explore" />
      <View className="flex-1 items-center justify-center">
        <Text>Explore (placeholder)</Text>
      </View>
    </View>
  );
}