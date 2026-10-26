
import { Feather, Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {
  onBack: () => void;
};

export default function MapToolbar({ onBack }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="w-full flex-row items-center justify-between px-4 pb-4 md:px-8"
      style={{ paddingTop: insets.top + 16 }}
    >
      <Pressable
        accessibilityLabel="Go back"
        accessibilityRole="button"
        onPress={onBack}
        className="h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow-sm md:h-12 md:w-12"
      >
        <Ionicons
          name="arrow-back"
          size={23}
          color="#2f3a28"
        />
      </Pressable>

      <View className="flex-row items-center rounded-full bg-white/90 px-3 py-3 shadow-sm md:px-5">
        <Feather
          name="users"
          size={18}
          color="#2f3a28"
        />

        <Text className="ml-2 text-xs font-bold text-ink md:text-base">
          Travel leaderboard
        </Text>
      </View>
    </View>
  );
}
