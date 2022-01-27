import {Container, FText} from '../components'
import React, {useEffect} from 'react'

import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {RootStackParamList} from '../App'
import {StatusBar} from 'react-native'
import {Strings} from '../utils'
import {useNavigation} from '@react-navigation/native'

export const SplashScreen = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'SplashScreen'>
    >()

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('HomeScreen')
    }, 3000)
  }, [navigation])

  return (
    <Container style={{backgroundColor: 'rgb(30,32,38)'}}>
      <StatusBar
        barStyle={'light-content'}
        animated
        backgroundColor={'transparent'}
        translucent
      />
      <FText
        style={{
          color: '#00f1e5',
          fontWeight: 'bold',
          fontSize: 45,
          lineHeight: 65,
        }}
        type="h1">
        {Strings.SPLASH_SCREEN_TITLE}
      </FText>
    </Container>
  )
}
