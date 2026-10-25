import { Stack } from "expo-router";

export default function TripLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "none",
        contentStyle: { backgroundColor: "#F5F3EE" },
      }}
    />
  );
}