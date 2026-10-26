import { View, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Tab = "home" | "add" | "profile";

const ACTIVE = "#1F2937";
const INACTIVE = "#9CA3AF";

export default function BottomNavBar({ active }: { active: Tab }) {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const color = (tab: Tab) => (active === tab ? ACTIVE : INACTIVE);

  return (
    <View
      className="flex-row items-center justify-around border-t border-gray-200 bg-[#F5F3EE] pt-2"
      style={{ paddingBottom: Math.max(insets.bottom, 8) }}
    >
      <Pressable className="p-2" onPress={() => router.navigate("/home")}>
        <Ionicons name="home" size={26} color={color("home")} />
      </Pressable>

      <Pressable
        className="h-12 w-12 items-center justify-center rounded-full bg-[#c1cb9c]"
        onPress={() => router.navigate("/destinations")}
      >
        <Ionicons name="add" size={32} color="#2f3a28" />
      </Pressable>

      <Pressable className="p-2" onPress={() => router.navigate("/profile")}>
        <Ionicons
          name={active === "profile" ? "person-circle" : "person-circle-outline"}
          size={30}
          color={color("profile")}
        />
      </Pressable>
    </View>
  );
}