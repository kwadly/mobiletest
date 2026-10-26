import { Text, View } from "react-native";

export default function GuideIntro() {
  return (
    <View className="px-4 py-6">
      <Text className="text-base leading-7 text-ink">
        Are you looking for the best deli in New York City? You’re not alone!
        Many of us love traveling on the TripWise team, so naturally we’re
        always on the hunt to find the most popular spots anytime we travel
        somewhere new.
      </Text>

      <Text className="mt-5 text-base font-bold text-ink">Why trust us</Text>
      <Text className="mt-1 text-base leading-7 text-ink">
        We gathered results from many reputable sites and blogs in one place and
        ranked them by how many times they were mentioned, so you know you’re
        getting the best of the best.
      </Text>
    </View>
  );
}