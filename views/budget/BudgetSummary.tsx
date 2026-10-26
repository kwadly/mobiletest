import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type PillProps = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
};

function ActionPill({ icon, label }: PillProps) {
  return (
    <Pressable className="h-11 flex-row items-center rounded-full border border-white px-4 active:opacity-70">
      <Ionicons name={icon} size={18} color="#ffffff" />
      <Text className="ml-2 text-sm font-bold text-white">{label}</Text>
    </Pressable>
  );
}

type Props = {
  amount?: string;
};

export default function BudgetSummary({ amount = "0.00" }: Props) {
  return (
    <View className="bg-ink px-4 pb-8 pt-4">
      <View className="flex-row items-center justify-between">
        <View className="w-6" />
        <Text className="text-5xl font-bold text-white">EGP {amount}</Text>
        <Pressable hitSlop={8}>
          <Ionicons name="settings-sharp" size={22} color="#ffffff" />
        </Pressable>
      </View>

      <Text className="mt-3 text-center text-base font-bold text-white">
        Set a budget
      </Text>

      <View className="mt-4 flex-row items-center justify-center gap-2">
        <Pressable className="h-11 w-11 items-center justify-center rounded-full border border-white active:opacity-70">
          <Ionicons name="person-add" size={18} color="#ffffff" />
        </Pressable>
        <ActionPill icon="cash-outline" label="Group balances" />
        <ActionPill icon="bar-chart-outline" label="View breakdown" />
      </View>
    </View>
  );
}