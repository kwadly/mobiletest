import { Pressable, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

type TripHeaderProps = {
  title: string;
  subtitle?: string;
  actionLabel?: string;
  showBack?: boolean;
  onActionPress?: () => void;
};

export default function TripHeader({
  title,
  subtitle,
  actionLabel,
  showBack = true,
  onActionPress,
}: TripHeaderProps) {
  const router = useRouter();

  return (
    <View className="flex-row items-center justify-between px-5 pb-4 pt-12">
      {showBack ? (
        <Pressable
          accessibilityRole="button"
          onPress={() => router.back()}
          className="h-10 w-10 items-center justify-center rounded-full bg-[#c1cb9c] shadow-sm shadow-[#2f3a28]/10"
        >
          <Text className="text-[30px] font-light leading-none text-[#2f3a28]">‹</Text>
        </Pressable>
      ) : (
        <View className="h-10 w-10" />
      )}

      <View className="items-center">
        <Text className="text-[26px] font-bold tracking-[-0.02em] text-[#2f3a28]">{title}</Text>
        {subtitle ? (
          <Text className="text-[12px] text-[#2f3a28]/60">{subtitle}</Text>
        ) : null}
      </View>

      {actionLabel ? (
        <Pressable
          accessibilityRole="button"
          onPress={onActionPress}
          className="rounded-full bg-[#dfe6d1] px-4 py-2 shadow-sm shadow-[#2f3a28]/5"
        >
          <Text className="text-[14px] font-semibold text-[#2f3a28]">{actionLabel}</Text>
        </Pressable>
      ) : (
        <View className="h-10 w-10" />
      )}
    </View>
  );
}
