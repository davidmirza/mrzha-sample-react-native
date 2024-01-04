import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Space = () => {
  return (
    <View style={{ marginTop: 5 }}>
    <Text style={styles.space} />
  </View>
  )
}

export default Space

const styles = StyleSheet.create({
    space: {
        height: 8,
        borderColor: "#D0D0D0",
        backgroundColor: "#D0D0D0",
        borderWidth: 1,
        
      },
})