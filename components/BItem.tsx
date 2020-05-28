import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { colors, offsets } from '../global/styles'

interface BItemProps {
  name: string
}

export const BItem: FC<BItemProps> = ({ name }) => {
  return (
    <View style={styles.container}>
      <Feather name='git-branch' size={24} color={colors.yellow} />
      <View style={styles.text}>
        <Text numberOfLines={1} ellipsizeMode='tail'>
          {name}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: colors.white,
    padding: offsets.base,
    marginBottom: offsets.base,
    borderRadius: offsets.base,
  },
  text: {
    flex: 1,
    marginLeft: offsets.base,
  },
})
