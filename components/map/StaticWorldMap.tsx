
import { Image, View } from "react-native";

export default function StaticWorldMap() {
  return (
    <View
      className="flex-1 overflow-hidden bg-[#dce8e5]"
      style={{ flex: 1, minHeight: 0 }}
    >
      <Image
        accessibilityLabel="World map"
        accessible
        resizeMode="cover"
        source={require("../../assets/images/travel-map.jpg")}
        style={{ flex: 1, width: "100%", minHeight: 0 }}
      />
    </View>
  );
}
