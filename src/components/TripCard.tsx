import {AppState, StyleSheet, TouchableOpacity, View} from 'react-native'
import React, {FC, useEffect, useRef, useState} from 'react'

import {Card} from 'react-native-elements'
import {Colors} from '../utils'
import {FText} from './Text'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {RootStackParamList} from '../App'
import {Trip} from '../models'
import {useNavigation} from '@react-navigation/native'

interface Props {
  item: Trip
}
export const TripCard: FC<Props> = ({item}) => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'TripsScreen'>
    >()

  const appState = useRef(AppState.currentState)
  const [appStateVisible, setAppStateVisible] = useState(appState.current)

  const [randomBackground, setRandomBackground] = useState<string>()

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      appState.current = nextAppState
      setAppStateVisible(appState.current)
    })

    return () => {
      subscription.remove()
    }
  }, [])

  useEffect(() => {
    if (appStateVisible === 'background') {
      setRandomBackground(
        Colors.RANDOM_COLORS[
          Math.floor(Math.random() * Colors.RANDOM_COLORS.length)
        ],
      )
    }
  }, [appStateVisible])

  return (
    <TouchableOpacity
      onPress={() => navigation.push('TripDetailScreen', {trip: item})}>
      <Card
        containerStyle={
          item.status === 'NOT_STARTED' && {
            backgroundColor: randomBackground ?? 'white',
          }
        }>
        <Card.Title>
          <FText type="h4">{item.name}</FText>
        </Card.Title>
        <Card.Divider />
        <View style={styles.row1}>
          <FText>{item.startDate}</FText>
          <FText>{item.endDate}</FText>
        </View>

        <View style={styles.row2}>
          <FText>{item.status}</FText>
        </View>
      </Card>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  row1: {flexDirection: 'row', justifyContent: 'space-between'},
  row2: {alignItems: 'flex-end', marginTop: 12},
})
