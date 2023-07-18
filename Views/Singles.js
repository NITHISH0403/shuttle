import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const Singles = ({navigation}) => {
    const [player1Name, setPlayer1Name] = useState('Player1');
    const [player2Name, setPlayer2Name] = useState('Player2');
    const [points, setPoints] = useState('16');

  return (
    <View style={styles.inner}>
        <View style={styles.content}>
            <View style={styles.match}>
                <Text style={styles.matchInfo}>MATCH INFORMATION</Text>
                <TextInput placeholder='Enter the Player Name' placeholderTextColor="gray" onChangeText={(text)=>setPlayer1Name(text)} style={styles.inputValue}/>
                <TextInput placeholder='Enter the Player Name' placeholderTextColor="gray" onChangeText={(text)=>setPlayer2Name(text)} style={styles.inputValue}/>
                <TextInput value={points} onChangeText={(text)=>setPoints(text)} style={styles.inputValue}/>
                <View style={styles.inputValue2}>
                    <Button title='START' onPress={()=>{navigation.navigate('MatchScreen',{player1Name, player2Name, points})}} style={styles.button}/>
                </View>
            </View>
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    inner:{
        flex: 1,
        width: '100%',
        backgroundColor: 'white',
    },
    content:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F31559',
    },
    match:{
        display: 'flex',
        alignItems: 'center',
        width: '90%',
        height: 'auto',
        borderRadius: 10,
        backgroundColor: 'black',
    },
    matchInfo:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        fontSize: 15,
        color: 'white',
    },
    inputValue:{
        marginTop: 20,
        borderBottomWidth: 2,
        width: '80%',
        borderColor: 'red',
        color: 'white',
        fontSize: 15,
    },
    
    inputValue2:{
        marginTop: 20,
        width: '80%',
        color: 'white',
        fontSize: 15,
        marginBottom: 40
    },
})

export default Singles;