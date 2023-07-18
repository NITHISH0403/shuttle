import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ScoreScreen = ({navigation}) => {
  return (
    <View style={styles.inner}>
        <Text>ScoreScreen</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    inner:{
        flex: 1,
        width: '100%',
        backgroundColor: 'black',
    },
})

export default ScoreScreen