import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../constants/theme";
import ExpenseRow from "./ExpenseRow";

export default function AddExpenseScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-cream" edges={["top", "bottom"]}>
      <View className="flex-row items-center px-4 py-4">
        <View className="w-14" />
        <Text className="flex-1 text-center text-lg font-bold text-ink">
          Add expense
        </Text>
        <Pressable
          className="w-14 items-end"
          onPress={() => router.navigate("/trip/budget")}
          hitSlop={8}
        >
          <Text className="text-base text-gray-500">Done</Text>
        </Pressable>
      </View>

      <View className="mt-6 flex-row items-center justify-between border-b border-ink/10 px-4 pb-5">
        <Pressable className="flex-row items-center">
          <Text className="text-3xl font-bold text-ink">£</Text>
          <View className="ml-1">
            <Ionicons name="caret-down" size={12} color={colors.ink} />
          </View>
        </Pressable>
        <Text className="text-lg font-bold text-gray-500">EGP 0.00</Text>
      </View>

      <Pressable className="flex-row items-center justify-between px-4 py-5">
        <Ionicons name="receipt" size={28} color={colors.ink} />
        <Text className="text-lg font-bold text-gray-500">Select item</Text>
      </Pressable>

      <View className="h-3 bg-ink/5" />

      <ExpenseRow label="Paid by" value="You" />
      <ExpenseRow label="Split" value="Don't split" />
      <ExpenseRow label="Date" value="Optional" />
    </SafeAreaView>
  );
}