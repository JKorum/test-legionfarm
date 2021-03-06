import React, { FC, useState } from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import axios from 'axios'
import Constants from 'expo-constants'
import { Ionicons } from '@expo/vector-icons'
import { Input, RList } from '../components'
import { SearchProps } from '../types/navigation'
import { FetchedData, Entity } from '../types/api'
import { colors, offsets } from '../global/styles'

export const Search: FC<SearchProps> = () => {
  const [items, setItems] = useState<Entity[]>([])
  const [searched, setSearched] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchData = async (name: string) => {
    try {
      setLoading(true)
      const res = await axios.get<FetchedData>(
        `https://api.github.com/search/repositories?q=${name}+in:name`,
      )
      setItems(res.data.items)
    } catch (err) {
      setItems([])
    } finally {
      setLoading(false)
      if (searched !== name) {
        setSearched(name)
      }
    }
  }

  return (
    <View style={styles.container}>
      <Input fetchData={fetchData} />
      {items.length > 0 ? (
        <RList data={items} fetchData={fetchData} searched={searched} />
      ) : (
        <View style={styles.logo}>
          {!loading ? (
            <Ionicons name='logo-github' size={144} color={colors.grey} />
          ) : (
            <ActivityIndicator size='large' color={colors.pink} />
          )}
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    paddingTop: offsets.base,
    backgroundColor: colors.dark,
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
