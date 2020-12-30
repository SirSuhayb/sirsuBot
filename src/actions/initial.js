import { Reply, Text } from '@botonic/react'
import React from 'react'

export default class extends React.Component {
  render() {
    return (
      <Text>
        Hey, this is the SIRSU NFT Bot, how can I help you?
        <Reply payload='new-drop'>Latest SIRSU Drop</Reply>
      </Text>
    )
  }
}