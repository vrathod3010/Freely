import React, {FC} from 'react'

import {Card} from 'react-native-elements'
import {FText} from './Text'
import {StyleSheet} from 'react-native'

interface Props {
  item: string
}
export const Destination: FC<Props> = ({item}) => {
  return (
    <Card>
      <Card.Title>
        <FText type="caption" style={styles.text}>
          {item}
        </FText>
      </Card.Title>
    </Card>
  )
}

const styles = StyleSheet.create({
  text: {
    padding: 16,
  },
})
