import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { Place } from "./mockPlaces";

type Props = {
  place: Place;
};

export default function PlaceCard({ place }: Props) {
  return (
    <View className="mx-4 mb-4 rounded-3xl bg-white p-4">
      <View className="flex-row items-center justify-between">
        <View className="flex-1 flex-row items-center">
          <View className="h-7 w-7 items-center justify-center rounded-full bg-ink">
            <Text className="text-sm font-bold text-white">{place.rank}</Text>
          </View>
          <Text
            className="ml-3 flex-1 text-lg font-bold text-ink"
            numberOfLines={1}
          >
            {place.name}
          </Text>
        </View>

        <Pressable className="ml-2 flex-row items-center rounded-full bg-ink px-4 py-2 active:opacity-80">
          <Ionicons name="bookmark-outline" size={18} color="#ffffff" />
          <Text className="ml-1 text-base font-bold text-white">Add</Text>
        </Pressable>
      </View>

      <View className="mt-3 flex-row flex-wrap items-center gap-2">
        <View className="rounded-lg bg-ink/10 px-3 py-1.5">
          <Text className="text-sm font-bold">
            <Text className="text-ink">{"$".repeat(place.priceLevel)}</Text>
            <Text className="text-ink/30">
              {"$".repeat(5 - place.priceLevel)}
            </Text>
          </Text>
        </View>
        {place.tags.map((tag) => (
          <View key={tag} className="rounded-lg bg-ink/10 px-3 py-1.5">
            <Text className="text-sm font-bold text-ink">{tag}</Text>
          </View>
        ))}
      </View>

      <Text className="mt-3 text-sm text-gray-500">
        Mentioned on {place.mentions} other lists
      </Text>
    </View>
  );
}