import React, { FC, useState } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import axios from 'axios'
import Constants from 'expo-constants'
import { Input, List, ListItem } from './components'

interface Data {
  items: ListItem[]
}

export default function App() {
  const [items, setItems] = useState<ListItem[]>([])
  const [searched, setSearched] = useState('')

  const fetchData = async (name: string) => {
    try {
      const res = await axios.get<Data>(
        `https://api.github.com/search/repositories?q=${name}+in:name`,
      )
      setItems(res.data.items)
      if (searched !== name) {
        setSearched(name)
      }
    } catch (err) {
      console.log('ERR:', err)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Input fetchData={fetchData} />
      <List data={items} fetchData={fetchData} searched={searched} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    paddingTop: 4,
    backgroundColor: '#212529',
  },
})
