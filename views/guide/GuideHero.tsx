import { Image, Text, View } from "react-native";

type Props = {
  title: string;
};

export default function GuideHero({ title }: Props) {
  return (
    <View className="h-64 justify-end bg-pin">
      <Image
        source={require("../../assets/images/deli-hero.jpg")}
        className="absolute h-full w-full"
        resizeMode="cover"
      />
      <View className="absolute h-full w-full bg-black/20" />
      <View className="bg-ink/80 px-4 py-4">
        <Text className="text-3xl font-bold text-white">{title}</Text>
      </View>
    </View>
  );
}