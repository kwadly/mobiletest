import { useState } from "react";
import { View, Text, Pressable, ScrollView, Image } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import TripTopTabs from "../../components/TripTopTabs";

const SAMPLE_DAYS = [
  { id: "wed", chip: "Wed 10/21", title: "Wed 10/21" },
  { id: "thu", chip: "Thu 10/22", title: "Thu 10/22" },
  { id: "fri", chip: "Fri 10/23", title: "Fri 10/23" },
  { id: "sat", chip: "Sat 10/24", title: "Sat 10/24" },
  { id: "sun", chip: "Sun 10/25", title: "Sun 10/25" },
  { id: "mon", chip: "Mon 10/26", title: "Mon 10/26" },
  { id: "tue", chip: "Tue 10/27", title: "Tue 10/27" },
];

const SAMPLE_PLACES = [
  {
    id: 1,
    name: "Steve’s Authentic Key Lime Pie",
    hours: "Open 12–6:30PM",
    category: "Pie shop",
    image: require("../../assets/itinerary/key-lime-pie.webp"),
  },
];

const SAMPLE_RECOMMENDED = [
  {
    name: "Central Park",
    image: require("../../assets/explore/central-park.jpg"),
  },
  {
    name: "9/11 Memorial Museum",
    image: require("../../assets/itinerary/memorial-museum.webp"),
  },
];

export default function Itinerary() {
  const [expandedId, setExpandedId] = useState(SAMPLE_DAYS[0].id);
  const [showRecommended, setShowRecommended] = useState(true);

  return (
    <View className="flex-1 bg-white">
      <TripTopTabs active="itinerary" />

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex-row items-center gap-3 px-4 py-3">
            <View className="h-12 w-12 items-center justify-center rounded-full bg-[#2f3a28]">
              <MaterialCommunityIcons name="calendar-edit" size={24} color="#FFFFFF" />
            </View>
            {SAMPLE_DAYS.map((day) => {
              const isActive = day.id === expandedId;
              return (
                <Pressable
                  key={day.id}
                  onPress={() => setExpandedId(day.id)}
                  className={`rounded-full px-5 py-3 ${
                    isActive ? "bg-[#2f3a28]" : "bg-gray-100"
                  }`}
                >
                  <Text
                    className={`text-base font-bold ${
                      isActive ? "text-white" : "text-gray-500"
                    }`}
                  >
                    {day.chip}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </ScrollView>

        {SAMPLE_DAYS.map((day, index) => {
          const isExpanded = day.id === expandedId;
          const places = index === 0 ? SAMPLE_PLACES : [];

          return (
            <View key={day.id}>
              {index > 0 && <View className="h-3 bg-gray-100" />}

              <View className="px-4 py-4">
                <Pressable
                  className="flex-row items-center justify-between"
                  onPress={() => setExpandedId(day.id)}
                >
                  <View className="flex-1 flex-row items-baseline">
                    <Text className="text-4xl font-bold text-gray-900">{day.title}</Text>
                  </View>
                  <Ionicons
                    name={isExpanded ? "ellipsis-horizontal" : "chevron-down"}
                    size={24}
                    color="#6B7280"
                  />
                </Pressable>

                {isExpanded && (
                  <View className="mt-5">
                    {places.map((place) => (
                      <View
                        key={place.id}
                        className="mb-4 flex-row rounded-3xl border border-gray-100 bg-white p-4 shadow-md"
                      >
                        <View className="flex-1 pr-3">
                          <View className="flex-row items-center">
                            <View className="h-7 w-7 items-center justify-center rounded-full bg-[#c1cb9c]">
                              <Text className="text-sm font-bold text-[#2f3a28]">
                                {place.id}
                              </Text>
                            </View>
                            <Text className="ml-3 flex-1 text-lg font-bold text-gray-900">
                              {place.name}
                            </Text>
                          </View>

                          <View className="mt-3 flex-row items-center">
                            <Ionicons name="time-outline" size={20} color="#6B7280" />
                            <Text className="ml-2 text-base text-gray-500">{place.hours}</Text>
                          </View>

                          <View className="mt-3 self-start rounded-lg bg-gray-100 px-3 py-1.5">
                            <Text className="text-sm font-semibold text-gray-700">
                              {place.category}
                            </Text>
                          </View>
                        </View>
                        <Image
                          source={place.image}
                          resizeMode="cover"
                          style={{ width: 80, height: 80, borderRadius: 12, alignSelf: "center" }}
                        />
                      </View>
                    ))}

                    <View className="flex-row items-center">
                      <Pressable className="flex-1 flex-row items-center rounded-2xl bg-gray-100 px-4 py-3.5 active:opacity-70">
                        <Ionicons name="location" size={22} color="#6B7280" />
                        <Text className="ml-3 text-lg text-gray-500">Add a place</Text>
                      </Pressable>
                      <Pressable className="ml-3 h-12 w-12 items-center justify-center rounded-full bg-gray-100 active:opacity-70">
                        <MaterialCommunityIcons name="note-outline" size={22} color="#111827" />
                      </Pressable>
                      <Pressable className="ml-3 h-12 w-12 items-center justify-center rounded-full bg-gray-100 active:opacity-70">
                        <MaterialCommunityIcons name="format-list-checks" size={22} color="#111827" />
                      </Pressable>
                    </View>

                    <Pressable
                      className="mt-6 flex-row items-center"
                      onPress={() => setShowRecommended(!showRecommended)}
                    >
                      <View className="h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                        <Ionicons
                          name={showRecommended ? "chevron-down" : "chevron-forward"}
                          size={20}
                          color="#4B5563"
                        />
                      </View>
                      <Text className="ml-3 text-base font-bold text-gray-600">
                        Recommended places
                      </Text>
                    </Pressable>

                    {showRecommended && (
                      <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        className="mt-3"
                      >
                        <View className="flex-row gap-3">
                          {SAMPLE_RECOMMENDED.map((place) => (
                            <View
                              key={place.name}
                              className="h-16 w-60 flex-row items-stretch overflow-hidden rounded-2xl border border-dashed border-gray-300"
                            >
                              <Image
                                source={place.image}
                                resizeMode="cover"
                                style={{ width: 64, height: "100%" }}
                              />
                              <View className="flex-1 justify-center px-3">
                                <Text className="text-lg leading-6 text-gray-900" numberOfLines={2}>
                                  {place.name}
                                </Text>
                              </View>
                              <View className="justify-center pr-3">
                                <Pressable className="h-10 w-10 items-center justify-center rounded-full bg-gray-100 active:opacity-70">
                                  <Ionicons name="add" size={22} color="#4B5563" />
                                </Pressable>
                              </View>
                            </View>
                          ))}
                        </View>
                      </ScrollView>
                    )}
                  </View>
                )}
              </View>
            </View>
          );
        })}

        <View className="h-10" />
      </ScrollView>
    </View>
  );
}