import {ActivityIndicator, FlatList, StatusBar} from 'react-native'
import {Container, TripCard} from '../components'
import React, {useEffect} from 'react'
import {fetchTrips, selectTrips} from '../redux/trips'
import {useDispatch, useSelector} from 'react-redux'

export const TripsScreen = () => {
  const dispatch = useDispatch()
  const {data, loading} = useSelector(selectTrips)

  useEffect(() => {
    dispatch(fetchTrips())
  }, [dispatch])

  if (loading) {
    return (
      <Container>
        <ActivityIndicator />
      </Container>
    )
  }
  return (
    <Container align="stretch">
      <StatusBar barStyle={'light-content'} animated translucent />
      <FlatList
        data={data}
        refreshing={loading}
        onRefresh={() => dispatch(fetchTrips())}
        keyExtractor={item => item.id}
        renderItem={props => <TripCard {...props} />}
      />
    </Container>
  )
}
