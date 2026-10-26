import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { colors } from "../../constants/theme";

type Props = {
  title: string;
};

export default function GuideHeader({ title }: Props) {
  const router = useRouter();
  return (
    <View className="flex-row items-center bg-cream px-4 py-3">
      <Pressable className="w-10" onPress={() => router.navigate("/trip/explore")} hitSlop={8}>
        <Ionicons name="arrow-back" size={24} color="#6b7280" />
      </Pressable>
      <Text
        className="flex-1 text-center text-lg font-bold text-ink"
        numberOfLines={1}
      >
        {title}
      </Text>
      <Pressable className="w-10 items-end" hitSlop={8}>
        <Ionicons name="arrow-down-circle" size={34} color={colors.ink} />
      </Pressable>
    </View>
  );
}