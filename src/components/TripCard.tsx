import React, {FC} from 'react'
import {StyleSheet, TouchableOpacity, View} from 'react-native'

import {Card} from 'react-native-elements'
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
  return (
    <TouchableOpacity
      onPress={() => navigation.push('TripDetailScreen', {trip: item})}>
      <Card>
        <Card.Title>
          <FText type="h4">{item.name}</FText>
        </Card.Title>
        <Card.Divider />
        <View style={styles.row}>
          <FText>{item.startDate}</FText>
          <FText>{item.endDate}</FText>
        </View>

        <View style={{alignItems: 'flex-end', marginTop: 12}}>
          <FText>{item.status}</FText>
        </View>
      </Card>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  row: {flexDirection: 'row', justifyContent: 'space-between'},
})
