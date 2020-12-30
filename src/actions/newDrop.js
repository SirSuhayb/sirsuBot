import React from 'react'
import {
  Text,
  Button,
  Carousel,
  Pic,
  Element,
  Title,
  Subtitle,
  Reply,
} from '@botonic/react'

export default class extends React.Component {
  render() {
    let newDrop = [
      {
        name: 'The Sun Looks Brighter Than Usual',
        desc: 'SIRSU',
        priceLabel: '2.5ETH | $1,818.50',
        url: 'https://app.rarible.com/token/0x60f80121c31a0d46b5279700f9df786054aa5ee5:33971:0xeb95ff72eab9e8d8fdb545fe15587accf410b42e',
        pic: 'https://ipfs.rarible.com/ipfs/QmNbCCceEZ5CzBW7zWH2U6q35tF7VMYrK7aAmpW1gJ4rg2',
      },
      {
        name: 'Captain Spacey Have You Seen Me Lately',
        desc: 'SIRSU',
        priceLabel: '3ETH | $2,169.61',
        url: 'https://app.rarible.com/token/0x60f80121c31a0d46b5279700f9df786054aa5ee5:33990:0xeb95ff72eab9e8d8fdb545fe15587accf410b42e',
        pic: 'https://ipfs.rarible.com/ipfs/Qmado4u416q3KNQeCJSQSbyAcJvmGAWH1sjSsEPMEySzPE',
      },
      {
        name: 'CRT Madness I',
        desc: 'SIRSU x MezzVisuals',
        url: 'https://knownorigin.io/gallery/232400-crt-madness-i-of-v-the-intent',
        pic: 'https://koda-image-service-gp2s5beobq-uc.a.run.app/cdn/images/network/1/edition/232400',
      },
      {
        name: 'CRT Madness II',
        desc: 'SIRSU x MezzVisuals',
        url: 'https://knownorigin.io/gallery/234500-crt-madness-ii-of-v-plugged-in-relic-of-the',
        pic: 'https://koda-image-service-gp2s5beobq-uc.a.run.app/cdn/images/network/1/edition/234500',
      },
    ]
    return (
      <>
        <Text>Fetching the latest from SIRSU</Text>
        <Carousel>
          {newDrop.map((e, i) => (
            <Element key={e.name}>
              <Pic src={e.pic} />
              <Title>{e.name}</Title>
              <Subtitle>{e.desc}</Subtitle>
              <Subtitle>{e.priceLabel}</Subtitle>
              <Button url={e.url}>Buy NFT</Button>
            </Element>
          ))}
        </Carousel>

        <Reply payload="return">Thanks!</Reply>
      </>
    )
  }
}