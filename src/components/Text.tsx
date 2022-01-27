import {Colors, Fonts} from '../utils'
import React, {FC} from 'react'
import {StyleSheet, Text, TextProps} from 'react-native'

interface Props extends TextProps {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption'
}

export const FText: FC<Props> = ({children, ...props}) => {
  return (
    <Text
      {...props}
      style={[styles.common, styles[props.type ?? 'body1'], props.style]}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  common: {
    fontFamily: Fonts.SFProDisplayRegular,
    color: Colors.TEXT,
  },
  h1: {
    fontSize: 32,
    lineHeight: 40,
  },
  h2: {
    fontSize: 28,
    lineHeight: 36,
  },
  h3: {
    fontSize: 24,
    lineHeight: 32,
  },
  h4: {
    fontSize: 20,
    lineHeight: 28,
  },
  h5: {
    fontSize: 18,
    lineHeight: 26,
  },
  h6: {
    fontSize: 16,
    lineHeight: 24,
  },
  body1: {
    fontSize: 16,
    lineHeight: 24,
  },
  body2: {
    fontSize: 14,
    lineHeight: 20,
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
  },
})
