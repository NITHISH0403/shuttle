import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const TeamScreen = ({navigation}) => {
  return (
    <View style={styles.inner}>
      <View style={styles.team}>
        <TextInput placeholder='Enter the Team Name' placeholderTextColor="gray" style={styles.inputValue}/>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btn_Text}>ADD</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
    inner:{
        flex: 1,
        width: '100%',
        backgroundColor: 'black',
    },
    team:{
      display: 'flex',
      backgroundColor: 'black',
      flexDirection: 'row',
      gap: 10,
      alignItems: 'center',
      justifyContent: 'center',
      top: 10,
    },
    inputValue:{
      display: 'flex',
      borderWidth: 1,
      borderRadius: 10,
      width: '70%',
      backgroundColor:'white',
    },
    btn:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      borderRadius: 10,
      borderWidth: 1,
      width: '20%',
      backgroundColor: '#F31559',

    },
    btn_Text:{
      fontSize: 15,
      fontWeight: 'bold', 
      color: 'white',
    }
})

export default TeamScreen