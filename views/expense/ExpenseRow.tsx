import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { colors } from "../../constants/theme";

type Props = {
  label: string;
  value: string;
};

export default function ExpenseRow({ label, value }: Props) {
  return (
    <Pressable className="flex-row items-center justify-between border-b border-ink/10 px-4 py-5 active:bg-ink/5">
      <Text className="text-base text-ink">
        <Text className="font-bold">{label}: </Text>
        {value}
      </Text>
      <View>
        <Ionicons name="chevron-forward" size={20} color={colors.ink} />
      </View>
    </Pressable>
  );
}