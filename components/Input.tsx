import React, { useState, useEffect, useRef, FC } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { colors, offsets } from '../global/styles'

interface InputProps {
  fetchData: (name: string) => Promise<void>
}

export const Input: FC<InputProps> = ({ fetchData }) => {
  const [value, setValue] = useState('')
  const [typing, setTyping] = useState(false)
  const timeout = useRef<number | null>(null)

  useEffect(() => {
    if (value.trim() && !typing) {
      fetchData(value)
    }
  }, [value, typing])

  useEffect(() => {
    if (timeout.current !== null) {
      clearTimeout(timeout.current)
    }
  }, [])

  const onChangeText = (value: string) => {
    setValue(value)

    if (timeout.current !== null) {
      clearTimeout(timeout.current)
    }
    if (!typing) {
      setTyping(true)
    }
    timeout.current = setTimeout(() => {
      timeout.current = null
      setTyping(false)
    }, 500)
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
