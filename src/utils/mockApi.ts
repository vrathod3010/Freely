import {Trip} from '../models'
import trips from '../data/trip-list.json'

export const fetchTripsData = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000))
  return trips as Trip[]
}
