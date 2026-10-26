import { Feather, Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

type Props = {
  countryCount: number;
  onAddVisitedPlaces: () => void;
};

export default function VisitSummary({
  countryCount,
  onAddVisitedPlaces,
}: Props) {
  return (
    <View className="w-full bg-background px-5 pb-5 pt-5 md:px-8 md:pb-6 md:pt-6">
      <View className="flex-row flex-wrap items-center justify-between gap-x-5 gap-y-4">
        <View className="flex-row items-center">
          <View className="mr-6">
            <Text className="text-2xl font-bold text-ink md:text-3xl">
              {countryCount}
            </Text>
            <Text className="mt-1 text-[9px] font-bold tracking-[2px] text-ink/65">
              COUNTRIES
            </Text>
          </View>
          <View>
            <Text className="text-2xl font-bold text-ink md:text-3xl">
              0
            </Text>
            <Text className="mt-1 text-[9px] font-bold tracking-[2px] text-ink/65">
              CITIES &amp; REGIONS
            </Text>
          </View>
        </View>
        <View className="flex-row items-center">
          <Ionicons name="globe-outline" size={28} color="#c1cb9c" />
          <Text className="ml-2 text-sm font-bold text-ink md:text-base">
            Travel Newcomer
          </Text>
        </View>
      </View>
      <View className="mt-5 flex-row items-center">
        <Pressable
          accessibilityRole="button"
          className="mr-3 flex-1 flex-row items-center justify-center rounded-full bg-pin px-4 py-4"
          onPress={onAddVisitedPlaces}
        >
          <Feather name="map-pin" size={18} color="#2f3a28" />
          <Text className="ml-2 text-sm font-bold text-ink md:text-base">
            Add visited places
          </Text>
        </Pressable>
        <View className="flex-row items-center justify-center rounded-full border border-ink/15 px-5 py-4">
          <Feather name="share" size={18} color="#2f3a28" />
          <Text className="ml-2 text-sm font-bold text-ink md:text-base">
            Share
          </Text>
        </View>
      </View>
    </View>
  );
}
