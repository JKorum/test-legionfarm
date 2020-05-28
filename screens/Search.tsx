import React, { FC, useState, useEffect, useRef } from 'react'
import { StyleSheet, View } from 'react-native'
import axios from 'axios'
import { Input, RList } from '../components'
import Constants from 'expo-constants'
import { Ionicons } from '@expo/vector-icons'
import { SearchProps } from '../types/navigation'
import { FetchedData, Entity } from '../types/api'
import { colors, offsets } from '../global/styles'

export const Search: FC<SearchProps> = () => {
  const [items, setItems] = useState<Entity[]>([])
  const [searched, setSearched] = useState('')
  const timer = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (timer.current !== null) {
        clearTimeout(timer.current)
      }
    }
  }, [])

  const fetchData = (name: string) => {
    if (timer.current === null) {
      timer.current = setTimeout(async () => {
        try {
          const res = await axios.get<FetchedData>(
            `https://api.github.com/search/repositories?q=${name}+in:name`,
          )
          setItems(res.data.items)
        } catch (err) {
          setItems([])
        } finally {
          timer.current = null
          if (searched !== name) {
            setSearched(name)
          }
        }
      }, 1000)
    }
  }

  return (
    <View style={styles.container}>
      <Input fetchData={fetchData} />
      {items.length > 0 ? (
        <RList data={items} fetchData={fetchData} searched={searched} />
      ) : (
        <View style={styles.logo}>
          <Ionicons name='logo-github' size={144} color={colors.grey} />
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
