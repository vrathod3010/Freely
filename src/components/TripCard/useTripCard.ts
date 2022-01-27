import {useEffect, useState} from 'react'

import {Colors} from '../../utils'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {RootStackParamList} from '../../App'
import {Trip} from '../../models'
import analytics from '@react-native-firebase/analytics'
import {useAppState} from '../../hooks'
import {useNavigation} from '@react-navigation/native'

export const useTripCard = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'TripsScreen'>
    >()

  const [randomBackground, setRandomBackground] = useState<string>()

  const {appStateVisible} = useAppState()

  useEffect(() => {
    if (appStateVisible === 'background') {
      setRandomBackground(
        Colors.RANDOM_COLORS[
          Math.floor(Math.random() * Colors.RANDOM_COLORS.length)
        ],
      )
    }
  }, [appStateVisible])

  const onCardPress = (item: Trip) => {
    navigation.push('TripDetailScreen', {trip: item})
    analytics().logEvent('trip_detail_screen_viewed', {
      trip_id: item.id,
      trip_name: item.name,
    })
  }

  return {
    onCardPress,
    randomBackground,
  }
}
