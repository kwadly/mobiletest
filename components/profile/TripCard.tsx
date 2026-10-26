import { Feather } from "@expo/vector-icons";
import { Image, ImageSourcePropType, Text, View } from "react-native";

type Props = {
  image: ImageSourcePropType;
  title: string;
  dateRange: string;
  placeCount: number;
};

export default function TripCard({
  image,
  title,
  dateRange,
  placeCount,
}: Props) {
  return (
    <View className="flex-row items-center border-b border-ink/10 py-3 md:py-4">
      <View className="h-[76px] w-[76px] shrink-0 overflow-hidden rounded-xl md:h-[96px] md:w-[96px] 2xl:h-[112px] 2xl:w-[112px]">
        <Image
          source={image}
          resizeMode="cover"
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View className="ml-4 min-w-0 flex-1">
        <Text
          numberOfLines={1}
          className="text-base text-ink md:text-lg 2xl:text-xl"
        >
          {title}
        </Text>
        <View className="mt-2 flex-row items-center">
          <View className="h-7 w-7 shrink-0 overflow-hidden rounded-full">
            <Image
              source={require("../../assets/images/avatar.png")}
              resizeMode="cover"
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <Text
            numberOfLines={2}
            className="ml-2 flex-1 text-xs text-ink/60 md:text-sm"
          >
            {dateRange} · {placeCount} places
          </Text>
        </View>
      </View>
      <Feather
        name="corner-up-right"
        size={20}
        color="#747b7d"
        style={{ marginLeft: 12 }}
      />
    </View>
  );
}
