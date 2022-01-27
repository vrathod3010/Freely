import React, {FC} from 'react'
import {StyleSheet, View, ViewProps} from 'react-native'

import {Colors} from '../utils'

interface Props extends ViewProps {
  align?: 'center' | 'left' | 'right' | 'stretch'
  justify?: 'middle' | 'top' | 'bottom' | 'space-between' | 'space-around'
}

export const Container: FC<Props> = ({children, ...props}) => {
  return (
    <View
      {...props}
      style={[
        styles.container,
        styles[props.align ?? 'center'],
        styles[props.justify ?? 'middle'],
        props.style,
      ]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.SCREEN_BACKGROUND,
  },
  center: {
    alignItems: 'center',
  },
  left: {
    alignItems: 'flex-start',
  },
  right: {
    alignItems: 'flex-end',
  },
  stretch: {
    alignItems: 'stretch',
  },
  middle: {
    justifyContent: 'center',
  },
  top: {
    justifyContent: 'flex-start',
  },
  bottom: {
    justifyContent: 'flex-end',
  },
  ['space-between']: {
    justifyContent: 'space-between',
  },
  ['space-around']: {
    justifyContent: 'space-around',
  },
})
