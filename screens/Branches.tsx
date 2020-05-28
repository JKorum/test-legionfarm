import React, { FC, useState, useEffect } from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import axios from 'axios'
import { BList } from '../components/BList'
import { BranchesProps } from '../types/navigation'
import { Branch } from '../types/api'
import { colors } from '../global/styles'

export const Branches: FC<BranchesProps> = ({ route, navigation }) => {
  const [branches, setBranches] = useState<Branch[]>([])
  const [loading, setLoading] = useState(false)

  const fetchData = async (uri: string) => {
    try {
      setLoading(true)
      const res = await axios.get<Branch[]>(uri)
      setBranches(res.data)
      setLoading(false)
    } catch (err) {
      setLoading(false)
      navigation.goBack()
    }
  }

  useEffect(() => {
    fetchData(route.params.uri)
  }, [])

  return (
    <View style={styles.container}>
      {!loading ? (
        <BList data={branches} />
      ) : (
        <ActivityIndicator size='large' color={colors.pink} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.dark,
  },
})
