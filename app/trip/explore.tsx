import {View,Text,Pressable,ScrollView,TextInput,Image,ImageSourcePropType} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TripTopTabs from "../../components/TripTopTabs";

type PhotoCardItem = {
  id: string;
  title: string;
  subtitle?: string;
  image: ImageSourcePropType;
};

type Listing = {
  id: string;
  title: string;
  image: ImageSourcePropType;
  source?: { label: string; badge: string };
  author?: { name: string; likes: number; views: number };
};

const SAMPLE_CATEGORIES = [
  { id: "restaurants", label: "Restaurants", emoji: "🍽️" },
  { id: "attractions", label: "Attractions", emoji: "📍" },
  { id: "cafes", label: "Cafes", emoji: "☕" },
  { id: "photo-spots", label: "Photo spots", emoji: "📸" },
];

const SAMPLE_FEATURED_LISTING: Listing = {
  id: "best-attractions",
  title: "Best attractions in New York City",
  image: require("../../assets/explore/central-park.jpg"),
  source: { label: "Most often-seen on the web", badge: "★" },
};

const SAMPLE_TOP_SEARCHES: PhotoCardItem[] = [
  {
    id: "steakhouse",
    title: "Steakhouse",
    image: require("../../assets/explore/steak.jpg"),
  },
  {
    id: "korean",
    title: "Korean restaurant",
    image: require("../../assets/explore/ramen.jpg"),
  },
  {
    id: "deli",
    title: "Deli",
    image: require("../../assets/explore/bagel.jpg"),
  },
];

const SAMPLE_POPULAR_LISTINGS: Listing[] = [
  {
    id: "five-day",
    title: "5-Day New York City Itinerary",
    image: require("../../assets/explore/central-park.jpg"),
    source: { label: "Most popular travel itinerary", badge: "★" },
  },
  {
    id: "week-in-nyc",
    title: "🦔 A week in New York City, USA",
    image: require("../../assets/explore/manhattan.jpg"),
    author: { name: "Allan", likes: 651, views: 121282 },
  },
  {
    id: "nyc-guide",
    title: "New York City Guide",
    image: require("../../assets/explore/empire-state.jpg"),
    author: { name: "Lizzy", likes: 283, views: 93670 },
  },
  {
    id: "nyc-food-guide",
    title: "New York City Food Guide",
    image: require("../../assets/explore/chrysler.jpg"),
    author: { name: "Marcus", likes: 64, views: 10242 },
  },
];

const SAMPLE_MULTI_CITY_STOPS: PhotoCardItem[] = [
  {
    id: "washington",
    title: "Washington DC",
    subtitle: "New York City to",
    image: require("../../assets/explore/washington.jpg"),
  },
  {
    id: "philadelphia",
    title: "Philadelphia",
    subtitle: "New York City to",
    image: require("../../assets/explore/philadelphia.jpg"),
  },
  {
    id: "boston",
    title: "Boston",
    subtitle: "New York City to",
    image: require("../../assets/explore/boston.jpg"),
  },
];

const SAMPLE_MORE_LISTINGS: Listing[] = [
  {
    id: "what-to-see",
    title: "What to See & Do in NYC: The Ultimate Itinerary for Visitors",
    image: require("../../assets/explore/statue-of-liberty.jpg"),
    source: { label: "New York City 4 days itinerary", badge: "N" },
  },
  {
    id: "seven-day",
    title: "▷ The Ultimate 7 Day New York Itinerary 2019",
    image: require("../../assets/explore/high-line.jpg"),
    source: { label: "New York City 7 days itinerary", badge: "N" },
  },
  {
    id: "tripadvisor",
    title: "Top things to do in New York City",
    image: require("../../assets/explore/new-york.jpg"),
    source: { label: "Tripadvisor Top 20", badge: "T" },
  },
  {
    id: "lonely-planet",
    title: "Top things to do in New York City, USA",
    image: require("../../assets/explore/central-park.jpg"),
    source: { label: "Lonely Planet’s Top Choices", badge: "L" },
  },
  {
    id: "one-day",
    title: "If you only have a day",
    image: require("../../assets/explore/brooklyn-bridge.jpg"),
    source: { label: "Most-visited by Google users", badge: "G" },
  },
];

