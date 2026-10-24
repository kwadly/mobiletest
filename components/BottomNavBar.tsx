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
      className="flex-row items-center justify-around border-t border-gray-200 bg-white pt-2"
      style={{ paddingBottom: Math.max(insets.bottom, 8) }}
    >
      <Pressable className="p-2" onPress={() => router.navigate("/")}>
        <Ionicons name="home" size={26} color={color("home")} />
      </Pressable>

      {/* Not wired up yet: no screen exists for this button */}
      <Pressable className="h-12 w-12 items-center justify-center rounded-full bg-[#F4573F]">
        <Ionicons name="add" size={32} color="#FFFFFF" />
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