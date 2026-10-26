import { Image } from 'react-native';

export default function TripwiseLogo() {
  return (
    <Image
      accessibilityRole="image"
      accessibilityLabel="Tripwise logo"
      source={require('@/assets/images/tripwise-logo.png')}
      style={{ width: 160, height: 56 }}
      resizeMode="contain"
    />
  );
}
