import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import BottomNavBar from '@/components/BottomNavBar';
import { Link, router } from 'expo-router';
import TripwiseLogo from '@/components/tripwise-logo';

const routes = [
  {
    title: 'Cairo, beyond the pyramids',
    place: 'Cairo, Egypt',
    detail: '3 stops · 1 day',
    image: 'https://images.unsplash.com/photo-1594808846629-d8db69293d63?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'A quiet day in Kyoto',
    place: 'Kyoto, Japan',
    detail: '3 stops · 1 day',
    image: 'https://images.unsplash.com/photo-1595894427194-998804656179?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Lisbon by tram and on foot',
    place: 'Lisbon, Portugal',
    detail: '3 stops · 1 day',
    image: 'https://images.unsplash.com/photo-1682447448492-682010151fc5?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Marrakech in the morning',
    place: 'Marrakech, Morocco',
    detail: '3 stops · 1 day',
    image: 'https://images.unsplash.com/photo-1628790892460-2beb0e371226?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Rome before the crowds',
    place: 'Rome, Italy',
    detail: '3 stops · 1 day',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Bali beyond the beach',
    place: 'Bali, Indonesia',
    detail: '3 stops · 1 day',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=85',
  },
];

const guides = [
  {
    title: 'Cairo by neighborhood',
    place: 'Cairo, Egypt',
    detail: 'History · 3 days',
    author: 'Madison Brdaric',
    handle: '@meb520',
    initials: 'MH',
    saves: '2.4k saves',
    image: 'https://images.unsplash.com/photo-1594808846629-d8db69293d63?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Kyoto on foot',
    place: 'Kyoto, Japan',
    detail: 'Temples · 2 days',
    author: 'Kenji Sato',
    handle: '@kenjionfoot',
    initials: 'KS',
    saves: '1.8k saves',
    image: 'https://images.unsplash.com/photo-1595894427194-998804656179?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Lisbon by tram',
    place: 'Lisbon, Portugal',
    detail: 'City walks · 3 days',
    author: 'Sofia Martins',
    handle: '@sofiaseesit',
    initials: 'SM',
    saves: '986 saves',
    image: 'https://images.unsplash.com/photo-1682447448492-682010151fc5?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Marrakech in the morning',
    place: 'Marrakech, Morocco',
    detail: 'Courtyards · 3 days',
    author: 'Youssef Amrani',
    handle: '@youssefwanders',
    initials: 'YA',
    saves: '1.2k saves',
    image: 'https://images.unsplash.com/photo-1628790892460-2beb0e371226?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Rome before the crowds',
    place: 'Rome, Italy',
    detail: 'Ancient city · 2 days',
    author: 'Elena Rossi',
    handle: '@elenaexplores',
    initials: 'ER',
    saves: '2.1k saves',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Cape Town outdoors',
    place: 'Cape Town, South Africa',
    detail: 'Coast & trails · 4 days',
    author: 'Lebo Mokoena',
    handle: '@leboslowtravel',
    initials: 'LM',
    saves: '754 saves',
    image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Bali beyond the beach',
    place: 'Bali, Indonesia',
    detail: 'Temples · 4 days',
    author: 'Ayu Putri',
    handle: '@ayufindspeace',
    initials: 'AP',
    saves: '1.5k saves',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Istanbul between shores',
    place: 'Istanbul, Türkiye',
    detail: 'Neighborhoods · 3 days',
    author: 'Deniz Kaya',
    handle: '@denizaroundtown',
    initials: 'DK',
    saves: '1.1k saves',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'The long way through Petra',
    place: 'Petra, Jordan',
    detail: 'Desert history · 2 days',
    author: 'Omar Nasser',
    handle: '@omarontheroad',
    initials: 'ON',
    saves: '893 saves',
    image: 'https://images.unsplash.com/photo-1579606032821-4e6161c81bd3?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Cusco and the high Andes',
    place: 'Cusco, Peru',
    detail: 'Mountain trails · 5 days',
    author: 'Valentina Cruz',
    handle: '@valenoutside',
    initials: 'VC',
    saves: '1.7k saves',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=900&q=85',
  },
];

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-[#f5f3ee]">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 24 }}>
        <View className="px-4 pt-10">
          <View className="mb-4 flex-row items-center justify-between">
            <TripwiseLogo />
            <View className="flex-row items-center gap-3">
              <Link href={'/place-search' as any} asChild>
                <Pressable accessibilityRole="button" accessibilityLabel="Search destinations" className="h-10 w-10 items-center justify-center rounded-full bg-white">
                  <Text className="text-[22px] text-[#2f3a28]">⌕</Text>
                </Pressable>
              </Link>
            </View>
          </View>

          <View className="relative mb-6 h-[340px] overflow-hidden rounded-[28px] bg-[#2f3a28]">
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=85' }}
              className="absolute h-full w-full opacity-80"
              resizeMode="cover"
            />
            <View className="absolute inset-0 bg-[#2f3a28]/35" />
            <View className="absolute bottom-5 left-5 right-5">
              <View className="mb-3 self-start rounded-full bg-[#f5f3ee]/20 px-3 py-1.5">
                <Text className="text-[10px] font-bold uppercase tracking-[1.5px] text-white">Tripwise field notes</Text>
              </View>
              <Text className="mb-4 max-w-[270px] text-[30px] font-bold leading-[36px] text-white">
                See more than the postcard.
              </Text>
              <Link href={'/destinations' as any} asChild>
                <Pressable className="flex-row items-center self-start rounded-full bg-[#c1cb9c] px-5 py-3">
                  <Text className="mr-2 text-[13px] font-bold text-[#2f3a28]">Find your next place</Text>
                  <Text className="text-[15px] font-bold text-[#2f3a28]">→</Text>
                </Pressable>
              </Link>
            </View>
          </View>

          <View className="mb-3 flex-row items-end justify-between">
            <View>
              <Text className="text-[19px] font-bold text-[#2f3a28]">Start with a good route</Text>
              <Text className="mt-1 text-[12px] text-[#2f3a28]/65">Three places, with room to make them yours</Text>
            </View>
            <Link href={'/destinations' as any} asChild>
              <Pressable className="mb-0.5"><Text className="text-[13px] font-bold text-[#2f3a28]">See all</Text></Pressable>
            </Link>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingRight: 8 }}>
            {routes.map((route) => (
              <Link href={'/destinations' as any} asChild key={route.title}>
                <Pressable accessibilityRole="button" accessibilityLabel={`${route.title}, ${route.detail}`} className="mr-3 w-[214px] overflow-hidden rounded-[20px] bg-white">
                  <Image source={{ uri: route.image }} className="h-[142px] w-full" resizeMode="cover" />
                  <View className="p-3.5">
                    <Text numberOfLines={1} className="text-[14px] font-bold text-[#2f3a28]">{route.title}</Text>
                    <Text className="mt-1.5 text-[12px] text-[#2f3a28]/65">{route.place}</Text>
                    <Text className="mt-2 text-[10px] font-semibold uppercase tracking-[1px] text-[#65714d]">{route.detail}</Text>
                  </View>
                </Pressable>
              </Link>
            ))}
          </ScrollView>

          <View className="mb-3 mt-7 flex-row items-end justify-between">
            <View>
              <Text className="text-[19px] font-bold text-[#2f3a28]">Featured guides</Text>
              <Text className="mt-1 text-[12px] text-[#2f3a28]/65">Local favorites, shared by travelers</Text>
            </View>
            <Link href={'/destinations' as any} asChild>
              <Pressable className="mb-0.5"><Text className="text-[13px] font-bold text-[#2f3a28]">See all</Text></Pressable>
            </Link>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingRight: 8 }}>
            {guides.map((guide) => (
              <Pressable
                key={guide.title}
                onPress={() => router.push('/destinations' as any)}
                accessibilityRole="button"
                accessibilityLabel={`${guide.title}, by ${guide.author}`}
                className="mr-3 w-[242px] overflow-hidden rounded-[20px] bg-white"
              >
                <View className="relative">
                  <Image source={{ uri: guide.image }} className="h-[142px] w-full" resizeMode="cover" />
                  <View className="absolute bottom-2.5 left-2.5 rounded-full bg-white/95 px-2.5 py-1">
                    <Text className="text-[10px] font-bold text-[#2f3a28]">{guide.saves}</Text>
                  </View>
                </View>
                <View className="p-3.5">
                  <Text numberOfLines={1} className="text-[14px] font-bold text-[#2f3a28]">{guide.title}</Text>
                  <Text className="mt-1 text-[12px] text-[#2f3a28]/65">{guide.place} · {guide.detail}</Text>
                  <Pressable
                    onPress={() => router.push('/user_profile' as any)}
                    className="mt-3 flex-row items-center border-t border-[#2f3a28]/10 pt-3"
                  >
                    <View className="mr-2 h-8 w-8 items-center justify-center rounded-full bg-[#dce2c9]">
                      <Text className="text-[10px] font-bold text-[#2f3a28]">{guide.initials}</Text>
                    </View>
                    <View className="flex-1">
                      <Text numberOfLines={1} className="text-[11px] font-bold text-[#2f3a28]">{guide.author}</Text>
                      <Text numberOfLines={1} className="text-[10px] text-[#2f3a28]/55">{guide.handle}</Text>
                    </View>
                    <Text className="text-[16px] text-[#65714d]">↗</Text>
                  </Pressable>
                </View>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
      <BottomNavBar active="home" />
    </View>
  );
}