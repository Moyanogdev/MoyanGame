import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'


const Input = ({ newStyles, ...restProps }) => {
  return (
    <TextInput style={{ ...styles.input, ...newStyles }} {...restProps}/>
  )
}

export default Input

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        marginVertical: 10,
        width: 50,
    }
})