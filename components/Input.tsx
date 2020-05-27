import React, { useState, useEffect, FC } from 'react'
import { TextInput, StyleSheet } from 'react-native'

interface InputProps {
  fetchData: (name: string) => Promise<void>
}

export const Input: FC<InputProps> = ({ fetchData }) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    if (value.trim().length > 3) {
      fetchData(value)
    }
  }, [value])

  const onChangeText = (value: string) => {
    setValue(value)
  }

  return (
    <TextInput onChangeText={onChangeText} value={value} style={styles.input} />
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#f1f1f1',
    marginHorizontal: 4,
    padding: 8,
    borderRadius: 4,
  },
})