export default function Explore() {
  const renderListing = (listing: Listing) => (
    <Pressable
      key={listing.id}
      className="flex-row items-center border-b border-gray-200 py-4 active:opacity-70"
    >
      <View className="h-28 w-28 overflow-hidden rounded-xl bg-gray-200">
        <Image
          source={listing.image}
          resizeMode="cover"
          style={{ width: 112, height: 112, borderRadius: 12, backgroundColor: "#E5E7EB" }}
        />
      </View>

      <View className="ml-4 flex-1">
        <Text className="text-lg leading-7 text-gray-900" numberOfLines={2}>
          {listing.title}
        </Text>

        {listing.source && (
          <View className="mt-1 flex-row items-center">
            <View className="h-8 w-8 items-center justify-center rounded-full bg-white">
              <Text className="text-xs font-bold text-gray-400">
                {listing.source.badge}
              </Text>
            </View>
            <Text className="ml-2 flex-1 text-base text-gray-500" numberOfLines={1}>
              {listing.source.label}
            </Text>
          </View>
        )}

        {listing.author && (
          <View>
            <View className="mt-1 flex-row items-center">
              <View className="h-8 w-8 items-center justify-center rounded-full bg-gray-200">
                <Ionicons name="person" size={16} color="#9CA3AF" />
              </View>
              <Text className="ml-2 text-base text-gray-500">{listing.author.name}</Text>
            </View>

            <View className="mt-3 flex-row items-center gap-5">
              <View className="flex-row items-center">
                <Ionicons name="heart-outline" size={24} color="#111827" />
                <Text className="ml-2 text-lg text-gray-800">{listing.author.likes}</Text>
              </View>
              <View className="flex-row items-center">
                <Ionicons name="eye-outline" size={24} color="#111827" />
                <Text className="ml-2 text-lg text-gray-800">{listing.author.views}</Text>
              </View>
              <Ionicons name="arrow-redo" size={22} color="#111827" />
            </View>
          </View>
        )}
      </View>
    </Pressable>
  );

  const renderPhotoCards = (items: PhotoCardItem[]) => (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="-mx-4">
      <View className="flex-row gap-3 px-4">
        {items.map((item) => (
          <Pressable
            key={item.id}
            className="h-40 w-32 overflow-hidden rounded-2xl bg-gray-200 active:opacity-80"
          >
            <Image
              source={item.image}
              resizeMode="cover"
              style={{ width: 128, height: 160, backgroundColor: "#E5E7EB" }}
            />
            <View className="absolute bottom-0 left-0 right-0 top-0 items-center justify-end bg-black/25 px-2 pb-3">
              {item.subtitle && (
                <Text className="text-center text-sm text-white">{item.subtitle}</Text>
              )}
              <Text className="text-center text-base font-bold text-white">
                {item.title}
              </Text>
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );

  return (
    <View className="flex-1 bg-[#F5F3EE]">
      <TripTopTabs active="explore" />

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-4 pb-2">
          <View className="mt-4 flex-row items-center rounded-2xl bg-white px-4 py-3.5">
            <Ionicons name="search" size={22} color="#4B5563" />
            <TextInput
              className="ml-3 flex-1 text-lg text-gray-900"
              defaultValue="New York City"
              placeholder="Search places"
              placeholderTextColor="#9CA3AF"
              returnKeyType="search"
            />
          </View>

          <View className="mt-6 flex-row items-center justify-between">
            <Text className="text-2xl font-bold text-gray-900">Categories</Text>
            <Pressable className="active:opacity-60">
              <Text className="text-base font-bold text-gray-900">See all</Text>
            </Pressable>
          </View>

          <View className="mt-4 flex-row flex-wrap justify-between gap-y-3">
            {SAMPLE_CATEGORIES.map((category) => (
              <Pressable
                key={category.id}
                className="w-[48.5%] flex-row items-center rounded-2xl bg-white px-4 py-4 active:opacity-70"
              >
                <Text className="text-2xl">{category.emoji}</Text>
                <Text className="ml-3 text-lg text-gray-900">{category.label}</Text>
              </Pressable>
            ))}
          </View>

          <View className="mt-6 h-px bg-gray-200" />

          {renderListing(SAMPLE_FEATURED_LISTING)}

          <Text className="mt-6 text-2xl font-bold text-gray-900">Top searches</Text>
          <View className="mt-4">{renderPhotoCards(SAMPLE_TOP_SEARCHES)}</View>

          <View className="mt-6 h-px bg-gray-200" />

          {SAMPLE_POPULAR_LISTINGS.map(renderListing)}

          <Text className="mt-6 text-2xl font-bold text-gray-900">Multi-city stops</Text>
          <View className="mb-6 mt-4">{renderPhotoCards(SAMPLE_MULTI_CITY_STOPS)}</View>

          <View className="h-px bg-gray-200" />

          {SAMPLE_MORE_LISTINGS.map(renderListing)}
        </View>
      </ScrollView>
    </View>
  );
}