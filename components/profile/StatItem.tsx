import { Text, View } from 'react-native';

type Props = { value: string; label: string };
export default function StatItem({ value, label }: Props) {
  return (
    <View className="mr-5 md:mr-7">
      <Text className="text-base text-ink/70 md:text-lg">{value}</Text>
      <Text className="mt-1 text-[9px] font-bold tracking-widest text-ink/70 md:text-[10px]">{label}</Text>
    </View>
  );
}
