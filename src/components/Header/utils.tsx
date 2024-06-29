import { Trip } from "@/types/index";

const getRandomIndex = (max: number) => Math.floor(Math.random() * max);

export const getRandomTrip = (trips: Trip[]) => {
    const randomTrip = JSON.parse(localStorage.getItem('RANDOM_TRIP') || '{}') 
    if(randomTrip.id) {
       return randomTrip
    }
    const randomIndex = getRandomIndex(trips.length - 1);
    const {itinerary, ...tripData} = trips[randomIndex];
    return tripData;
}