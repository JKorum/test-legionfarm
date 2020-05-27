import React, { FC } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

interface ItemProps {
  name: string
  avatar: string
  desc: string
  watchers: number
  stars: number
  forks: number
}

export const Item: FC<ItemProps> = ({
  name,
  avatar,
  desc,
  watchers,
  stars,
  forks,
}) => {
  return (
    <View style={styles.container}>
      <View style={{ paddingRight: 4 }}>
        <Image
          style={{ width: 50, height: 50, borderRadius: 25 }}
          source={{ uri: avatar }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <View>
          <Text>{name}</Text>
          <Text>{desc}</Text>
        </View>

        <View style={styles.stats}>
          <View style={styles.stat}>
            <AntDesign name='eye' size={20} color='#f8cc32' />
            <Text>{watchers}</Text>
          </View>
          <View style={styles.stat}>
            <AntDesign name='star' size={20} color='#f8cc32' />
            <Text>{stars}</Text>
          </View>
          <View style={styles.stat}>
            <AntDesign name='fork' size={20} color='#f8cc32' />
            <Text>{forks}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    borderColor: '#011627',
    padding: 4,
    marginBottom: 4,
    borderRadius: 4,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 4,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 4,
  },
})
