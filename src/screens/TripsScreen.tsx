import {Container, FText, TripCard} from '../components'
import {FlatList, SafeAreaView, StyleSheet} from 'react-native'
import React, {useEffect} from 'react'
import {fetchTrips, selectTrips} from '../redux/trips'
import {useDispatch, useSelector} from 'react-redux'

import {Strings} from '../utils'

export const TripsScreen = () => {
  const dispatch = useDispatch()
  const {data, loading} = useSelector(selectTrips)

  useEffect(() => {
    dispatch(fetchTrips())
  }, [dispatch])

  if (loading) {
    return (
      <Container>
        <FText>loading...</FText>
      </Container>
    )
  }
  return (
    <Container align="stretch">
      <SafeAreaView style={styles.wrapper}>
        <FText style={styles.title} type="h1">
          {Strings.TRIPS_SCREEN_TITLE}
        </FText>

        <FlatList
          data={data}
          refreshing={loading}
          onRefresh={() => dispatch(fetchTrips())}
          keyExtractor={item => item.id}
          renderItem={props => <TripCard {...props} />}
        />
      </SafeAreaView>
    </Container>
  )
}

const styles = StyleSheet.create({
  title: {textAlign: 'center', marginRight: 12},
  wrapper: {flex: 1},
})
