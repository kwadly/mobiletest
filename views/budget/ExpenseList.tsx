import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

export default function ExpenseList() {
  return (
    <View className="-mt-4 flex-1 rounded-t-3xl bg-cream px-4 pt-5">
      <View className="flex-row items-center justify-between">
        <Text className="text-3xl font-bold text-ink">Expenses</Text>
        <Pressable className="flex-row items-center">
          <Text className="text-sm text-ink">
            <Text className="font-bold">Sort: </Text>
            Date (newest first)
          </Text>
          <Ionicons
            name="caret-down"
            size={14}
            color="#2f3a28"
            style={{ marginLeft: 4 }}
          />
        </Pressable>
      </View>

      <Text className="mt-2 text-base text-gray-500">
        You haven’t added any expenses yet. Track your spending and split costs
        by adding an expense.
      </Text>
    </View>
  );
}