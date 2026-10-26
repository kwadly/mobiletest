import { useState } from 'react';
import { Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import { destinations } from '@/data/travel';

export default function DestinationsScreen() {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<string | null>(null);
  const visibleDestinations = destinations.filter((item) =>
    `${item.city} ${item.country}`.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <View className="flex-1 bg-[#f5f3ee]">
      <View className="flex-1 px-5 pt-12">
        <View className="mb-6 flex-row items-center justify-between">
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Close destination picker"
            onPress={() => router.back()}
            className="h-10 w-10 items-center justify-center rounded-full bg-white"
          >
            <Text className="text-xl text-[#2f3a28]">×</Text>
          </Pressable>
          <View className="flex-row items-center rounded-full bg-[#c1cb9c]/45 px-3 py-2">
            <View className="mr-2 h-2 w-2 rounded-full bg-[#2f3a28]" />
            <Text className="text-[10px] font-bold uppercase tracking-[1px] text-[#2f3a28]">Step 1 of 2</Text>
          </View>
        </View>
        <Text className="mb-2 text-[28px] font-bold leading-[34px] text-[#2f3a28]">
          Where would you{ '\n' }like to wander?
        </Text>
        <Text className="mb-4 text-[13px] text-[#2f3a28]/65">Pick a city and we’ll help with the details.</Text>
        <View className="mb-4 flex-row items-center rounded-[18px] border border-[#2f3a28]/[0.08] bg-white px-4 py-3.5">
          <Text className="mr-2 text-[20px] text-[#2f3a28]/55">⌕</Text>
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search a city or country"
            placeholderTextColor="#2f3a2880"
            className="text-[14px] text-[#2f3a28]"
            returnKeyType="search"
          />
        </View>

        <Text className="mb-2 px-1 text-[10px] font-bold uppercase tracking-[1.5px] text-[#2f3a28]/55">
          Handpicked places
        </Text>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
          {visibleDestinations.map((place) => {
            const active = selected === place.id;
            return (
              <Pressable
                key={place.id}
                onPress={() => setSelected(active ? null : place.id)}
                className={`mb-2 flex-row items-center rounded-[17px] border px-3 py-2.5 ${active ? 'border-[#c1cb9c] bg-[#e7ecd4]' : 'border-[#2f3a28]/[0.06] bg-white'}`}
              >
                <View className="relative mr-3">
                  <Image source={{ uri: place.image }} className="h-[50px] w-[50px] rounded-[14px] bg-[#dfe6d1]" resizeMode="cover" />
                  <View className="absolute -bottom-1 -right-1 h-[22px] w-[22px] items-center justify-center rounded-full border-2 border-white bg-[#f5f3ee]">
                    <Text className="text-[11px]">{place.flag}</Text>
                  </View>
                </View>
                <View className="flex-1">
                  <Text className="text-[14px] font-semibold text-[#2f3a28]">{place.city}</Text>
                  <Text className="mt-0.5 text-[11px] text-[#2f3a28]/60">{place.country}</Text>
                </View>
                <View className={`h-[21px] w-[21px] items-center justify-center rounded-full border ${active ? 'border-[#2f3a28] bg-[#c1cb9c]' : 'border-[#2f3a28]/25 bg-white'}`}>
                  {active ? <Text className="text-[12px] font-bold text-[#2f3a28]">✓</Text> : null}
                </View>
              </Pressable>
            );
          })}
          {visibleDestinations.length === 0 ? (
            <View className="items-center rounded-[20px] bg-white px-5 py-8">
              <Text className="text-[15px] font-semibold text-[#2f3a28]">No place by that name</Text>
              <Text className="mt-1 text-center text-[12px] text-[#2f3a28]/60">Try a different city or country.</Text>
            </View>
          ) : null}
        </ScrollView>
      </View>

      <View className="border-t border-[#2f3a28]/[0.06] bg-[#f5f3ee] px-5 pb-6 pt-4">
        <LinkButton
          onPress={() => selected && router.push({ pathname: '/landmarks', params: { place: selected } })}
          label="Explore landmarks"
          disabled={!selected}
        />
      </View>
    </View>
  );
}

function LinkButton({ onPress, label, disabled }: { onPress: () => void; label: string; disabled: boolean }) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      disabled={disabled}
      className={`h-[52px] flex-row items-center justify-center rounded-full ${disabled ? 'bg-[#c1cb9c]/65' : 'bg-[#c1cb9c]'}`}
    >
      <Text className="mr-2 text-[14px] font-bold text-[#2f3a28]">{label}</Text>
      <Text className="text-[16px] font-bold text-[#2f3a28]">→</Text>
    </Pressable>
  );
}
