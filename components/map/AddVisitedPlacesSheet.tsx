import { Feather } from "@expo/vector-icons";
import { useMemo, useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from "react-native";
import {
  visitedCountries,
  type VisitedCountry,
} from "./visitedCountries";

type Props = {
  visible: boolean;
  selectedCountryCodes: string[];
  onClose: () => void;
  onSelectCountry: (country: VisitedCountry) => void;
};

export default function AddVisitedPlacesSheet({
  visible,
  selectedCountryCodes,
  onClose,
  onSelectCountry,
}: Props) {
  const [query, setQuery] = useState("");
  const { height: windowHeight } = useWindowDimensions();
  const sheetHeight = Math.min(windowHeight * 0.78, 760);
  const filteredCountries = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    return normalizedQuery
      ? visitedCountries.filter((country) =>
          `${country.name} ${country.mapName} ${country.code}`
            .toLocaleLowerCase()
            .includes(normalizedQuery),
        )
      : visitedCountries;
  }, [query]);

  function closeSheet() {
    setQuery("");
    onClose();
  }

  function selectCountry(country: VisitedCountry) {
    onSelectCountry(country);
    closeSheet();
  }

  return (
    <Modal
      animationType="slide"
      onRequestClose={closeSheet}
      transparent
      visible={visible}
    >
      <View className="flex-1 justify-end">
        <Pressable
          accessibilityLabel="Close country search"
          className="absolute inset-0 bg-black/35"
          onPress={closeSheet}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          className="w-full items-center"
        >
          <View
            className="w-full max-w-[640px] rounded-t-[28px] bg-white px-5 pb-6 pt-3 md:px-8"
            style={{ height: sheetHeight }}
          >
            <View className="mb-5 h-1.5 w-14 self-center rounded-full bg-ink/15" />
            <View className="mb-5 flex-row items-center justify-between">
              <View className="w-9" />
              <Text className="text-lg font-bold text-ink md:text-xl">
                Search for a country
              </Text>
              <Pressable
                accessibilityLabel="Close country search"
                accessibilityRole="button"
                className="h-9 w-9 items-center justify-center rounded-full bg-pin/30"
                onPress={closeSheet}
              >
                <Feather name="x" size={19} color="#2f3a28" />
              </Pressable>
            </View>
            <View className="mb-4 h-[54px] flex-row items-center rounded-xl bg-[#f2f3f5] px-4">
              <Feather name="search" size={19} color="#68716f" />
              <TextInput
                accessibilityLabel="Search countries"
                autoCapitalize="none"
                className="ml-3 h-full flex-1 text-base text-ink"
                onChangeText={setQuery}
                placeholder="Search for a destination"
                placeholderTextColor="#737b80"
                returnKeyType="search"
                value={query}
              />
              {query.length > 0 ? (
                <Pressable
                  accessibilityLabel="Clear country search"
                  accessibilityRole="button"
                  onPress={() => setQuery("")}
                >
                  <Feather name="x-circle" size={19} color="#68716f" />
                </Pressable>
              ) : null}
            </View>
            <Text className="mb-2 text-sm text-ink/60">
              Select a country to show it on your map.
            </Text>
            <FlatList
              className="flex-1"
              data={filteredCountries}
              keyboardShouldPersistTaps="handled"
              keyExtractor={(country) => country.code}
              ListEmptyComponent={
                <Text className="py-8 text-center text-ink/60">
                  No countries found
                </Text>
              }
              renderItem={({ item }) => {
                const isSelected = selectedCountryCodes.includes(item.code);
                return (
                  <Pressable
                    accessibilityRole="button"
                    accessibilityState={{ selected: isSelected }}
                    className="min-h-[58px] flex-row items-center border-b border-ink/10"
                    onPress={() => selectCountry(item)}
                  >
                    <Text className="text-2xl">{item.flag}</Text>
                    <Text className="ml-4 flex-1 text-base text-ink">
                      {item.name}
                    </Text>
                    {isSelected ? (
                      <Feather name="check" size={20} color="#2f3a28" />
                    ) : (
                      <Feather
                        name="chevron-right"
                        size={20}
                        color="#747b7d"
                      />
                    )}
                  </Pressable>
                );
              }}
            />
            <Text className="pt-3 text-center text-sm text-ink/60">
              {selectedCountryCodes.length} countries added
            </Text>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
}
