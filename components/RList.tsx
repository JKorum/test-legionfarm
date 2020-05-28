import React, { FC, useState } from 'react'
import { FlatList, ListRenderItem, StyleSheet } from 'react-native'
import { RItem } from './RItem'
import { Entity } from '../types/api'
import { offsets } from '../global/styles'

interface RListProps {
  data: Entity[]
  fetchData: (name: string) => Promise<void>
  searched: string
}

export const RList: FC<RListProps> = ({ data, fetchData, searched }) => {
  const [loading, setLoading] = useState(false)

  const onRefresh = async () => {
    setLoading(true)
    await fetchData(searched)
    setLoading(false)
  }

  const renderItem: ListRenderItem<Entity> = ({
    item: {
      name,
      owner,
      description,
      watchers_count,
      stargazers_count,
      forks_count,
      branches_url,
    },
  }) => {
    return (
      <RItem
        name={name}
        avatar={owner.avatar_url}
        desc={description}
        watchers={watchers_count}
        stars={stargazers_count}
        forks={forks_count}
        branches={branches_url}
      />
    )
  }

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => `${item.id}`}
      refreshing={loading}
      onRefresh={onRefresh}
      contentContainerStyle={styles.container}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: offsets.base,
  },
})
