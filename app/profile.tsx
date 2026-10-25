import { View, Text, Pressable, ScrollView, Image } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BottomNavBar from "../components/BottomNavBar";

const user = {
  name: "Geronimo Grands",
  handle: "@geronimo37",
  followers: 0,
  following: 0,
};

const trip = {
  title: "Trip to New York City",
  daysLeft: 7,
  dates: "Oct 21 – Oct 27",
  placesCount: 0,
};

const TABS = ["Trips", "Guides", "Journals"];

export default function Profile() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-[#F5F3EE]">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View
          className="overflow-hidden bg-[#e5e3df] px-3"
          style={{ height: 150 + insets.top, paddingTop: insets.top + 8 }}
        >
          <Image
            source={require("../assets/map.png")}
            resizeMode="contain"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              transform: [{ scale: 3.1 }],
            }}
          />

          <View className="flex-row items-center justify-end">
            <Pressable className="rounded-full bg-gray-300 px-4 py-2.5 active:opacity-80">
              <Text className="text-base font-semibold text-gray-900">
                Add visited places
              </Text>
            </Pressable>
          </View>
        </View>

        <View className="-mt-6 rounded-t-3xl bg-[#F5F3EE] px-3.5 pt-5">
          <View className="flex-row items-center">
            <View>
              <View className="h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                <Ionicons name="person" size={26} color="#9CA3AF" />
              </View>
              <View className="absolute -bottom-1 -right-1 h-6 w-6 items-center justify-center rounded-full border-2 border-[#F5F3EE] bg-gray-100">
                <Ionicons name="pencil" size={11} color="#374151" />
              </View>
            </View>

            <View className="ml-4 flex-1">
              <Text className="text-lg font-bold text-gray-900">{user.name}</Text>
              <Text className="text-base text-gray-500">{user.handle}</Text>
            </View>

            <Pressable className="p-2">
              <Ionicons name="ellipsis-horizontal" size={24} color="#111827" />
            </Pressable>
          </View>

          <View className="mt-4 flex-row items-center justify-between">
            <View className="flex-row gap-6">
              <View>
                <Text className="text-xl text-gray-500">{user.followers}</Text>
                <Text className="text-[11px] font-bold tracking-widest text-gray-500">
                  FOLLOWERS
                </Text>
              </View>
              <View>
                <Text className="text-xl text-gray-500">{user.following}</Text>
                <Text className="text-[11px] font-bold tracking-widest text-gray-500">
                  FOLLOWING
                </Text>
              </View>
            </View>

            <Pressable className="flex-row items-center rounded-full border border-gray-300 px-6 py-2.5 active:opacity-70">
              <Ionicons name="arrow-redo" size={22} color="#111827" />
              <Text className="ml-2 text-base font-bold text-gray-900">Share</Text>
            </Pressable>
          </View>

          <View className="mt-5 flex-row items-center justify-between border-b border-gray-200">
            <View className="flex-row">
              {TABS.map((tab) => {
                const isActive = tab === "Trips";
                return (
                  <View
                    key={tab}
                    className={`mr-7 border-b-2 pb-3 ${
                      isActive ? "border-[#2f3a28]" : "border-transparent"
                    }`}
                  >
                    <Text
                      className={`text-lg font-bold ${
                        isActive ? "text-[#2f3a28]" : "text-gray-500"
                      }`}
                    >
                      {tab}
                    </Text>
                  </View>
                );
              })}
            </View>

            <View className="flex-row gap-5 pb-3">
              <Ionicons name="time-outline" size={26} color="#4B5563" />
              <Ionicons name="swap-vertical" size={26} color="#4B5563" />
            </View>
          </View>

          <Pressable
            className="mb-6 mt-6 flex-row active:opacity-80"
            onPress={() => router.push("/trip/itinerary")}
          >
            <Image
              source={require("../assets/explore/new-york.jpg")}
              resizeMode="cover"
              style={{ width: 80, height: 80, borderRadius: 12 }}
            />

            <View className="ml-4 flex-1">
              <View className="flex-row items-center justify-between">
                <View className="rounded-lg bg-[#c1cb9c]/40 px-3 py-1.5">
                  <Text className="text-sm font-bold text-[#2f3a28]">
                    {trip.daysLeft} days left
                  </Text>
                </View>
                <View className="flex-row gap-4">
                  <Ionicons name="arrow-redo" size={22} color="#6B7280" />
                  <Ionicons name="ellipsis-horizontal" size={22} color="#6B7280" />
                </View>
              </View>

              <Text className="mt-2 text-lg text-gray-900">{trip.title}</Text>

              <View className="mt-1 flex-row items-center">
                <Text className="text-base text-gray-500">
                  {trip.dates} • {trip.placesCount === 0 ? "No places" : `${trip.placesCount} places`}
                </Text>
              </View>

              <View className="mt-3 flex-row items-center">
                <Pressable className="flex-1 flex-row items-center justify-center rounded-full border border-gray-300 py-3 active:opacity-70">
                  <MaterialCommunityIcons name="map-marker-path" size={22} color="#111827" />
                  <Text className="ml-2 text-base font-bold text-gray-900">
                    Track this trip
                  </Text>
                </Pressable>
                <Ionicons
                  name="eye-off-outline"
                  size={26}
                  color="#6B7280"
                  style={{ marginLeft: 14 }}
                />
              </View>
            </View>
          </Pressable>
        </View>
      </ScrollView>

      <BottomNavBar active="profile" />
    </View>
  );
}