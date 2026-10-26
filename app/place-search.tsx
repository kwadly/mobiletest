import { router } from "expo-router";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Place = {
  id: string;
  name: string;
  country?: string;
  kind: "place" | "user";
};

const popularPlaces: Place[] = [
  { id: "japan", name: "Japan", kind: "place" },
  {
    id: "new-york-city",
    name: "New York City",
    country: "United States",
    kind: "place",
  },
  {
    id: "london",
    name: "London",
    country: "United Kingdom",
    kind: "place",
  },
  { id: "paris", name: "Paris", country: "France", kind: "place" },
  { id: "tokyo", name: "Tokyo", country: "Japan", kind: "place" },
  { id: "cairo", name: "Cairo", country: "Egypt", kind: "place" },
  { id: "rome", name: "Rome", country: "Italy", kind: "place" },
  { id: "dubai", name: "Dubai", country: "United Arab Emirates", kind: "place" },
];

const users: Place[] = [
  { id: "madison-brdaric", name: "Madison Brdaric", kind: "user" },
];

const initialRecentPlaces = [
  popularPlaces[1],
  popularPlaces[0],
].filter((place): place is Place => place !== undefined);

function filterPlaces(places: Place[], query: string) {
  const normalizedQuery = query.trim().toLocaleLowerCase();
  return normalizedQuery
    ? places.filter((place) =>
        `${place.name} ${place.country ?? ""}`
          .toLocaleLowerCase()
          .includes(normalizedQuery),
      )
    : places;
}

type PlaceRowProps = {
  place: Place;
  selected: boolean;
  onPress: () => void;
};

function PlaceRow({ place, selected, onPress }: PlaceRowProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected }}
      onPress={onPress}
      className="min-h-[48px] flex-row items-center px-1 py-2 active:bg-pin/20"
    >
      {place.kind === "user" ? (
        <Feather name="user" size={18} color="#2f3a28" />
      ) : (
        <View className="relative h-5 w-5 items-center justify-center">
          <Ionicons name="location-sharp" size={19} color="#2f3a28" />
          <View className="absolute top-[6px] h-[5px] w-[5px] rounded-full bg-pin" />
        </View>
      )}
      <View className="ml-4 flex-1">
        <Text className="text-sm font-medium text-ink">{place.name}</Text>
        {place.country ? (
          <Text className="mt-0.5 text-xs text-ink/60">{place.country}</Text>
        ) : null}
      </View>
      {selected ? <Feather name="check" size={18} color="#2f3a28" /> : null}
    </Pressable>
  );
}

export default function PlaceSearchScreen() {
  const insets = useSafeAreaInsets();
  const [query, setQuery] = useState("");
  const [recentPlaces, setRecentPlaces] = useState(initialRecentPlaces);
  const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null);

  const normalizedQuery = query.trim();
  const filteredRecentPlaces = filterPlaces(recentPlaces, query);
  const filteredPopularPlaces = filterPlaces(popularPlaces, query);
  const filteredUsers = filterPlaces(users, query);

  const selectPlace = (place: Place) => {
    setSelectedPlaceId(place.id);
    if (place.kind === "place") {
      setRecentPlaces((current) => [
        place,
        ...current.filter((recent) => recent.id !== place.id),
      ]);
    }
  };

  return (
    <View className="flex-1 items-center bg-background">
      <View
        className="w-full flex-1 px-5 md:px-8"
        style={{ paddingTop: insets.top + 12 }}
      >
        <View className="h-12 flex-row items-center rounded-xl bg-[#f3f4f5] px-3">
          <Feather name="search" size={18} color="#2f3a28" />
          <TextInput
            accessibilityLabel="Search places or users"
            autoCapitalize="none"
            className="ml-2 h-full flex-1 text-sm text-ink outline-none"
            onChangeText={setQuery}
            placeholder="Search place or user"
            placeholderTextColor="#7b8076"
            returnKeyType="search"
            value={query}
          />
          <Pressable
            accessibilityLabel="Clear search"
            accessibilityRole="button"
            onPress={() => setQuery("")}
            className="h-7 w-7 items-center justify-center rounded-full bg-[#e2e4e6]"
          >
            <Feather name="x" size={17} color="#2f3a28" />
          </Pressable>
        </View>

        <ScrollView
          className="mt-5 flex-1"
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ paddingBottom: 24 }}
        >
          {filteredRecentPlaces.length > 0 ? (
            <View>
              <Text className="mb-3 text-xs font-bold text-ink">
                Recently searched
              </Text>
              {filteredRecentPlaces.map((place) => (
                <PlaceRow
                  key={place.id}
                  place={place}
                  selected={selectedPlaceId === place.id}
                  onPress={() => selectPlace(place)}
                />
              ))}
            </View>
          ) : null}

          {filteredPopularPlaces.length > 0 ? (
            <View className="mt-4">
              <Text className="mb-3 text-xs font-bold text-ink">
                Popular destinations
              </Text>
              {filteredPopularPlaces.map((place) => (
                <PlaceRow
                  key={place.id}
                  place={place}
                  selected={selectedPlaceId === place.id}
                  onPress={() => selectPlace(place)}
                />
              ))}
            </View>
          ) : null}

          {normalizedQuery && filteredUsers.length > 0 ? (
            <View className="mt-4">
              <Text className="mb-3 text-xs font-bold text-ink">People</Text>
              {filteredUsers.map((place) => (
                <PlaceRow
                  key={place.id}
                  place={place}
                  selected={selectedPlaceId === place.id}
                  onPress={() => selectPlace(place)}
                />
              ))}
            </View>
          ) : null}

          {normalizedQuery &&
          filteredRecentPlaces.length === 0 &&
          filteredPopularPlaces.length === 0 &&
          filteredUsers.length === 0 ? (
            <Text className="py-8 text-center text-sm text-ink/60">
              No places or users found.
            </Text>
          ) : null}
        </ScrollView>
      </View>
      <Pressable
        onPress={() => router.navigate("/home")}
        className="absolute right-5 rounded-full bg-pin px-6 py-3"
        style={{ bottom: insets.bottom + 20 }}
      >
        <Text className="text-sm font-bold text-ink">Done</Text>
      </Pressable>
    </View>
  );
}
