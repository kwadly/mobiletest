import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GuideHeader from "./GuideHeader";
import GuideHero from "./GuideHero";
import GuideIntro from "./GuideIntro";
import PlaceCard from "./PlaceCard";
import { PLACES } from "./mockPlaces";

const TITLE = "The 50 best delis in New York City";

export default function GuideScreen() {
  return (
    <SafeAreaView className="flex-1 bg-cream" edges={["top", "bottom"]}>
      <GuideHeader title={TITLE} />

      <View className="flex-1">
        <ScrollView contentContainerClassName="pb-6">
          <GuideHero title={TITLE} />
          <GuideIntro />
          {PLACES.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}