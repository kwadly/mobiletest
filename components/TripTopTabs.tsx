import { View, Text, Pressable } from "react-native";
import { useRouter, Href } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type TripTab = "overview" | "itinerary" | "explore" | "budget" | "journal";

const TABS: { key: TripTab; label: string; route?: Href }[] = [
  { key: "overview", label: "Overview" },
  { key: "itinerary", label: "Itinerary", route: "/trip/itinerary" },
  { key: "explore", label: "Explore", route: "/trip/explore" },
  { key: "budget", label: "$", route: "/trip/budget" },
  { key: "journal", label: "Journal" },
];

export default function TripTopTabs({ active }: { active: TripTab }) {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View className="bg-[#F5F3EE]" style={{ paddingTop: insets.top }}>
      <View className="flex-row items-center px-4 py-3">
        <View className="w-20 items-start">
          <Pressable onPress={() => router.navigate("/profile")}>
            <Ionicons name="arrow-back" size={26} color="#111827" />
          </Pressable>
        </View>
        <Text className="flex-1 text-center text-lg font-bold text-gray-900">
          Trip to New York City
        </Text>
        <View className="w-20 flex-row items-center justify-end gap-4">
          <Ionicons name="arrow-redo" size={24} color="#6B7280" />
          <Ionicons name="ellipsis-horizontal" size={24} color="#6B7280" />
        </View>
      </View>

      <View className="flex-row justify-between border-b border-gray-200 px-2">
        {TABS.map((tab) => {
          const isActive = tab.key === active;
          return (
            <Pressable
              key={tab.key}
              className={`border-b-2 px-2 py-3 ${
                isActive ? "border-[#2f3a28]" : "border-transparent"
              }`}
              onPress={() => tab.route && router.replace(tab.route)}
            >
              <Text
                numberOfLines={1}
                className={`text-base font-semibold ${
                  isActive ? "text-[#2f3a28]" : "text-gray-500"
                }`}
              >
                {tab.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}