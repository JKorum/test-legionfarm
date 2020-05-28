import React, { FC } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { BItem } from './BItem'
import { Branch } from '../types/api'
import { offsets } from '../global/styles'

interface BListProps {
  data: Branch[]
}

export const BList: FC<BListProps> = ({ data }) => {
  return (
    <ScrollView style={styles.container}>
      {data.map(item => (
        <BItem key={item.name} name={item.name} />
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: offsets.base,
  },
})
