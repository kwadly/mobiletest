export type SavedTrip = {
  destinationId: string;
  stops: string[];
};

let savedTrips: SavedTrip[] = [];

export function getSavedTrips() {
  return savedTrips;
}

export function saveTrip(trip: SavedTrip) {
  const signature = `${trip.destinationId}:${trip.stops.join('|')}`;
  savedTrips = [
    trip,
    ...savedTrips.filter((saved) => `${saved.destinationId}:${saved.stops.join('|')}` !== signature),
  ];
}
