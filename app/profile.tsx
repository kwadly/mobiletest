import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";
import BottomNavBar from "../components/BottomNavBar";

export default function Profile() {
  const router = useRouter();
  return (
    <View className="flex-1 bg-white">
      <View className="flex-1 items-center justify-center">
        <Text className="mb-4">Profile (placeholder)</Text>
        <Pressable onPress={() => router.push("/trip/itinerary")}>
          <Text className="text-[#F4573F]">Open trip</Text>
        </Pressable>
      </View>
      <BottomNavBar active="profile" />
    </View>
  );
}