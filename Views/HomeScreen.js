import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.inner}>
        <View style={styles.header}>
            <Text style={styles.headerName}> SHUTTLE</Text>
        </View>
        <TouchableOpacity style={styles.btn1} onPress={()=>{navigation.navigate('Singles')}}>
            <Text style={styles.btn1_Text}>Singles</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2} onPress={()=>{navigation.navigate('Team')}}>
            <Text style={styles.btn2_Text}>Team</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    inner: {
        flex: 1,
        width: '100%',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30
    },
    header:{
        display: 'flex',
        height: 50,
        bottom: '30%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerName:{
        fontSize: 30,
        color: 'white',
    },
    btn1: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#F31559',
        backgroundColor: '#F31559',
    },
    btn1_Text:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    btn2: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#F31559',
        backgroundColor: '#F31559',
    },
    btn2_Text:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default HomeScreen