
import { View } from "react-native";
import { router } from "expo-router";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import AddVisitedPlacesSheet from "../components/map/AddVisitedPlacesSheet";
import StaticWorldMap from "../components/map/StaticWorldMap";
import MapToolbar from "../components/map/MapToolbar";
import VisitSummary from "../components/map/VisitSummary";
import { type VisitedCountry } from "../components/map/visitedCountries";
import BottomNavBar from "@/components/BottomNavBar";

export default function TravelMapScreen() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [visitedCountries, setVisitedCountries] = useState<VisitedCountry[]>([]);

  function handleSelectCountry(country: VisitedCountry) {
    setVisitedCountries((current) =>
      current.some((visited) => visited.code === country.code)
        ? current
        : [...current, country]
    );
  }

  return (
    <SafeAreaView
      edges={["bottom"]}
      className="flex-1 bg-background"
      style={{ flex: 1, minHeight: 0 }}
    >
      <View
        className="flex-1 overflow-hidden bg-background"
        style={{ flex: 1, minHeight: 0 }}
      >
        <StaticWorldMap />

        <View
          pointerEvents="box-none"
          className="absolute left-0 right-0 top-0"
        >
          <MapToolbar onBack={() => router.back()} />
        </View>
      </View>

      <VisitSummary
        countryCount={visitedCountries.length}
        onAddVisitedPlaces={() => setIsSearchVisible(true)}
      />

      <BottomNavBar active="home" />

      <AddVisitedPlacesSheet
        onClose={() => setIsSearchVisible(false)}
        onSelectCountry={handleSelectCountry}
        selectedCountryCodes={visitedCountries.map(
          (country) => country.code
        )}
        visible={isSearchVisible}
      />
    </SafeAreaView>
  );
}
