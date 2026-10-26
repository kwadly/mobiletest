export type Place = {
  id: string;
  rank: number;
  name: string;
  priceLevel: number; // من 1 لـ 5
  tags: string[];
  mentions: number;
};

export const PLACES: Place[] = [
  { id: "1", rank: 1, name: "Katz's Delicatessen", priceLevel: 2, tags: ["Deli", "American restaurant"], mentions: 17 },
  { id: "2", rank: 2, name: "Sarge's Delicatessen & Diner", priceLevel: 2, tags: ["Deli", "Diner"], mentions: 14 },
  { id: "3", rank: 3, name: "Barney Greengrass", priceLevel: 3, tags: ["Deli", "Jewish restaurant"], mentions: 12 },
  { id: "4", rank: 4, name: "Russ & Daughters Cafe", priceLevel: 3, tags: ["Deli", "Cafe"], mentions: 11 },
];