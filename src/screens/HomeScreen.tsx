import {Container, FText} from '../components'

import React from 'react'
import {Strings} from '../utils'

export const HomeScreen = () => {
  return (
    <Container>
      <FText type="h1">{Strings.HOME_SCREEN_TITLE}</FText>
    </Container>
  )
}
