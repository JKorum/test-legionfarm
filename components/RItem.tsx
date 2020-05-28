import React, { FC } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import { SearchNavigationProp, Screens } from '../types/navigation'
import { shorter } from '../utils/numerics'
import { resolveUri } from '../utils/literals'
import { colors, offsets, flex } from '../global/styles'

interface RItemProps {
  name: string
  avatar: string
  desc: string
  watchers: number
  stars: number
  forks: number
  branches: string
}

export const RItem: FC<RItemProps> = ({
  name,
  avatar,
  desc,
  watchers,
  stars,
  forks,
  branches,
}) => {
  const navigation = useNavigation<SearchNavigationProp>()

  const onPress = () => {
    navigation.push(Screens.Branches, { uri: resolveUri(branches) })
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.imageBox}>
          <Image style={styles.image} source={{ uri: avatar }} />
        </View>
        <View style={flex.box}>
          <View>
            <View style={flex.box}>
              <Text
                style={styles.textBold}
                numberOfLines={1}
                ellipsizeMode='tail'
              >
                {name}
              </Text>
            </View>
            <Text>{desc}</Text>
          </View>
          <View style={styles.stats}>
            <View style={styles.stat}>
              <AntDesign name='eye' size={20} color={colors.yellow} />
              <Text style={styles.text}>{shorter(watchers)}</Text>
            </View>
            <View style={styles.stat}>
              <AntDesign name='star' size={20} color={colors.yellow} />
              <Text style={styles.text}>{shorter(stars)}</Text>
            </View>
            <View style={styles.stat}>
              <AntDesign name='fork' size={20} color={colors.yellow} />
              <Text style={styles.text}>{shorter(forks)}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    padding: offsets.base,
    marginBottom: offsets.base,
    borderRadius: offsets.base,
  },
  imageBox: {
    paddingRight: offsets.base * 2,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: offsets.base,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: offsets.base,
  },
  text: {
    color: colors.grey,
  },
  textBold: {
    fontWeight: 'bold',
  },
})
