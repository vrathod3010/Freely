import {Card, Divider} from 'react-native-elements'
import {Container, Destination, FText} from '../components'
import {FlatList, StyleSheet} from 'react-native'
import {RouteProp, useRoute} from '@react-navigation/native'

import React from 'react'
import {RootStackParamList} from '../App'
import {Strings} from '../utils'

export const TripDetailScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'TripDetailScreen'>>()

  return (
    <Container withSafeArea align="stretch">
      <Card containerStyle={styles.header}>
        <Card.Title>
          <FText type="h1">{Strings.DESTINATIONS}</FText>
        </Card.Title>
      </Card>

      <Divider />
      <FlatList
        data={route.params.trip.destinations}
        keyExtractor={item => item}
        renderItem={props => <Destination {...props} />}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  header: {backgroundColor: 'transparent'},
})
