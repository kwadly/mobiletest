import { Image, ImageSourcePropType, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

type Props = { image: ImageSourcePropType; title: string; likes: number; views: number };
export default function GuideCard({ image, title, likes, views }: Props) {
  return (
    <View className="flex-row items-center border-b border-ink/10 py-4 lg:rounded-xl lg:border lg:px-4">
      <View className="h-[76px] w-[76px] shrink-0 overflow-hidden rounded-lg md:h-[88px] md:w-[88px] 2xl:h-[104px] 2xl:w-[104px]">
        <Image source={image} resizeMode="cover" style={{ width: '100%', height: '100%' }} />
      </View>
      <View className="ml-4 flex-1">
        <Text className="text-base text-ink md:text-lg">{title}</Text>
        <View className="mt-1 flex-row items-center">
          <Feather name="heart" size={14} color="#2f3a28" />
          <Text className="ml-1 mr-4 text-xs text-ink/65">{likes}</Text>
          <Feather name="eye" size={15} color="#2f3a28" />
          <Text className="ml-1 text-xs text-ink/65">{views}</Text>
        </View>
      </View>
      <Feather name="corner-up-right" size={19} color="#2f3a28" />
    </View>
  );
}
