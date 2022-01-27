import {Colors, Strings} from '../utils'
import {Container, FText} from '../components'
import React, {useEffect} from 'react'
import {StatusBar, StyleSheet} from 'react-native'

import {RootStackParamList} from '../App'
import {StackNavigationProp} from '@react-navigation/stack'
import {useNavigation} from '@react-navigation/native'

export const SplashScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'SplashScreen'>>()

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainScreen')
    }, 3000)
  }, [navigation])

  return (
    <Container style={styles.container}>
      <StatusBar barStyle={'light-content'} animated translucent />
      <FText style={styles.text} type="h1">
        {Strings.SPLASH_SCREEN_TITLE}
      </FText>
    </Container>
  )
}

const styles = StyleSheet.create({
  text: {
    color: Colors.PRIMARY_TEXT,
    fontWeight: 'bold',
    fontSize: 45,
    lineHeight: 65,
  },
  container: {backgroundColor: Colors.SCREEN_BACKGROUND_DARK},
})
