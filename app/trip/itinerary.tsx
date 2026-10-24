import { View, Text } from "react-native";
import TripTopTabs from "../../components/TripTopTabs";

export default function Itinerary() {
  return (
    <View className="flex-1 bg-white">
      <TripTopTabs active="itinerary" />
      <View className="flex-1 items-center justify-center">
        <Text>Itinerary (placeholder)</Text>
      </View>
    </View>
  );
}