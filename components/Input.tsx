import React, { useState, useEffect, FC } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { colors, offsets } from '../global/styles'

interface InputProps {
  fetchData: (name: string) => void
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
    <TextInput
      onChangeText={onChangeText}
      value={value}
      style={styles.input}
      placeholder='Start typing a repo name...'
      maxLength={20}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.white,
    padding: offsets.base * 2,
    borderRadius: offsets.base,
    fontSize: 24,
  },
})
