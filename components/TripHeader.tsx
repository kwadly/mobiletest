import { Ionicons } from "@expo/vector-icons";
import { Pressable, ScrollView, Text, View } from "react-native";

const TABS = ["Overview", "Itinerary", "Explore", "$", "Journal"];

type Props = {
  title: string;
  activeTab: string;
};

export default function TripHeader({ title, activeTab }: Props) {
  return (
    <View className="bg-cream">
      <View className="flex-row items-center px-4 py-3">
        <View className="w-16 items-start">
          <Pressable hitSlop={8}>
            <Ionicons name="home" size={24} color="#6b7280" />
          </Pressable>
        </View>

        <Text
          className="flex-1 text-center text-lg font-bold text-ink"
          numberOfLines={1}
        >
          {title}
        </Text>

        <View className="w-16 flex-row items-center justify-end gap-4">
          <Pressable hitSlop={8}>
            <Ionicons name="arrow-redo" size={22} color="#6b7280" />
          </Pressable>
          <Pressable hitSlop={8}>
            <Ionicons name="ellipsis-horizontal" size={22} color="#6b7280" />
          </Pressable>
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="px-2"
      >
        {TABS.map((tab) => {
          const active = tab === activeTab;
          return (
            <Pressable
              key={tab}
              className={`border-b-2 px-4 py-3 ${
                active ? "border-ink" : "border-transparent"
              }`}
            >
              <Text
                className={`text-base font-bold ${
                  active ? "text-ink" : "text-gray-500"
                }`}
              >
                {tab}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
      <View className="h-px bg-gray-200" />
    </View>
  );
}