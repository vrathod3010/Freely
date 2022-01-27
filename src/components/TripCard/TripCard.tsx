import React, {FC} from 'react'
import {StyleSheet, TouchableOpacity, View} from 'react-native'

import {Card} from 'react-native-elements'
import {FText} from '../Text'
import {Trip} from '../../models'
import {useTripCard} from './useTripCard'

interface Props {
  item: Trip
}
export const TripCard: FC<Props> = ({item}) => {
  const {onCardPress, randomBackground} = useTripCard()
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => onCardPress(item)}>
      <Card
        containerStyle={
          item.status === 'NOT_STARTED' && {
            backgroundColor: randomBackground ?? 'white',
          }
        }>
        <Card.Title>
          <FText bold type="h4">
            {item.name}
          </FText>
        </Card.Title>
        <Card.Divider />
        <View style={styles.row1}>
          <FText>{item.startDate}</FText>
          <FText>{item.endDate}</FText>
        </View>

        <View style={styles.row2}>
          <FText type="caption" bold>
            {item.status}
          </FText>
        </View>
      </Card>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  row1: {flexDirection: 'row', justifyContent: 'space-between'},
  row2: {alignItems: 'flex-end', marginTop: 12},
})
