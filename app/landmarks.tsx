import { useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { destinations, landmarksByDestination } from '@/data/travel';
import { saveTrip } from '@/data/saved-trips';

export default function LandmarksScreen() {
  const { place } = useLocalSearchParams<{ place?: string }>();
  const destination = destinations.find((item) => item.id === place) ?? destinations[0];
  const places = landmarksByDestination[destination.id] ?? landmarksByDestination['new-york'];
  const [selected, setSelected] = useState<string[]>([]);
  const allSelected = selected.length === places.length;

  const togglePlace = (name: string) => {
    setSelected((current) =>
      current.includes(name) ? current.filter((item) => item !== name) : [...current, name],
    );
  };

  return (
    <View className="flex-1 bg-[#f5f3ee]">
      <View className="flex-row items-center px-5 pb-4 pt-12">
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Go back"
          onPress={() => router.back()}
          className="h-10 w-10 items-center justify-center rounded-full bg-white"
        >
          <Text className="text-[28px] leading-[30px] text-[#2f3a28]">‹</Text>
        </Pressable>
        <View className="ml-4 h-[4px] flex-1 rounded-full bg-[#2f3a28]/10">
          <View className="h-[4px] w-2/3 rounded-full bg-[#2f3a28]" />
        </View>
      </View>

      <View className="px-5 pb-4">
        <View className="mb-2 self-start flex-row items-center rounded-full bg-[#e7ecd4] px-3 py-1.5">
          <Text className="mr-1.5 text-[13px]">{destination.flag}</Text>
          <Text className="text-[11px] font-semibold text-[#2f3a28]">{destination.city}, {destination.country}</Text>
        </View>
        <Text className="text-[25px] font-bold text-[#2f3a28]">Choose your highlights</Text>
        <Text className="mt-1 text-[13px] text-[#2f3a28]/65">Add a few memorable stops to your plan.</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 14 }}>
        {places.map((place) => {
          const active = selected.includes(place.name);
          return (
            <Pressable
              key={place.name}
              onPress={() => togglePlace(place.name)}
              className={`mb-2.5 flex-row items-center rounded-[20px] border bg-white px-3 py-2.5 ${active ? 'border-[#c1cb9c]' : 'border-[#2f3a28]/[0.06]'}`}
            >
              <Image source={{ uri: place.image }} className="mr-3 h-[64px] w-[64px] rounded-[14px] bg-[#dfe6d1]" resizeMode="cover" />
              <View className="flex-1 py-1">
                <Text numberOfLines={1} className="text-[13px] font-bold text-[#2f3a28]">{place.name}</Text>
                <Text numberOfLines={2} className="mt-1 text-[11px] leading-[15px] text-[#2f3a28]/65">{place.description}</Text>
              </View>
              <View className={`ml-2 h-[22px] w-[22px] items-center justify-center rounded-full border-2 ${active ? 'border-[#2f3a28] bg-[#c1cb9c]' : 'border-[#879080] bg-white'}`}>
                {active ? <Text className="text-[12px] font-bold text-[#2f3a28]">✓</Text> : null}
              </View>
            </Pressable>
          );
        })}
      </ScrollView>

      <View className="flex-row items-center justify-between px-5 pb-2">
        <Text className="text-[12px] font-medium text-[#2f3a28]/65">
          {selected.length ? `${selected.length} place${selected.length === 1 ? '' : 's'} selected` : 'Select at least one place'}
        </Text>
        <Pressable
          accessibilityRole="button"
          onPress={() => setSelected(allSelected ? [] : places.map((place) => place.name))}
          className="rounded-full bg-[#e7ecd4] px-4 py-2"
        >
          <Text className="text-[11px] font-bold text-[#2f3a28]">{allSelected ? 'Clear all' : 'Select all'}</Text>
        </Pressable>
      </View>

      <View className="border-t border-[#2f3a28]/[0.06] bg-[#f5f3ee] px-5 pb-6 pt-4">
        <Pressable
          accessibilityRole="button"
          disabled={selected.length === 0}
          onPress={() => {
            saveTrip({ destinationId: destination.id, stops: selected });
            router.push('/profile');
          }}
          className={`h-[54px] flex-row items-center justify-center rounded-full ${selected.length ? 'bg-[#c1cb9c]' : 'bg-[#c1cb9c]/55'}`}
        >
          <Text className="text-[14px] font-bold text-[#2f3a28]">
            {selected.length ? `Save this route · ${selected.length} places` : 'Choose places to continue'}
          </Text>
          <Text className="ml-2 text-[16px] font-bold text-[#2f3a28]">→</Text>
        </Pressable>
      </View>
    </View>
  );
}
