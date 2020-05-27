import React, { FC, useState } from 'react'
import { FlatList, ListRenderItem, StyleSheet } from 'react-native'
import { Item } from './Item'

export interface ListItem {
  id: number
  name: string
  owner: { avatar_url: string }
  description: string
  watchers_count: number
  stargazers_count: number
  forks_count: number
}

interface ListProps {
  data: ListItem[]
  fetchData: (name: string) => Promise<void>
  searched: string
}

const test: ListItem[] = [
  {
    id: 1,
    name: 'repo name1',
    owner: {
      avatar_url: 'https://source.unsplash.com/random',
    },
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur libero alias numquam distinctio accusantium recusandae expedita quidem autem sed repudiandae, veritatis excepturi',
    watchers_count: 100,
    stargazers_count: 100,
    forks_count: 100,
  },
  {
    id: 2,
    name: 'repo name2',
    owner: {
      avatar_url: 'https://source.unsplash.com/random',
    },
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur libero alias numquam distinctio accusantium recusandae expedita quidem autem sed repudiandae, veritatis excepturi',
    watchers_count: 100,
    stargazers_count: 100,
    forks_count: 100,
  },
  {
    id: 3,
    name: 'repo name3',
    owner: {
      avatar_url: 'https://source.unsplash.com/random',
    },
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur libero alias numquam distinctio accusantium recusandae expedita quidem autem sed repudiandae, veritatis excepturi',
    watchers_count: 100,
    stargazers_count: 100,
    forks_count: 100,
  },
  {
    id: 4,
    name: 'repo name4',
    owner: {
      avatar_url: 'https://source.unsplash.com/random',
    },
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur libero alias numquam distinctio accusantium recusandae expedita quidem autem sed repudiandae, veritatis excepturi',
    watchers_count: 100,
    stargazers_count: 100,
    forks_count: 100,
  },
  {
    id: 5,
    name: 'repo name5',
    owner: {
      avatar_url: 'https://source.unsplash.com/random',
    },
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur libero alias numquam distinctio accusantium recusandae expedita quidem autem sed repudiandae, veritatis excepturi',
    watchers_count: 100,
    stargazers_count: 100,
    forks_count: 100,
  },
  {
    id: 6,
    name: 'repo name6',
    owner: {
      avatar_url: 'https://source.unsplash.com/random',
    },
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur libero alias numquam distinctio accusantium recusandae expedita quidem autem sed repudiandae, veritatis excepturi',
    watchers_count: 100,
    stargazers_count: 100,
    forks_count: 100,
  },
]

export const List: FC<ListProps> = ({ data, fetchData, searched }) => {
  const [loading, setLoading] = useState(false)

  const onRefresh = async () => {
    setLoading(true)
    await fetchData(searched)
    setLoading(false)
  }

  const renderItem: ListRenderItem<ListItem> = ({
    item: {
      name,
      owner,
      description,
      watchers_count,
      stargazers_count,
      forks_count,
    },
  }) => {
    return (
      <Item
        name={name}
        avatar={owner.avatar_url}
        desc={description}
        watchers={watchers_count}
        stars={stargazers_count}
        forks={forks_count}
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
    margin: 4,
  },
})
