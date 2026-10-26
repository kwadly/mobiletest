import { Feather, Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import BottomNavBar from "@/components/BottomNavBar";
import GuideCard from "../components/profile/GuideCard";
import StatItem from "../components/profile/StatItem";
import TripCard from "../components/profile/TripCard";

export default function UserProfileScreen() {
  const insets = useSafeAreaInsets();
  const [tab, setTab] = useState<"Guides" | "Trips">("Guides");

  return (
    <View className="flex-1 items-center bg-background">
      <View className="w-full max-w-[1920px] flex-1 bg-background">
        <ScrollView
          className="flex-1"
          contentContainerStyle={{ paddingBottom: 18 }}
        >
          <View className="relative h-[150px] w-full overflow-hidden md:h-[190px] xl:h-[220px] 2xl:h-[260px]">
            <Image
              source={require("../assets/images/map-header.png")}
              resizeMode="cover"
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            />
            <View
              className="flex-row items-start justify-between px-4 md:px-8 xl:px-12 2xl:px-16"
              style={{ paddingTop: insets.top + 12 }}
            >
              <Pressable
                onPress={() => router.back()}
                className="h-10 w-10 items-center justify-center rounded-full bg-white/90"
              >
                <Ionicons name="arrow-back" size={21} color="#2f3a28" />
              </Pressable>

              <Link href="/travel-map" asChild>
                <Pressable
                  accessibilityRole="button"
                  className="rounded-full bg-white/90 px-5 py-3 md:px-6"
                >
                  <Text className="text-xs font-bold text-ink">View map</Text>
                </Pressable>
              </Link>
            </View>
          </View>
          <View className="-mt-3 rounded-t-3xl bg-background px-4 pt-4 md:-mt-5 md:px-8 md:pt-7 xl:px-12 xl:pt-8 2xl:px-16">
            <View className="flex-row items-center">
              <View className="h-12 w-12 shrink-0 overflow-hidden rounded-full md:h-16 md:w-16 2xl:h-20 2xl:w-20">
                <Image
                  source={require("../assets/images/avatar.png")}
                  resizeMode="cover"
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
              <View className="ml-3 flex-1">
                <View className="flex-row items-center">
                  <Text className="text-sm font-bold text-ink md:text-base">
                    Madison Brdaric
                  </Text>
                </View>
                <Text className="mt-1 text-xs text-ink/60">@meb520</Text>
              </View>
              <Feather name="more-horizontal" size={22} color="#2f3a28" />
            </View>
            <View className="mt-5 flex-row flex-wrap items-center justify-between gap-y-4 md:mt-6">
              <View className="flex-row">
                <StatItem value="5" label="FOLLOWERS" />
                <StatItem value="0" label="FOLLOWING" />
              </View>
              <View className="flex-row items-center">
                <View className="rounded-full bg-pin px-5 py-3">
                  <Text className="text-xs font-bold text-ink">Follow</Text>
                </View>
                <View className="ml-2 flex-row items-center rounded-full border border-ink/15 px-3 py-3">
                  <Feather name="share" size={16} color="#2f3a28" />
                  <Text className="ml-1 text-xs font-bold text-ink">Share</Text>
                </View>
              </View>
            </View>
            <View className="mt-6 flex-row border-b border-ink/10 md:mt-8">
              {(["Guides", "Trips"] as const).map((item) => (
                <Pressable
                  key={item}
                  onPress={() => setTab(item)}
                  className="mr-6 items-center md:mr-8"
                >
                  <Text
                    className={
                      tab === item
                        ? "pb-3 text-xs font-bold text-ink md:text-sm"
                        : "pb-3 text-xs font-bold text-ink/60 md:text-sm"
                    }
                  >
                    {item}
                  </Text>
                  <View
                    className={
                      tab === item
                        ? "h-[2px] w-full bg-pin"
                        : "h-[2px] w-full bg-transparent"
                    }
                  />
                </Pressable>
              ))}
            </View>
            {tab === "Guides" ? (
              <View className="lg:-mx-3 lg:mt-2 lg:flex-row lg:flex-wrap">
                <View className="lg:w-1/2 lg:px-3 lg:pb-4">
                  <GuideCard
                    image={require("../assets/images/nc_mountains.png")}
                    title="NC Mountains Guide"
                    likes={1}
                    views={70}
                  />
                </View>
                <View className="lg:w-1/2 lg:px-3 lg:pb-4">
                  <GuideCard
                    image={require("../assets/images/nashville.png")}
                    title="Nashville Guide"
                    likes={3}
                    views={267}
                  />
                </View>
                <View className="lg:w-1/2 lg:px-3 lg:pb-4">
                  <GuideCard
                    image={require("../assets/images/mountain.jpg")}
                    title="Blue Ridge Mountain Guide"
                    likes={5}
                    views={184}
                  />
                </View>
                <View className="lg:w-1/2 lg:px-3 lg:pb-4">
                  <GuideCard
                    image={require("../assets/images/homeMountain.jpg")}
                    title="Woods Mountain Guide"
                    likes={2}
                    views={96}
                  />
                </View>
                <View className="lg:w-1/2 lg:px-3 lg:pb-4">
                  <GuideCard
                    image={require("../assets/images/austria.jpg")}
                    title="Austria Guide"
                    likes={4}
                    views={125}
                  />
                </View>
              </View>
            ) : (
              <View className="mt-2">
                <TripCard
                  image={require("../assets/images/nashville.png")}
                  title="Trip to Nashville"
                  dateRange="Mar 1 – 4, 2025"
                  placeCount={29}
                />
                <TripCard
                  image={require("../assets/images/nc_mountains.png")}
                  title="Trip to NC Mountains"
                  dateRange="Oct 12 – 16, 2024"
                  placeCount={18}
                />
                <TripCard
                  image={require("../assets/images/switzerland.jpg")}
                  title="Trip to Switzerland"
                  dateRange="Jun 10 – 15, 2025"
                  placeCount={12}
                />
                <TripCard
                  image={require("../assets/images/italy.jpg")}
                  title="Trip to Italy"
                  dateRange="Jul 5 – 12, 2025"
                  placeCount={16}
                />
                <TripCard
                  image={require("../assets/images/bali.jpg")}
                  title="Trip to Bali"
                  dateRange="Aug 2 – 8, 2025"
                  placeCount={10}
                />
              </View>
            )}
          </View>
        </ScrollView>
        <BottomNavBar active="home" />
      </View>
    </View>
  );
}