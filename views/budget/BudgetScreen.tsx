import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import TripTopTabs from "@/components/TripTopTabs";
import BudgetSummary from "./BudgetSummary";
import ExpenseList from "./ExpenseList";
import { colors } from "../../constants/theme";

export default function BudgetScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-cream" edges={["bottom"]}>
      <TripTopTabs active="budget" />
      <BudgetSummary />

      <View className="flex-1">
        <ExpenseList />
        <View className="absolute bottom-6 left-0 right-0 items-center">
          <Pressable
            onPress={() => router.push("/trip/add-expense")}
            className="flex-row items-center rounded-full bg-pin px-6 py-4 active:opacity-80"
          >
            <Ionicons name="add" size={24} color={colors.ink} />
            <Text className="ml-2 text-base font-bold text-ink">
              Add expense
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}